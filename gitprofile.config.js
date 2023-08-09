// gitprofile.config.js

const config = {
  github: {
    username: 'vilkelisv', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 3, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['technical_task'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,
    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['wireframe'],
    darkTheme: 'wireframe',

    // Custom theme
    customTheme: {
      primary: '#e3e3ed',
      secondary: '#181818',
      accent: '#eede02',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
