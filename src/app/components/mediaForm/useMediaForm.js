
import { useState, useEffect } from "react";


const useMediaForm = (callback, mediaFormValidation) => {

    const initialStateValues = {
        media: ""
    }

    const [mediaInput, setMediaInput] = useState(initialStateValues);
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMediaInput({
            ...mediaInput,
            [name]: value
        })
	};

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(mediaFormValidation(mediaInput));
        setIsSubmitted(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitted) {
			callback();
        }
    }, [errors])

    return {
        handleChange,
        handleSubmit,
        mediaInput,
        errors,
    };

}


export default useMediaForm;