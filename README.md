# Products Page #

Products Page is a simple responsive web application, based on [Next.js](https://nextjs.org/), that displays product information.

## Getting started ##

You'll need to install [node.js](https://nodejs.org/en/). I used version `22.14.0` but you can install [nvm](https://github.com/nvm-sh/nvm) to easily switch between node.js versions.

Copy `.env.example` to `.env` and enter the appropriate vales. The defaults should work.

Then:

```
git clone git@github.com:scottocorp/products-page.git
cd producs-page
npm install
npm run dev
```
and browse http://localhost:3000/

## To run the test suite: ##
```
npm run test
```

## TODO ##

This is definitely a "minimum viable product". More work is needed to:
- Add the ability to page the results from the server.
- Fix some TypeScript warnings.

## License

See [LICENSE.md](./LICENSE.md).
