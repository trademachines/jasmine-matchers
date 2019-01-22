import { toBeMaybe } from './toBeMaybe';

export type ToBeNone = (
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeNone: ToBeNone;
    }
  }
}

export const toBeNone: ToBeNone = actual =>
  toBeMaybe(actual) && actual.isNone();
