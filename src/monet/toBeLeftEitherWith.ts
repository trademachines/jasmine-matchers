import { toBeLeftEither } from './toBeLeftEither';

export type ToBeLeftEitherWith = (
  content: any,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeLeftEitherWith: ToBeLeftEitherWith;
    }
  }
}

export const toBeLeftEitherWith: ToBeLeftEitherWith = (content, actual) =>
  toBeLeftEither(actual) && jasmine.matchersUtil.equals(actual.left(), content);
