export default {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        tabWidth: 4,
      },
    },
  ],
  tabWidth: 2,
  useTabs: false,
};
