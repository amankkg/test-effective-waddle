# test-effective-waddle

Run `yarn` to install dependencies and then `yarn dev` - run app in dev mode @ http://localhost:3000.

See `./package.json` for details.

## Vending Machine problem high-level breakdown

_Terminology used here is not strict._

### Core

Vending Machine is an automated unit who's main purpose is to sell goods. Main features include accepting of cash (a smater one can also accept credit cards) and releasing of selected/purchased item.

Basically, it's just a state machine (FSM). State describes whether can we release an item or not. Events reflect money insertion and item selection.
![fsm]

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
