![Generic badge](https://badges.aleen42.com/src/react.svg)
![badge](https://badges.aleen42.com/src/typescript.svg)
![redux](https://badges.aleen42.com/src/redux.svg)
[![Generic badge](https://img.shields.io/badge/Firebase-API-<COLOR>.svg)](https://shields.io/)

# Linkedin clone

This project is create with React / TS / Redux and Firebase.
[Demo](https://my-linkedin-d6268.web.app/)


## 💻 Getting started

```zsh
git clone https://github.com/ClementBolin/my_linkedin.git && cd my_linkedin
```

Install dependencies:

```zsh
yarn install

or

npm install
```

Create a file called Firebase with the following command:

```zsh
touch ./src/firebase.ts
```

In this file add the following code with your Firebase information

```ts
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.analytics()
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
```

When your file is create and fill, you can run the application with the following command:

```zsh
yarn start

or

npm start
```

## 📕 Objectives of the application

I Build this application for discover and take in competences React / TS / Redux and Firebase.

## 🎬 Examples of the app

![example](./assets/example.gif)

## 🖥 Featues

- [x] Google account connection
- [x] Storage in Firebase with Firestore and Storage
- [x] Implementation of Redux
- [x] Linkedin Home design
