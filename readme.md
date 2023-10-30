# vue3 ClickAway

Detect clickaway from element in vue 3 apps

## Install

### PNPM

```bash
pnpm add @manusanchev/vue3-clickaway
```

### Yarn

```bash
yarn install @manusanchev/vue3-clickaway
```

### NPM

```bash
npm install @manusanchev/vue3-clickaway
```

## Register

### Vue 3

```js
import { createApp } from "vue";
import ClickAway from "@manusanchev/vue3-clickaway";
import App from "./App.vue";

const app = createApp(App);
app.use(ClickAway);
app.mount("#app");

```

### Nuxt 3

plugins/clickaway.client.ts

```nuxtjs
import ClickAway from "@manusanchev/vue3-clickaway";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ClickAway);
});
```

## Usage

```vue
<script setup lang="ts">

function onClickAway() {
  // your code here
}
</script>

<template>
  <div v-clickaway="onClickAway">
    <!-- Content -->
  </div>
</template>
```
