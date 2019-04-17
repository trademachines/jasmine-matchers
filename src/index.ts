import { addMatchers } from 'add-matchers';
import { addUtils } from './jasmine';
import * as matchersByName from './matchersByName';
import * as utilsByName from './utilsByName';

addMatchers(matchersByName);
addUtils(utilsByName);

export { matchersByName, utilsByName };
