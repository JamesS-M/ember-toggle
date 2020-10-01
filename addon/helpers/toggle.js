import { helper } from '@ember/component/helper';
import reverse from '../utils/reverse'

export default helper(function toggle(params/*, hash*/) {
  return reverse(params[0])
});
