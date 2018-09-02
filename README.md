# template browserify cypress
An example of using budo & browserify to compile JS, and cypress to run automated and interactive tests.

Note `scripts/` -- we are using node to start a single process containing budo and cypress. This way we can stop both at the same time. Also we're using `getport` to grab an open port that gets passed to both tools.

## test
Open the cypress GUI:

    $ npm run cypress

Run cypress tests automatedly:

    $ npm run cypress-ci
    

