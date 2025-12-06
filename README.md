# nestjs-sample-app (`v0.1.0`)

### Overview
v0.1.0 We will be exploring `controllers` and what they are responsible for in a NestJS application.

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
1. Create a new controller with a simple GET route -- `v0.1.1`
    <details>
    <summary>expand for steps</summary>

    1. Run `npm run start:dev` to run the app in `watch` to test changes on the fly.
    1. Moved the `app.controller` files to a `controllers` folder and creating an `index.ts` for the folder to make imports slimmer.
    1. Hit the default route using Postman (or similar tool) and make sure the app still works.
    1. Create a `jedi.controller.ts` file under the `controllers` folder (this can also be done via CLI)
    1. Create a `jedi.type.ts` file under a new folder `types` and import it into our new controller (I will also `index` this because I like keeping my imports slim)
        1. Caveat - when typing a `controller` return type, the framework enforces it be imported as a `type`
    1. Change the GET functions return type to `Jedi[]` in `jedi.controller.ts` and add some hardcoded return objects
    1. Add the new controller to the `app.module.ts` file
    1. Send a request to the apps new route via Postman
    </details>
