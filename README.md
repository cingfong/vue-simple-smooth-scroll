# vue-simple-smooth-scroll

## Requirements
- Vue 2
## Installation
NPM
```bash
npm install vue-simple-smooth-scroll
```
## Usage
### custom main scrollbar
**main.js**
```javascript
import smoothScroll from "vue-simple-smooth-scroll";
Vue.use(smoothScroll)
```

**App.vue**
```vue
<template>
  <smooth-scroll>
    <!-- content -->
  </smooth-scroll>
</template>
```


## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
