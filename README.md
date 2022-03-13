# Vue 3 + Router + i18n + Typescript + Vite + ESLint + Prettier + Stylelint

This template should help get you started developing with Vue 3 and Typescript in Vite.
The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Credit

This is an altered version of [vite-vue-ts-storybook](https://github.com/Miguel-Bento-Github/vite-vue-ts-storybook), removing Storybook, adding vue-router, more aggressive linting/autofixing, and updating some dependencies.

## Vue-i18n Caveat

At the time of writing, `vue-i18n` 9.1.x does not play nice with `<script setup>`, but `@intlify/vite-plugin-vue-i18n` has it as a peer dependency. To resolve this, you must run `npm i --force` for the time being.

## Add translations to locales files

Translations are ready to go with [vue-i18n](https://vue-i18n.intlify.dev/)
Add your files to `/locales` and are you are set.

## ESLint

Change your config at `.eslintrc.js`

## Prettier

Change config at `.prettierrc`

## Stylelint

Change config at `.stylelintrc.json`

## Scripts

```
npm install // installs packages
npm run dev // starts the dev server
npm run build // run build
npm run serve // preview build
npm run lint // lint and fix all files
npm run format // run prettier on all files
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Folder structure

```
.
├── LICENSE
├── README.md
├── index.html
└── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── robots.txt
│   └── svg
│       ├── eslint.svg
│       ├── prettier.svg
│       ├── ts.svg
│       ├── vite.svg
│       └── vue.svg
├── src
│   ├── App.vue
│   ├── assets
│   │   └── fonts
│   │       └── overpass-regular.otf
│   ├── components
│   │   ├── HelloWorld.vue
│   │   └── LocaleSelect.vue
│   ├── data
│   │   └── links.json
│   ├── locales
│   │   ├── en.json
│   │   ├── pt.json
│   │   └── zh.json
│   ├── main.ts
│   ├── router
│   │   └── index.ts
│   ├── shims-vue.d.ts
│   ├── styles
│   │   ├── _colors.scss
│   │   ├── _font.scss
│   │   ├── _reset.scss
│   │   ├── boot.scss
│   │   └── functions
│   │       └── _color.scss
│   └── types
│   │   └── Size.ts
│   ├── views
│   │   ├── Home.vue
├── tsconfig.json
├── vite.config.ts
```
