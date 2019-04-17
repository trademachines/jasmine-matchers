export const hasModule = (name: string) => {
  try {
    return typeof require.resolve(name) === 'string';
  } catch (e) {
    if ('MODULE_NOT_FOUND' === e.code) {
      return false;
    }

    throw e;
  }
};
