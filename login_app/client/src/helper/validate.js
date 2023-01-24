import toast from "react-hot-toast"
// validate 
export async function usernameValidate(values){
    const erros = usernameVerify({},values);
    return erros
}



function usernameVerify(error={},values){
    if(!values.username){
        error.username = toast.error("Username Required")
    }else if(values.username.includes(" ")){
        error.username = toast.error("Invalid UserName")
    }
    return error
}


// validate password
export async function passwordValidate(values){
    const errors = passwordVerify({},values)
    return errors
}
// ================== Validate Password =============
function passwordVerify(error = {},values){
    const specialChars = /^!@#\$%\^&\*\*\(\)_\+\{\}:"\?><":$/
    if(!values.password){
        error.password = toast.error("Password Required...")
    }
    else if (values.password.includes(" ")){
        error.password = toast.error("Wrong Password")
    }
    else if (values.password.length <4 ){
        error.password = toast.error("Password must be More than")
    }
    else if (!specialChars.test(values.password)){
        error.password = toast.error("Password must have special characters")
    }
    return error
}