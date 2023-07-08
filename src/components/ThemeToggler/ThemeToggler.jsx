// import { useState, useEffect} from "react";
import { Toggle } from "./ThemeToggle.styled"
export const ThemeToggle = ({nav}) => {
 
    // const[theme, setTheme] = useState('light')
	// useEffect(() => {
	// 	document.documentElement.dataset.theme = theme;
	// 	localStorage.setItem('theme', theme);
	// }, [theme]);

	// const handleChange = () => {
    //     setTheme(theme === 'dark' ? 'light' : 'dark')
    // };
    
    return <Toggle nav={nav}>
        Toggle
    </Toggle>
}

