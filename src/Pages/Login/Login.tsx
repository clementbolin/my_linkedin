import React from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux';
import { Login } from "../../Components/Login/Login"
import { signInAPI } from '../../actions';

export const LoginPage = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const loginGoogle = React.useCallback(
      () => dispatch(signInAPI()),
      [dispatch]
    )
    return (
        <div>
            <Login signInAPI={loginGoogle}/>
        </div>
    )
}