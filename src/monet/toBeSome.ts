import { toBeMaybe } from './toBeMaybe';

export type ToBeSome = (
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeSome: ToBeSome;
    }
  }
}

export const toBeSome: ToBeSome = actual =>
  toBeMaybe(actual) && actual.isSome();
