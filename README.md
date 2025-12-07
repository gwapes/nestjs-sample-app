# nestjs-sample-app (`v0.2.0`)

### Overview
`v0.2.0` -- I will explore `providers` and what they are responsible for in a NestJS application.

## Responsibilities of a `provider` [🔗](https://docs.nestjs.com/providers)
1. Providers are template classes for doing shared tasks among different parts of the app. Think request header validation, authorization, mapping, etc. This is the guts of the app.
    1. The NestJS docs [<ins>*docs*</ins>](https://docs.nestjs.com/providers#services) describe `Services` as `providers` that control access to data. Like `database`/`bucket` access or outside `http` calls.
1. The `@Injectable()` decorator is use to add metadata to the `Service` class. NestJS is designed similar to Angular, and it is designed to follow the [<ins>*inversion of control*</ins>](https://en.wikipedia.org/wiki/Inversion_of_control) design principle. Basically instead of using a collection of libraries connected to each other it provides a framework to use instead (this real benefit of is that it provides a common structure and set of patterns to follow when creating `REST apis` in a large development environment)
1. There is a [<ins>*great couple sections*</ins>](https://docs.nestjs.com/providers#dependency-injection) in the NestJS walkthrough about the frameworks dependency injection and different ways you can take advantage of it with `providers`.

## Steps
1. Rearrange what we currently have into a `service` -- `v0.2.1`[🔗](https://github.com/gwapes/nestjs-sample-app/compare/e43f845a1cd2bee78bb52e31dab6fa0592a288c9...2aa99791e64df23ca7a57a816c9d65ad221f2b7c?diff=split&w)
    <details>
    <summary>expand for steps</summary>

    1. Move the core logic from `jedi.controller.ts` and `mtg.controller.ts` into there own `service` files under a `/providers/services/*` directory structure.
    1. `import` the new `Service` classes into the `controller` files. Add the `Service` classes as a parameter to the `constructor`. Call the `Service` class function calls in their respective `Controller` class function calls.
    1. Add the new `provider` to the `providers` array in the `app.module.ts` file to register it as an injectable dependency.
    1. Run the application using `npm run start:dev` to active watch mode if its not already running and test the routes to make sure everything is wired up.
    </details>
