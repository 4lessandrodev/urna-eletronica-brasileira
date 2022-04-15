const path = require("path");
const webpack = require('webpack');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  framework: "@storybook/react",
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      ["@babel/plugin-transform-react-jsx", { "runtime": "automatic" }]
    ]
  }),
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    config.resolve.extensions.push(".ts", ".tsx");
    
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: [],
        path: '/',
        loader: 'default',
      })
    }));

    // config.plugins.push(new TsconfigPathsPlugin({
    //   configFile: path.resolve(__dirname, '..', './tsconfig.json'),
    //   baseUrl: path.resolve(__dirname, '..'),
    // }));

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|jpg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    });

    config.resolve.alias = {
      "@components/*": path.resolve(__dirname, "..", "src", "components", "*"),
      "@pages/*": path.resolve(__dirname, "..", "src", "components","*"),
      "@components/*": path.resolve(__dirname, "..", "src", "pages", "*"),
      "@styles/*": path.resolve(__dirname,"..", "src", "styles", "*"),
      "@types": path.resolve(__dirname,"..", "src", "types", "index"),
      "@contexts/*": path.resolve(__dirname,"..", "src", "contexts", "*"),
      "@model/*": path.resolve(__dirname,"..", "src", "model", "*"),
      ...config.resolve.alias,
    };
    
    return config;
  },
}
