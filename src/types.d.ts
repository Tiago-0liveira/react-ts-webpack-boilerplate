type appName = "Password" | "Main"
interface AppPassword {
    Password: string,
    Submit: string
}

interface AppMain { }
interface Theme { }

interface Lang {
    applications: {
        Password: AppPassword,
        Main: AppMain
    }
}

interface Config {
    Config: {
        language: string,
        theme: string
    },
    Lang: {
        [key: string]: Lang
    },
    Themes: {
        [key: string]: Theme
    },
    updateState: (newState: Config) => void,
    getLang: (appName: appName) => Lang,
    getTheme: (appName: appName) => Theme
}

export { appName, AppPassword, AppMain, Theme, Lang, Config }