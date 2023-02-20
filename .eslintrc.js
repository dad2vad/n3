module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-o6`
  extends: ['o6'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
