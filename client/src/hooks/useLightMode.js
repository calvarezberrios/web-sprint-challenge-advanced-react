import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useLightMode(initialValue) {
    const [isEnabled, setIsEnabled] = useLocalStorage("light-mode", initialValue);

    useEffect(() => {
        if(isEnabled) {
            document.body.classList.add("light-mode")
        } else {
            document.body.classList.remove("light-mode")
        }
    }, [isEnabled])

    const setLightMode = value => {
        setIsEnabled(value);   
    }

    return [isEnabled, setLightMode];
}