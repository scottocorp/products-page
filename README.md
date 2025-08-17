# Products Page #

Products Page is a simple responsive web application, based on [Next.js](https://nextjs.org/), that displays product information.

## Getting started ##

You'll need to install [node.js](https://nodejs.org/en/). I used version `22.14.0` but you can install [nvm](https://github.com/nvm-sh/nvm) to easily switch between node.js versions.

Then:

```
git clone git@github.com:scottocorp/products-page.git
cd products-page
```
Copy `.env.example` to `.env` and enter the appropriate vales. The defaults should work.
```
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
- Replace the placeholder image with real images.
- Fix some TypeScript warnings.

## License

See [LICENSE.md](./LICENSE.md).
