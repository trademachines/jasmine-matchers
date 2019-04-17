import { hasModule } from '../../utils';

export interface Type<T> extends Function {
  new(...args: any[]): T;
}

export type CreateSpyObjFrom = <T>(type: Type<T>) => jasmine.SpyObj<T>;

declare global {
  namespace jasmine {
    const createSpyObjFrom: CreateSpyObjFrom;
  }
}

type AwsServiceDefinition = { serviceIdentifier: string, apiVersions: string[] };

const hasAwsModule = hasModule('aws-sdk');

const isAwsService = (type: Type<any>) =>
  hasAwsModule && type.hasOwnProperty('serviceIdentifier') && type.hasOwnProperty('apiVersions');

const getMethodsFromAwsService = (type: AwsServiceDefinition) => {
  const names = [];
  const AWS   = require('aws-sdk') as any;

  type.apiVersions.forEach(version => {
    const api        = AWS.apiLoader(type.serviceIdentifier, version);
    const operations = Object.keys(api.operations);

    names.push(...operations);
  });

  return names.map(([char, ...rest]) => char.toLowerCase() + rest.join(''));
};

const getMethodsFromProto = <T>(type: Type<T>): string[] => {
  const names = [];
  let proto   = type.prototype;

  do {
    Object.getOwnPropertyNames(proto)
      .filter(x => typeof proto[x] === 'function')
      .filter(x => x !== 'constructor')
      .forEach(x => names.push(x));
    proto = proto.__proto__;
  } while (proto !== Object.prototype);

  return names;
};

export const createSpyObjFrom: CreateSpyObjFrom = type => {
  let names: string[];

  switch (true) {
    case isAwsService(type):
      names = getMethodsFromAwsService(type as unknown as AwsServiceDefinition);
      break;
    default:
      names = getMethodsFromProto(type);
      break;
  }

  return jasmine.createSpyObj(type.name, Array.from(new Set(names)));
};
