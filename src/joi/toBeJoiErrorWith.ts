import { toBeJoiError } from './toBeJoiError';

export type ValidationErrorInfo = {
  path: string;
  type: string;
};

export type ToBeJoiErrorWith = (
  expected: ValidationErrorInfo,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeJoiErrorWith: ToBeJoiErrorWith;
    }
  }
}

const isErrorWith = ({ details: [detail] }, info: ValidationErrorInfo) => {
  const actualError = {
    path: detail.path.join('.'),
    type: detail.type
  };

  return jasmine.matchersUtil.equals(actualError, info);
};

export const toBeJoiErrorWith: ToBeJoiErrorWith = (expected: ValidationErrorInfo, actual) =>
  toBeJoiError(actual)
  && actual && actual.details && Array.isArray(actual.details)
  && isErrorWith(actual, expected);
