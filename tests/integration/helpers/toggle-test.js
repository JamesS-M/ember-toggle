import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | toggle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('value', true);

    await render(hbs`{{toggle this.value}}`);

    assert.equal(this.element.textContent.trim(), 'false');
  });
});
