const create = (scope: any) => {
  return (utils: { [name: string]: Function }) => {
    Object.keys(utils).forEach(name => {
      scope.jasmine[name] = utils[name];
    });
  };
};

export const addUtils = create(global);
