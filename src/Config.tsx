import React from "react"
import { Config, appName } from "./types"
import { defaultLang, defaultTheme } from "./typeDefaults"

type ConfigProps = {}
type ConfigState = Config

const conf: Config = {
    Config: {
        language: navigator.language,
        theme: "dark"
    },
    Lang: {
        enEN: defaultLang,
    },
    Themes: {
        dark: defaultTheme
    },
    updateState: (newState: Config) => { },
    getLang: (appName: appName) => { return defaultLang },
    getTheme: (appName: appName) => { return defaultTheme }
}
export const ConfigContext = React.createContext(conf);
export default class ConfigComponent extends React.Component<ConfigProps, ConfigState> {

    constructor(props: ConfigProps) {
        super(props)
        conf.updateState = this.updateState;
        conf.getLang = this.getLang;
        conf.getTheme = this.getTheme;
        this.state = conf

    }

    updateState = (newState: Config) => {
        this.setState(newState)
    }

    getLang = (appName: appName) => {
        let lang: string = "enEN"
        if (this.state.Lang[this.state.Config.language.replace("-", "")] !== undefined) { lang = this.state.Config.language.replace("-", "") }
        return this.state.Lang[lang]
    }

    getTheme = (appName: appName) => {
        let lang = "enEN"
        if (this.state.Lang[this.state.Config.language.replace("-", "")] !== undefined) { lang = this.state.Config.language.replace("-", "") }
        return this.state.Lang[lang].applications[appName]
    }

    
    render() {
        return (
            <ConfigContext.Provider value={conf}>
                {this.props.children}
            </ConfigContext.Provider >
        );
    }
}