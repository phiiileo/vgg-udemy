import React, {
    createContext, useState
} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState({
        light: {
            main: "grey"
        },
        dark: {
            main: "black"
        },
        color: "white"
    })

    const themeState = {
        ...theme,
        changeTheme: (type) => {
            setTheme({
                ...theme,
                type,
                color: theme[type].main
            })
        }
    }
    return (
        <ThemeContext.Provider value={{ theme: themeState }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider