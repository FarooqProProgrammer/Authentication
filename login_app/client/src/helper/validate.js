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