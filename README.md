
> thanks to [starter-kit-nuxt-locomotive-scroll nuxt v2](https://github.com/DidoMarchet/starter-kit-nuxt-locomotive-scroll) by [DidoMarchet](https://github.com/DidoMarchet/)

# Nuxt Locomotive Scroll

A Nuxt module to easily integrate [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) into your Nuxt application.

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]


- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/arashsheyda/nuxt-locomotive-scroll?file=playground%2Fapp.vue)
- [📖 &nbsp;Documentation](https://docs.arashsheyda.me/nuxt-locomotive-scroll)

## Features

- 🚀 &nbsp;Easy to use
- 🎨 &nbsp;Customizable

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add locomotive-scroll
```

That's it! You can now use Nuxt Locomotive Scroll in your Nuxt app ✨ or you can install it manually:

```bash
# npm
npm install nuxt-locomotive-scroll

# yarn
yarn add nuxt-locomotive-scroll

# pnpm
pnpm add nuxt-locomotive-scroll
```

and add `nuxt-locomotive-scroll` to the `modules` section of `nuxt.config`.

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-locomotive-scroll',
  ],
})
```

## Usage

Just add `v-locomotive` directive to the element you want to animate.

```vue
<template>
  <div v-locomotive>
    <!-- Your content here -->
  </div>
</template>
```

you can check the [playground](https://github.com/arashsheyda/nuxt-locomotive-scroll/tree/main/playground) for more examples.

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-locomotive-scroll/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-locomotive-scroll

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-locomotive-scroll.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-locomotive-scroll

[license-src]: https://img.shields.io/npm/l/nuxt-locomotive-scroll.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-locomotive-scroll

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
