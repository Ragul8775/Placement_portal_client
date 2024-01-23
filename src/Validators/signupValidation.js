function validation(values) {
    
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (values.name === "") {
        error.name = "Name should not be empty!!"
    } else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "E-mail should not be empty!!"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty!!"
    } 
    
    return error;
}
export default validation;