import { auth, provider } from "../firebase"
import firebase from "firebase"
import { SET_USER } from "./actionTypes"

export const setUser = (payload: firebase.User | null) => ({
    type: SET_USER,
    payload: payload
})

export const signInAPI = () => {
    console.log("tried to signin")
    return (dispatch: any) => {
        console.log("Create popup")
        auth.signInWithPopup(provider)
            .then((payload: firebase.auth.UserCredential) => {
                dispatch(setUser(payload.user))
            })
            .catch(error => alert(error.message))
    }
}

export const getUserAuth = () => {
    return (dispatch: any) => {
        auth.onAuthStateChanged(async (user: any) => {
            if (user) {
                dispatch(setUser(user))
            }
        })
    }
}

export const signOutAPI = () => {
    console.log("Start sign out")
    return (dispatch: any) => {
        auth.signOut()
            .then(() => dispatch(setUser(null)))
            .catch((err) => alert(err))
    }
}