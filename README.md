Budget Tracker
===

## Description 
- Uses React to create an Application for tracking budgets
  - Application has a dashboard route
    - `/dashboard` for `Dashboard` component
  - Dashboard component has child components for:
    - `Category-Form` which adds new categories which has a child:
      - `[Note-Item]` which is a category item, handles category delete, and has child for updating
        - `Category-Form` A form for updating categories.  It updates on submit.

## Setup
- Fork/clone git repository and run npm install in root directory
- Use `npm run watch` to run webpack in order to setup local environment
- For build version run `npm run build`

## Tools Used
- React
- Redux
- Node
- Webpack
- Babel

### Credits

- Created by Alex Hanson
