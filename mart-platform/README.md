# SkyMart

SkyMart is a React and Vite storefront demo. The current project has no backend, API server, or database: products are defined in `src/models/productData.js`, and account and cart data are stored in the browser.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). To check the production bundle, run `npm run build`; to run ESLint, use `npm run lint`.

## Demo shopping flow

1. The storefront routes send signed-out visitors to Login.
2. Choose **Create one**, register with a name, email, and password of at least eight characters, then sign in with those credentials.
3. Browse the catalog, open a product, add it to the cart, change quantities, or remove items.
4. Cart contents persist per registered email in this browser. Logout ends the current tab's login session.

Accounts and carts are stored in `localStorage`; the active login is stored in `sessionStorage`. This is suitable for local demonstration only. Do not use real credentials or treat browser storage as secure authentication. Production authentication, database-backed products and inventory, server-owned carts, and payment checkout require a backend and database, neither of which is present in this project.

No environment variables or database migrations are currently required.
