# testcafe-browser-provider-testcafe-browser-selenium-provider
[![Build Status](https://travis-ci.org/bsakel/testcafe-browser-provider-testcafe-browser-selenium-provider.svg)](https://travis-ci.org/bsakel/testcafe-browser-provider-testcafe-browser-selenium-provider)

This is the **testcafe-browser-selenium-provider** browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).

## Install

```
npm install testcafe-browser-provider-testcafe-browser-selenium-provider
```

## Usage


You can determine the available browser aliases by running
```
testcafe -b testcafe-browser-selenium-provider
```

When you run tests from the command line, use the alias when specifying browsers:

```
testcafe testcafe-browser-selenium-provider:browser1 'path/to/test/file.js'
```


When you use API, pass the alias to the `browsers()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('testcafe-browser-selenium-provider:browser1')
    .run();
```

## Author
 
