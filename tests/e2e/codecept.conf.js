// 🌖🌖 Copyright Monwoo 2022 🌖🌖, build by Miguel Monwoo, service@monwoo.com

const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// https://playwright.dev/docs/api/class-browsertype#browser-type-launch-persistent-context
const { chromium } = require('playwright');  // Or 'webkit' or 'firefox'.

// chromeOptions ?
// (async () => {
//   // https://playwright.dev/docs/api/class-browsertype#browser-type-launch-persistent-context
//   const browserServer = await chromium.launchPersistentContext("/tmp/chrominium-playwrite");
//   console.log(browserServer);
//   // const wsEndpoint = browserServer.wsEndpoint();
//   // // Use web socket endpoint later to establish a connection.
//   // const browser = await chromium.connect(wsEndpoint);
//   // // Close browser instance.
//   // await browserServer.close();
// })();

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './scrap-*/*.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://127.0.0.1:8000',
      // waitForNavigation: "networkidle0",
      show: true,
      browser: 'chromium',
      // https://codecept.io/helpers/Playwright/#configuration
      keepCookies: true,
      keepBrowserState: true,
      // restart: 'session',
      // https://playwright.dev/docs/api/class-browsertype
      // browserType.launchPersistent
      // https://codecept.io/helpers/Playwright/#configuration
      // waitForAction: 700, // Will clean our pause after 700 ms...
      chromium: {
        // https://codecept.io/helpers/Playwright/#example-5-testing-with-chromium-extensions
        userDataDir: '/tmp/playwright-tmp-2', // necessary to launch the browser in normal mode instead of incognito,
      },
      // Typing long text will use time (use Page.type (human typing speed ?) instead of page.fill)
      // https://github.com/codeceptjs/CodeceptJS/issues/3253
      // timeout: 30000,
      timeout: 3000, // OK for READ, not for write
      // timeout: 30000, // OK for WRITE, not for read (too slow on fail tests)
    },
    // WebDriver: {
    //   url: 'https://applitools.com/helloworld',
    //   browser: 'chrome',
    //   desiredCapabilities: {
    //     chromeOptions: {
    //       args: [ '--headless', '--disable-extensions', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
    //     }
    //   },
    //   windowSize: '1920x600',
    //   smartWait: 5000,
    //   timeouts: {
    //     'script': 60000,
    //     'page load': 10000
    //   },
    // },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'moon-scrap-frontend',
  // https://github.com/codeceptjs/CodeceptJS/issues/2887
  // plugins: {
  //   pauseOnFail: {},
  // }
  // https://codecept.io/plugins/#tryto
  plugins: {
    tryTo: {
      enabled: true
    }
  },
}