import { AppMain, AppPassword, Lang, Theme} from "./types"

const defaultAppPassword: AppPassword = {
    Password: "Password",
    Submit: "Submit"
}

const defaultAppMain: AppMain = {}

const defaultTheme: Theme = {}

const defaultLang: Lang = {
    applications: {
        Password: {
            Password: "Password",
            Submit: "Submit"
        },
        Main: {}
    }
}


export { defaultAppMain, defaultAppPassword, defaultLang, defaultTheme }