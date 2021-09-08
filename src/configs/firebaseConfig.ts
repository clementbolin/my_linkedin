import config from './firebaseConfig.json'

type FirebaseConfig = {
    firebaseConfig: {
        apiKey: string,
        authDomain: string,
        projectID: string,
        storageBucket: string,
        messagingSenderId: string,
        appId: string,
    }
    reCaptcha: string
}

export const appConfig: FirebaseConfig = config