export type ToBeJoiError = (
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeJoiError: ToBeJoiError;
    }
  }
}

const isError = value => Object.prototype.toString.call(value) === `[object Error]`;

export const toBeJoiError: ToBeJoiError = (actual) =>
  isError(actual) && actual.isJoi && 'ValidationError' === actual.name;
