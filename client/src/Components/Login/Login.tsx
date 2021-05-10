import React, { useReducer, useState } from 'react'
import useInput from '../../Hooks/useInput'
import './Login.css'

import { login } from './LoginService';

const loginReducer = (state: LoginState, action: LoginAction) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                loading: true,
            }
        case 'loggedIn':
            return {
                ...state,
                loading: false
            }
        case 'error':
            return {
                ...state,
                loading: false
            }
    }
    return state;
}

const iniialState: LoginState = {
    username: "",
    password: "",
    loading: false,
    variant: "login"
}

interface LoginState {
    username: string,
    password: string,
    loading: boolean,
    variant: "login" | "register"
}

// interface LoginAction {
//     type: string,
//     payload?: string
// }

type LoginAction = | { type: "login" | "loggedIn" | "error" } | { type: "field", payload: string }

const Login: React.FC = () => {
    const [state, dispatch] = useReducer(loginReducer, iniialState)

    const { value: username, bind: usernameBind, reset: resetUserName } = useInput("")
    const { value: password, bind: passwordBind, reset: resetPassword } = useInput("")

    const { loading } = state;

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            dispatch({ type: 'login' })
            let result = await login({ username, password })
            console.log(result);
            dispatch({ type: 'loggedIn' })
        }
        catch (err) {
            console.log(err)
            dispatch({ type: "error" })
        }

        resetUserName()
        resetPassword()
    }

    const getValue = () => {
        let val = (loading) ? "Login in" : "LogIn";
        return val;
    }


    return (
        <div className="login">
            <form onSubmit={onSubmit}>
                <label className="login__input">UserName <input type="text" {...usernameBind} /></label>
                <label className="login__input">Passwrod <input type="text" {...passwordBind} /></label>
                <input type="submit" value={getValue()} disabled={loading} />

            </form>

        </div>
    )
}



export default Login
