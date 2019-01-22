const { Left, Right, Some, None } = require('monet');

describe('monet matchers', () => {
  describe('for Either', () => {
    describe('toBeEither', () => {
      it('null is not an Either', () => {
        expect(null).not.toBeEither();
      });

      it('something named Either is not an Either', () => {
        class Either {
        }

        expect(new Either()).not.toBeEither();
      });

      it('left and right values are considered an Either', () => {
        expect(Left('something')).toBeEither();
        expect(Right('something')).toBeEither();
      });
    });

    describe('toBeLeftEither', () => {
      it('Right is not a left Either', () => {
        expect(Right('something')).not.toBeLeftEither();
      });

      it('Left is a left Either', () => {
        expect(Left('something')).toBeLeftEither();
      });
    });

    describe('toBeRightEither', () => {
      it('Left is not a right Either', () => {
        expect(Left('something')).not.toBeRightEither();
      });

      it('Right is a right Either', () => {
        expect(Right('something')).toBeRightEither();
      });
    });

    describe('toBeLeftEitherWith', () => {
      it('values do not match', () => {
        expect(Left('something')).not.toBeLeftEitherWith('something else');
      });

      it('values do match', () => {
        expect(Left('something')).toBeLeftEitherWith('something');
      });

      it('values do match via asymmetric matcher', () => {
        expect(Left('something')).toBeLeftEitherWith(jasmine.any(String));
      });
    });

    describe('toBeRightEitherWith', () => {
      it('values do not match', () => {
        expect(Right('something')).not.toBeRightEitherWith('something else');
      });

      it('values do match', () => {
        expect(Right('something')).toBeRightEitherWith('something');
      });

      it('values do match via asymmetric matcher', () => {
        expect(Right('something')).toBeRightEitherWith(jasmine.any(String));
      });
    });
  });

  describe('for Maybe', () => {
    describe('toBeMaybe', () => {
      it('null is not a Maybe', () => {
        expect(null).not.toBeMaybe();
      });

      it('something named Maybe is not a Maybe', () => {
        class Maybe {
        }

        expect(new Maybe()).not.toBeMaybe();
      });

      it('some and none values are considered a Maybe', () => {
        expect(Some('something')).toBeMaybe();
        expect(None()).toBeMaybe();
      });
    });

    describe('toBeNone', () => {
      it('something is not a None', () => {
        expect(Some('something')).not.toBeNone();
      });

      it('None is ok', () => {
        expect(None()).toBeNone();
      });
    });

    describe('toBeSome', () => {
      it('nothing is not Some', () => {
        expect(None()).not.toBeSome();
      });

      it('Some is ok', () => {
        expect(Some('something')).toBeSome();
      });
    });

    describe('toBeSomeWith', () => {
      it('values do not match', () => {
        expect(Some('something')).not.toBeSomeWith('something else');
      });

      it('values do match', () => {
        expect(Some('something')).toBeSomeWith('something');
      });

      it('values do match via asymmetric matcher', () => {
        expect(Some('something')).toBeSomeWith(jasmine.any(String));
      });
    });
  });
});
