npm install @ngrx/store --save
npm install @ngrx/effects --save
npm install @ngrx/entity --save
npm install @ngrx/store-devtools --save

npm install @ngrx/schematics -g
ng add @ngrx/schematics@latest

Action
ng g action User

Reducer
ng g reducer User --reducers reducers/index.ts

Selector
ng g selector User

effects
ng g effect User --root --module app.module.ts