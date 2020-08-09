import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import SignIn from '../../Components/Auth/SignIn';

export default function LandingPage() {
    const [firstLoad, setFirstLoad] = useState(true)
    const [ses, setSesLoad] = useState(false)
    const { theme } = useContext(ThemeContext);
    console.log(theme)

    const handleThemeChange = () => {
        setSesLoad(!ses)
        theme.changeTheme(!ses ? "light" : "dark")

    }
    useEffect(() => {
        if (firstLoad) {
            theme.changeTheme(ses ? "light" : "dark")
            setFirstLoad(false)
        }
    }, [firstLoad, theme])
    return (
        <>
            <section style={{ backgroundColor: theme.color , transition:"all 1s"}}>
                <button onClick={handleThemeChange}>Change theme</button>
            </section>
        </>
    )
}
