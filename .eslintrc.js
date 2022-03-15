module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  plugins: ["simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "plugin:markdown/recommended",
    "plugin:@intlify/vue-i18n/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@intlify/vue-i18n/no-dynamic-keys": "error",
    "@intlify/vue-i18n/no-unused-keys": [
      "error",
      {
        extensions: [".js", ".vue"],
      },
    ],
    "@intlify/vue-i18n/no-raw-text": "off",
  },
  settings: {
    "vue-i18n": {
      localeDir: "./src/locales/*.json",
      // Should match your vue-i18n major version
      messageSyntaxVersion: "^9.0.0",
    },
  },
};
