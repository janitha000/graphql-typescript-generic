import React, { useContext, useEffect, useReducer, useState } from 'react'
import useInput from '../../Hooks/useInput'
import './Login.css'

import { UserContext } from '../../Contexts/UserContext'

import { login } from './LoginService';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


const Login: React.FC = () => {
    const { state, dispatch } = useContext(UserContext)

    const { value: username, bind: usernameBind, reset: resetUserName } = useInput("")
    const { value: password, bind: passwordBind, reset: resetPassword } = useInput("")

    const { loading } = state;



    const setLocalStorage = (username: string) => {
        localStorage.setItem("user", username)
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            dispatch({ type: 'login' })
            let result = await login({ username, password })
            console.log(result);
            dispatch({ type: 'loggedIn', payload: username as string })

            setLocalStorage(username as string)


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
            <Link to='/' > Home </Link>

        </div>
    )
}



export default Login
