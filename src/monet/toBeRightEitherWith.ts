import { toBeRightEither } from './toBeRightEither';

export type ToBeRightEitherWith = (
  content: any,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeRightEitherWith: ToBeRightEitherWith;
    }
  }
}

export const toBeRightEitherWith: ToBeRightEitherWith = (content, actual) =>
  toBeRightEither(actual) && jasmine.matchersUtil.equals(actual.right(), content);
