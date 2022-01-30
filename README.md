# Kitten React-Native Application

[![Kitten](https://freepikpsd.com/file/2019/10/kitten-clipart-png-4-Transparent-Images-Free.png?style=png=200x400)](https://github.com/mshavandi/placekitten?branch=main)

This project aims to use [placeKitten.com](https://placekitten.com) API to fetch all kitten images available and lets you customize count of the kittens to show.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [typescript](https://github.com/microsoft/TypeScript) to type-check our components exposed properties.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage) as storage solution.
- [redux](https://redux.js.org/) for state management.
- [@reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit) to simplify store configuration.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.
- [react-native-skeleton-placeholder](https://www.npmjs.com/package/react-native-skeleton-placeholder) for implementing skeleton loading.

## Running the App

### Android

- Clone the respository
- Go to the project root folder and run `yarn` or `npm i` to install the dependencies
- Then in the project root folder run `npm run android`
- It should first start to run the tests and then will build the app on your simulator/device

### iOS

- Clone the respository
- Go to the project root folder and run `yarn` or `npm i` to install the dependencies
- Then in the project root folder run `npx pod-install ios`
- Then in the project root folder run `npm run ios`
- It should first start to run the tests and then will build the app on your simulator/device

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside the application.
  - `api`: This folder contains configuration of api and could contain the api calls.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `containers`: Folder to store all main screens
    - `ScreenName`: Folder for the main screen component named `ScreenName` and all its dedicated dependencies, like components, utils, tests,...
      - `components`
      - `utils`
      - `test`
  - `data`: Folder to confiure redux, slices and also managing storage and its keys .
  - `global`: Folder to store components that are shared between at least two different screens.
  - `hooks`: Folder to store custom hooks.
  - `navigation`: Folder to store the navigators.
  - `types`: Folder to store all main types of the application, like requests params types or api responses types, ...
  - `utils`: Folder to store utility functions, constants, ... shared between at least two screens
  - `InitialScreen.tsx`: Main component after `index.tsx` that is wrapped in `redux Provider`
  - `index.tsx`: Main component that starts the whole app.

## Setup environments

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file. Keep in mind that if you are going to create new `envs` you have to define the script to build the project properly.

To define which env you want to use, just keep the structure `yarn [platform]: [environment]`

DEV: `yarn ios` or `yarn android`

STG: `yarn ios:staging` or `yarn android:staging`

PROD: `yarn ios:prod` o `yarn android:prod`

Also, you can use npm following the same rule as before: `npm run ios:staging`

Modify the environment variables files in root folder (`.env.development`, `.env.production` and `.env.staging`)

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew bundleRelease && ./gradlew assembleRelease`

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

## Redux

### Redux folders

- `Slices`: All the slices of the application is stored inside this folder, seperated by files
- `Store.ts`: Redux store is configured in this file and reducers are merged together inside it
