# To start the dev server:
npm run dev: react
npm start: backend

# Routing, install package
npm install react-router-dom

# Upgrade React to 19
npm install react@19 react-dom@19

# Examples learnt
## useNavigate
- const navigate = useNavigate();
- navigate("/sample8");

## useNavigation()
- {navigation.state === 'loading'}
- {navigation.state === 'error'}
- {navigation.state === 'success'}
- {navigation.state === 'idle'}
- {navigation.state === 'stale'} and many more
- {navigation.state === 'stale' && <button onClick={navigation.refresh}>Refresh</button>}
- {navigation.state === 'stale' && <button onClick={navigation.reload}>Reload</button>}
- {navigation.state === 'stale' && <button onClick={navigation.refetch}>Refetch</button>}
- {navigation.state === 'stale' && <button onClick={navigation.retry}>Retry</button>}
- {navigation.state === 'stale' && <button onClick={navigation.cancel}>Cancel</button>}
- any any more

## useState()
- const [renderAlert3Component, setRenderAlert3Component] = useState(false)
- setRenderAlert3Component(true);

## useLoaderData
- when route loader() returns response, how to access it in a component
-  const eventJson = useLoaderData().event;
-  const event: EventDto = EventDto.parseJson(eventJson);
- 
## useParams()
- to get the data from the URL
- const params = useParams();
    - {params.productId}

## useRouteError()
- hook is used in React Router to retrieve error details that were thrown inside a route's loader or during rendering.
- const error = useRouteError() as {data: {message?: string; stack?: string}; status?: number};
  - error?.data?.message
  - error?.data?.stack
  - error?.status

## useSubmit()
- hook used to call submit function

## useActionData()
- hook used to retrieve data sent from action()
- const actionData = useActionData();

## useFetcher()
- hook used to trigger an action without invoking route
- newsletter form is displayed on every router and if you use normal Form then its action code must be repeated everywhere, so to avoid that use useFetcher()
- const fetcher = useFetcher();
- 
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```