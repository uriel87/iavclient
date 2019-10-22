
export default function mediaFormValidation(value) {
	
    let error = {}

    if (!value.media) {
        error.media = "input is requierd";
    }
	
    return error;
}
