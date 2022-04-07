const path = require("path");

module.exports = {
  "framework": "@storybook/react",
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/stories.@(js|jsx|ts|tsx)"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      ["@babel/plugin-transform-react-jsx", { "runtime": "automatic" }]
    ]
  }),
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@components/*": path.resolve(__dirname, "../src/components"),
      "@pages/*": path.resolve(__dirname, "../src/pages"),
      "@styles/*": path.resolve(__dirname, "../src/styles"),
      "@types": path.resolve(__dirname, "../src/types/index"),
    };

    return config;
  },
}