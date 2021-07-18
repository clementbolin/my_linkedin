import { auth, provider } from "../firebase"
import firebase from "firebase"
import { SET_USER } from "./actionTypes"

export const setUser = (payload: firebase.auth.UserCredential) => ({
    type: SET_USER,
    payload: payload
})

export const signInAPI = () => {
    console.log("tried to signin")
    return (dispatch: any) => {
        console.log("Create popup")
        auth.signInWithPopup(provider)
            .then((payload: firebase.auth.UserCredential) => {
                dispatch(setUser(payload))
            })
            .catch(error => alert(error.message))
    }
}
