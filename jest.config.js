module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    './src/utils/test/setupFiles.tsx',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native.*|react-native.*' +
      '|@react-navigation.*' +
      ')/)',
  ],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/test/**/*.test.(ts|tsx|js)'],
};
