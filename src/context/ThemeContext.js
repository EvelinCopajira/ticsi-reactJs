//impor react
import { createContext, useState } from "react";

//guardo context en una constante
const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    //estado para definir si la página tiene o no que mostrar darkMode
    const [darkTheme, setDarkTheme] = useState(false)

    //funcionn para transformar el setDarkTheme de false a true     
    const handleTheme = () => {
        setDarkTheme(!darkTheme)
    }

    const data = {
        darkTheme,
        handleTheme
    }

    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
export {ThemeContext};
