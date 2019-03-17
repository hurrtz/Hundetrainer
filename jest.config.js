const { defaults } = require('jest-config');

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'js',
    'jsx',
    'ts',
    'tsx',
  ],
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|lottie-react-native|expo|react-native-maps|react-native-svg|react-native-branch|native-base-shoutem-theme|react-native-easy-grid|react-native-drawer|react-native-vector-icons|react-native-keyboard-aware-scroll-view|react-navigation|native-base|@expo|react-native-scrollable-tab-view)/)',
  ],
};
