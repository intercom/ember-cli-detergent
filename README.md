# ember-cli-detergent

Ember linting tools such as [`ember-cli-eslint`](https://github.com/ember-cli/ember-cli-eslint) are a great way of enforcing coding standards and preventing bad practices from entering your Ember applications. The rules that they enforce are all or nothing, if your app already contains these bad practices you are forced to either remove all occurrences before enabling the rule, or simply not use the rule.

`ember-cli-detergent` allows you to specify rules and an allowed count of rule failures, eg:

```js
methods: {
  'htmlSafe': {
    allowedCount: 5,
    message: 'Please avoid using Em.String.htmlSafe. Please see: https://foo.bar/'
  }
}
```

This configuration specifies that your app has 5 uses of `htmlSafe`. An incremental build time error is displayed if a sixth occurrence is added:

```
Please avoid using Em.String.htmlSafe. Please see: https://foo.bar/
Current count: 6, maximum allowed: 5
```

## Addon Installation

`ember install ember-cli-detergent`

Create a `.detergentrc` configuration file in the root of your app.

## Development Instructions

### Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-detergent`
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
