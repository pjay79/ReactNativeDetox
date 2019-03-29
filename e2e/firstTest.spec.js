/* eslint-env detox/detox, jest */

describe('Example', () => {
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should have instructions text', async () => {
    await expect(element(by.id('instructions'))).toBeVisible();
  });

  it('should have a start button', async () => {
    await expect(element(by.id('button-start'))).toBeVisible();
  });

  it('should tap start button that turns into color blue', async () => {
    await element(by.id('button-start')).tap();
  });

  afterAll(async () => {
    await device.reloadReactNative();
  });
});
