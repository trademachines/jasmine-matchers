export type ToBeEither = (
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeEither: ToBeEither;
    }
  }
}

export const toBeEither: ToBeEither = actual =>
  actual && typeof actual.isLeft === 'function';
