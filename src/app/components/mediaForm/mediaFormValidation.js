
export default function mediaFormValidation(value) {
	
    let error = {}

    if (!value.media) {
        error.media = "input is requierd";
    } else if (!(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/.test(value.media))) {
        error.media = "The medai input should include English or numbers";
    }
    //console.log("error", error)
	
    return error;
}
