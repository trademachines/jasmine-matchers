import { toBeEither } from './toBeEither';

export type ToBeLeftEither = (
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeLeftEither: ToBeLeftEither;
    }
  }
}

export const toBeLeftEither: ToBeLeftEither = actual =>
  toBeEither(actual) && actual.isLeft();
