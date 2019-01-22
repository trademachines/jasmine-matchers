import { addMatchers } from 'add-matchers';
import * as matchersByName from './matchersByName';

addMatchers(matchersByName);

export default matchersByName;
