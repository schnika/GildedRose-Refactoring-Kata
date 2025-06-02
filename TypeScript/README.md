# Gilded Rose

This is the Gilded Rose kata in TypeScript.

## Getting started

Install dependencies

```sh
npm install
```

## Run the unit tests from the Command-Line

There are two unit test frameworks to choose from, Jest and Mocha.

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

Mocha

```sh
npm run test:mocha
```


## Run the TextTest fixture from the Command-Line

_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

You should make sure the command shown above works when you execute it in a terminal before trying to use TextTest (see below).


## Run the TextTest approval test that comes with this project

There are instructions in the [TextTest Readme](../texttests/README.md) for setting up TextTest. You will need to specify the Python executable and interpreter in [config.gr](../texttests/config.gr). Uncomment these lines:

    executable:${TEXTTEST_HOME}/python/texttest_fixture.py
    interpreter:python



## TODO

* fix test "quality should not be more than 50"
* lets discuss if we need a product categroy for backstaage passes, because right now the backstage passes requirements only apply to `Backstage passes to a TAFKAL80ETC concert`
* check edge cases for max quality
* research if vscode has some kind of automatic refactoring options, such as swapping if else condition bodies, etc. 

## Next session

* Refactor, then implement new feature
* Since we can't change the item class, we consider 
composing it together into our own class (imagine item class
is DTO from external provider)
* HOMEWORK: by Friday -> come up with a refactoring concept / draft 