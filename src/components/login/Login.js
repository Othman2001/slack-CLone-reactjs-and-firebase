import { Button } from '@material-ui/core'
import React from 'react'
import { auth,provider } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import {actionTypes} from '../../reducer'
import "./login.css"
function Login() {
    const [state,dispatch] = useStateValue()
    const signIn = (e)=>{
        e.preventDefault()
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    return (
        <div className = "login">
            <div className = "login__container">
                <img src="https://www.sketchappsources.com/resources/source-image/new-slack-logo-nicolas-ciotti.jpg" />
                <h1> Sign In Othman Progmmer </h1>
                <p>othman.slack.com</p>
                <Button onClick = {signIn}>  sign in with google </Button>
            </div>
        </div> 
    )
}

export default Login
