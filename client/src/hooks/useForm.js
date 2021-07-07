// write your custom hook here to control your checkout form
import { useState } from "react";

export default function useForm(initialValue) {
    const [values, setValues] = useState(initialValue);

    const handleChange = e => {
        e.preventDefault();
        setValues({...values, [e.target.name]: e.target.value});
    }

    

    return [values, handleChange];
}