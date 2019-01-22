import { toBeEither } from './toBeEither';

export type ToBeRightEither = (
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeRightEither: ToBeRightEither;
    }
  }
}

export const toBeRightEither: ToBeRightEither = actual =>
  toBeEither(actual) && actual.isRight();
