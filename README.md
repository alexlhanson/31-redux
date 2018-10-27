Budget Tracker
===

## Description 
- Uses React to create an Application for tracking budgets
  - `App` has a dashboard route
    - `/dashboard` for `Dashboard` component
  - `Dashboard` component has children components for:
    - `Category-Form` which adds new categories
      - `[Note-Item]` which is a category item, handles category delete
        - `Category-Form` A form for updating categories.  It updates on submit.
        - `ExpenseForm` for creating expenses
          - `[ExpenseItem]` for listing of expenses under a category
            - `ExpenseForm` for updating an expense

## Setup
- Fork/clone git repository and run npm install in root directory
- Use `npm run watch` to run webpack in order to setup local environment
- For build version run `npm run build`

## Tools Used
- React
- Redux
  - Middleware: Logger
  - Middleware: Validator
- Node
- Webpack
- Babel

## Test Coverage
- Actions
  - category
  - expense
- Reducers
  - category
  - expense
- Components
  - expense form
  - category form
  - expense item
  - category item
  - dashboard
  - draggable
  - droppable

### Credits

- Created by Alex Hanson
