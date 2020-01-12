import { useEffect, useState } from "react";

function useDarkMode() {
    const [theme, setTheme] = useState(
        window.localStorage.getItem("theme") || "light"
    );
    const [componentMounted, setComponentMounted] = useState(false);

    function setMode(mode) {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    }

    function changeTheme() {
        if (theme === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localTheme
            ? setMode("dark")
            : localTheme
            ? setTheme(localTheme)
            : setMode("light");
        setComponentMounted(true);
    }, []);

    return [theme, changeTheme, componentMounted];
}

export default useDarkMode;
