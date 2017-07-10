# ember-cli-seer

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-seer`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Releasing

1. `./release [patch|minor|major]` This will create a PR for your release. Once it passes CI merge, delete the branch and then run:
1. `git remote add fury https://[username]@git.fury.io/intercom/ember-cli-seer.git` (first time only)
1. `./release fury` (To push a new release to gemfury)
