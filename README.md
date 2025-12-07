# nestjs-sample-app (`v0.0.0-init`) [🔗](https://github.com/gwapes/nestjs-sample-app/compare/ddcc8c21eb4c0b8da30bf1971bd95fabd2dd3dbb...8ae405be99962d1f4bc25e197a7e0d0538ca26ac?diff=split&w)

### Overview
v0.0.0-init introduces the basic structure of the API. It will include all package installation as well as repo setup.

## NestJS init
1. Install NestJS and init -- [official docs](https://docs.nestjs.com/first-steps)
    1. run `npm i -g @nestjs/cli`
    2. run `nest new nestjs-sample-app`
        <details>
          <summary>Thoughts on cli init</summary>
          
            - The `new` command places the project in a folder named after the app name passed in. I didnt care for this duplicate folder so I moved the files out and deleted it. Recommend setting up the app in your collective git folder and creating the git repo after.
            - I don't care for having unit test files located in the same directory structure as the source files; however, I'm going to keep this structure to try it because I can see an argument for it encouraging unit test writing by just making it easier to find the associated test file.
            - Setting up the app through the CLI seems to offer pretty much all the basics an app would need. Typescript setup, linting setup, a couple starter files that setup the NestJS pattern, and setting up both unit test and e2e tests.
        </details>
    3. There is an option to use [Fastify](https://fastify.dev/) but I will opt to use the default [expressJS](https://expressjs.com/)
    4. Thats pretty much it for setup. The Nest CLI makes it incredibly easy for learning.
    5. Run `npm start` or `npm run start:dev` for a watch run and send a request to `GET http://localhost:3000/` and watch as the app greets you warmly.
