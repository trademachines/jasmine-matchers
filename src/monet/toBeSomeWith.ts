import { toBeSome } from './toBeSome';

export type ToBeSomeWith = (
  content: any,
  expectationFailOutput?: any
) => boolean;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeSomeWith: ToBeSomeWith;
    }
  }
}

export const toBeSomeWith: ToBeSomeWith = (content, actual) =>
  toBeSome(actual) && jasmine.matchersUtil.equals(actual.some(), content);
