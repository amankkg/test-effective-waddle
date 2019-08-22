# test-effective-waddle

Run `yarn` to install dependencies and then `yarn dev` - run app in dev mode @ http://localhost:3000.

See `./package.json` for details. Check it out live https://test-effective-waddle.amankkg.now.sh

## Notes

For data shape see `./core/constants` Flow type definitions. For UI components see `./components`. `./pages/index.js` is app render root, dummy data lives here too.

No state management (STM) used (only `useState`s) so code became kinda messy with props being passed again and again :( ideally, it should be refactored with external state management.
But, the logic in `./core` is immutable and STM friendly.

UI is not finished and not polished, but essential functions are implemented.

Flow errors are not fixed 100%, but this is not the goal anyway.

Unit tests only for some plain JS code. I'd add e2e tests for high-level component (`Machine`) if more time given.

CSS-in-JS (`styled-components`) in some places become too cumbersome. I'd refactor and extract some simple components to its own folders.

All images used here are free to commercial use.

## Vending Machine problem high-level breakdown

_Terminology used here is not strict._

### Core

Vending Machine is an automated unit who's main purpose is to sell goods. Main features include accepting of cash (a smater one can also accept credit cards) and releasing of selected/purchased item.

Basically, it's just a state machine (FSM). State describes whether can we release an item or not. Events reflect money insertion and item selection.
![fsm]

#### Money

Good to support different currencies. Prices can be non-integer (\$2.58 ~= main currency + secondary currency). Cash-in should support this too.

### Features and constraints

- User should be able to start session by inserting money or selecting an item
- User should be able to receive an item if conditions are met (~= enough money for selected item)
- User should be able to add more money
- User should be able to get his change back

- Money should be presented in dollars and cents.
- Items price should be presented in dollars and cents.
- Items amount is finite and can become out of stock.
- One (piece of) item per session / transaction.

### Interface

![ui]

[fsm]: ./public/fsm.jpg
[ui]: ./public/ui.jpg
