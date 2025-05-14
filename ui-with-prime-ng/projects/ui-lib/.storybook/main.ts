// .storybook/main.ts
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  webpackFinal: async (config) => {
    config!.module!.rules!.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: /node_modules/,
    });

    return config;
  }
};

export default config;
