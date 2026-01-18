import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  "framework": "@storybook/react-webpack5",
  webpackFinal: async (config) => {
    // Override CSS rule to use postcss-loader with tailwind
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Remove existing CSS rules
    config.module.rules = config.module.rules.filter((rule: any) => {
      if (rule && rule.test) {
        return !rule.test.toString().includes('css');
      }
      return true;
    });

    // Add new CSS rule with PostCSS
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              config: path.resolve(__dirname, '../postcss.config.js'),
            },
          },
        },
      ],
    });

    return config;
  },
};
export default config;