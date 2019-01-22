const Joi = require('joi');

describe('joi matchers', () => {
  const schema = Joi.object({ someKey: Joi.string().required() });

  describe('toBeJoiError', () => {
    it('null is not a joi error', () => {
      expect(null).not.toBeJoiError();
    });

    it('normal errors are not joi errors', () => {
      expect(new Error()).not.toBeJoiError();
    });

    it('joi errors are ok', () => {
      const { error } = Joi.validate({}, schema);

      expect(error).toBeJoiError();
    });
  });

  describe('toBeJoiErrorWith', () => {
    it('null is not a joi error', () => {
      expect(null).not.toBeJoiErrorWith({ path: 'someKey', type: 'any.required' });
    });

    it('normal errors are not joi errors', () => {
      expect(new Error()).not.toBeJoiErrorWith({ path: 'someKey', type: 'any.required' });
    });

    it('joi errors not matching expected', () => {
      const { error } = Joi.validate({}, schema);

      expect(error).not.toBeJoiErrorWith({ path: 'otherKey', type: 'any.required' });
    });

    it('matches correct joi error', () => {
      const result = Joi.validate({}, schema);

      expect(result.error).toBeJoiErrorWith({ path: 'someKey', type: 'any.required' });
    });
  });
});
