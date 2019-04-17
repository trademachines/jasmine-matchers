const { hasModule } = require('../src/utils');

describe('hasModule', () => {
  it('returns true for existing modules', () => {
    expect(hasModule('jasmine')).toBeTrue();
  });

  it('returns false for non-existing modules', () => {
    expect(hasModule('non-existing')).toBeFalse();
  });
});
