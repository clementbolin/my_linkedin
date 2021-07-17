import { auth, provider } from "../firebase"

export const signInAPI = () => {
    console.log("tried to signin")
    return (dispatch: any) => {
        console.log("Create popup")
        auth.signInWithPopup(provider)
            .then(payload => console.log(payload))
            .catch(error => alert(error.message))
    }
}
