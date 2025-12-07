# nestjs-sample-app (`v0.1.0`)

### Overview
`v0.1.0` -- I will explore `controllers` and what they are responsible for in a NestJS application.

## Responsibilities of a `controller`
1. Handling of `requests` coming into the application
1. Sending `responses` back to the client
1. The `routing` mechanism will send the request to the appropriate `controller` from the `service` layer.

<details>
  <summary>Under the Hood</summary>

  - `controllers` leverage `classes` and `decorators`
  - `decorators` link `classes` with the necessary metadata
  - this link is then used to create a routing map to connect requests with the appropriate `controllers`
</details>

## Steps
> **Note:** I am only creating the second `controller` as I want to demonstrate calling both a REST and GraphQL based API from a NestJS app later on
1. Create a new controller with a simple `GET` route -- `v0.1.1` [🔗](https://github.com/gwapes/nestjs-sample-app/compare/0cd93743670cf2255c8266f30e3d481e94391e76...a5473ed2d720d4d515d996026e8bb83472db777d?diff=split&w)
    <details>
    <summary>expand for steps</summary>

    1. Run `npm run start:dev` to run the app in `watch` to test changes on the fly.
    1. Move the `app.controller` files to a `controllers` folder and creating an `index.ts` for the folder to make imports slimmer.
    1. Hit the default route using Postman (or similar tool) and make sure the app still works.
    1. Create a `jedi.controller.ts` file under the `controllers` folder (this can also be done via CLI)
    1. Create a `jedi.type.ts` file under a new folder `types` and import it into our new controller (I will also `index` this because I like keeping my imports slim)
        1. Caveat - when typing a `controller` return type, the framework enforces it be imported as a `type`
    1. Change the GET functions return type to `Jedi[]` in `jedi.controller.ts` and add some hardcoded return objects
    1. Add the new controller to the `app.module.ts` file
    1. Send a request to the apps new route via Postman
    </details>
1. Create a second `controller` for a Magic the Gathering search -- `v0.1.2` [🔗](https://github.com/gwapes/nestjs-sample-app/compare/a5473ed2d720d4d515d996026e8bb83472db777d...c57013827543576011b359e0afc622b7c89246e3?diff=split&w)
    <details>
    <summary>expand for steps</summary>

    1. Run `npm run start:dev` to run the app in `watch` to test changes on the fly if it isn't still on.
    1. Create an `mtg.controller.ts` under the `controllers` folder give it a void `findAll()` function as a `GET` route.
    1. Add the new `MTGController` to the `app.module.ts` file.
    1. Create a couple of basic `types` for our new `MTGController` to use.
    1. Create some hardcoded mock data for the new route to return.
    1. Send a Postman request to the new route and watch it work.
    </details>
1. Modify existing `controllers` and add new ones to demonstrate passing data via request to the `controllers` -- `v0.1.3` [🔗](https://github.com/gwapes/nestjs-sample-app/compare/c57013827543576011b359e0afc622b7c89246e3...82d3d86a32c83ebbd929041d85edda11a9aebc83?diff=split&w) [`bonus diff`](https://github.com/gwapes/nestjs-sample-app/compare/82d3d86a32c83ebbd929041d85edda11a9aebc83...34e810ff7d927aeb3bc4a15f90bd500a389916b6?diff=split&w)
    <details>
    <summary>expand for adding url params</summary>

    1. Remove the `app.controller.ts` from the `app.module.ts` file since we no longer need it (these basic setup files will be deleted later in this step)
    1. Modify the `mtg.type.ts` type `Card` to include a new field called `_id`, add some fake data in our `const cards` array.
    1. Add a new `GET` route on the `mtg.controller.ts` but using the `findOne()` method this time.
    1. Add a `@Param()` decorator to retrieve an `id` from the URL path params and add the decorator `@Get('cards/:id')` to the top of the `findOne()` function.
    1. Use `Array.prototype.find()` to search the `cards` array for any that contain the `id` value passed to the controller function
    </details>
    <details>
    <summary>expand for adding query string</summary>

    1. Modify the existing `@Get('cards')` route and add some `@Query()` decorators to retrieve `cards` by  `color` and `type`
    1. Include optional params for both `color` and `type` to the `findAll()` function
    1. Filter the hardcoded card array by the two params (optionally)
    1. If not already, run the app using `npm run start:dev` and test the changes for using query string params
    </details>
    <details>
    <summary>expand for adding request body</summary>

    1. Add a `@Post()` decorator to the `JediController` and include an empty `async create()` function call underneath it.
    1. Add the a `@Body()` decorator to the params area of the `create` call and add the param `request: Jedi`.
    1. Add the jedi object from the `POST` to the jedi array (after changing it to not be `const`)
    1. Run using `npm run start:dev` and test the new `POST` route
    </details>
