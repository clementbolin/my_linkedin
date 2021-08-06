import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { signOutAPI } from "../../actions"
import { Header } from "../../Components/Header/Header"
import { Home } from "../../Components/Home/Home"


export const HomePage = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const logoutGoogle = useCallback(
        () => dispatch(signOutAPI()),
        [dispatch]
    )
    return (
        <>
            <Header signOutAPI={logoutGoogle} />
            <Home />
        </>
    )
}