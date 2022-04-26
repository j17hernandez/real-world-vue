# real-world-vue

## Vuex Store

A example to get data from other modules, the following line of code is needed

```js

  fetchEvents({ commit, rootState }, { perPage, page }) {
    console.log('User logged', rootState.user.user);
  }
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Run Client Server BD

```
npm run json-server
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
