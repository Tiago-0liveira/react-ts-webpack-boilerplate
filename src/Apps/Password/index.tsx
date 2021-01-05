import React, { Component, useContext, useEffect, useState } from 'react';
import "./styles/style.scss"
import { ConfigContext } from "./../../Config"

const appName = "Password"
type PasswordProps = {
    loginHandler: (bool: boolean) => void
}
type PasswordState = {
    password: string
}
const password = "awdawd"

export default function Password(props: PasswordProps) {
    const Config = useContext(ConfigContext)
    const Lang = Config.getLang(appName)
    const [state, setState] = useState({ password: "" })
    const keydownHandler = (e: KeyboardEvent) => e.keyCode === 13 && props.loginHandler(password === state.password)
    const componentDidMount = () => document.addEventListener("keydown", keydownHandler)
    const componentWillUnmount = () => document.removeEventListener("keydown", keydownHandler)
    
    return (
        <div className="login-div">
            <div className="login-box">
                <h1>{Lang.applications[appName].Password}</h1>
                <div className="textbox">
                    <i className="fas fa-lock"></i>
                    <input onChange={(e) => {
                        setState({ password: e.target.value })
                    }} type="password" placeholder="Password" />
                </div>
                <input type="button" className="btn" value={Lang.applications[appName].Submit} onClick={(e) => {
                    const logic = password === state.password
                    props.loginHandler(logic)
                    !logic && e.preventDefault()
                }} />
                <button onClick={(e) => {
                    console.log()
                }}>change</button>
            </div>
        </div>
    );
}

/* export default class Password extends Component<PasswordProps, PasswordState> {
    Config = useContext(ConfigContext)
    constructor(props: PasswordProps) {
        super(props)
        this.state = {
            ...props,
            password: ""
        }
    }
    keydownHandler = (e: KeyboardEvent) => e.keyCode === 13 && this.props.loginHandler(password === this.state.password)
    componentDidMount = () => document.addEventListener("keydown", this.keydownHandler)
    componentWillUnmount = () => document.removeEventListener("keydown", this.keydownHandler)

    render() {
        return (
            <div className="login-div">
                <div className="login-box">
                    <h1>Password</h1>
                    <div className="textbox">
                        <i className="fas fa-lock"></i>
                        <input onChange={(e) => {
                            this.setState({ password: e.target.value })
                        }} type="password" placeholder="Password" />
                    </div>
                    <input type="button" className="btn" value="Sign in" onClick={(e) => {
                        const logic = password === this.state.password
                        this.props.loginHandler(logic)
                        !logic && e.preventDefault()
                    }} />
                </div>
            </div>
        );
    }
} */


