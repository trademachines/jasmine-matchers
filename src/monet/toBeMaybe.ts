export type ToBeMaybe = (
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeMaybe: ToBeMaybe;
    }
  }
}

export const toBeMaybe: ToBeMaybe = actual =>
  actual && typeof actual.isSome === 'function' && typeof actual.isNone === 'function';
