import type { StorybookConfig } from '@storybook/react-webpack5';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-webpack5-compiler-swc',
  ],
  webpackFinal: async (config) => {
    // Find and modify the CSS rule to include PostCSS with Tailwind
    const cssRule = config.module?.rules?.find(
      (rule) => rule && typeof rule === 'object' && rule.test?.toString().includes('css')
    );

    if (cssRule && typeof cssRule === 'object') {
      cssRule.use = [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                tailwindcss,
                autoprefixer,
              ],
            },
          },
        },
      ];
    } else {
      // Add a new CSS rule if none exists
      config.module?.rules?.push({
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  tailwindcss,
                  autoprefixer,
                ],
              },
            },
          },
        ],
      });
    }

    return config;
  },
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
};

export default config;