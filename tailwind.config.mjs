import config from './gitprofile.config';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    textColor: {
      white: '#FFF',
      black: '#000',
      accent: '#535353',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [...config.themeConfig.themes],
  },
};
