import React from 'react'
import {Link} from "react-router-dom"
import styles from "../styles/Username.module.css"
import {Toaster} from "react-hot-toast"
import {useFormik} from "formik"
import { usernameValidate } from '../helper/validate'

const UserName = () => {

  const formik = useFormik({
    initialValues:{
      username:''
    },
    validate:usernameValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values =>{
        console.log(values);
    }
  });
  return (
    <div className='container mx-auto'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className='flex justify-center items-center h-screen'>
            <div className={styles.glass}>
                    <div className="title flex flex-col items-center">
                        <h4 className='text-5xl font-bold'>Hello Again</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                            Explore more contact With Us
                        </span>
                    </div>
                    <form className="py-1" onSubmit={formik.handleSubmit}>
                         <div className="profile flex justify-center py-4 ">
                            <img className={styles.profile_img} src="data:image/png;base64,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" alt="avatar" />
                         </div>
                         <div className="textbox flex flex-col items-center justify-center py-4">
                                <input {...formik.getFieldProps('username')}  className={styles.textbox} type="text" placeholder='username' />
                                <button className={styles.btn} type='submit'>Lets Go</button>
                         </div>
                         <div className="text-center py-4">
                          <span className='text-gray-500'>Not a Member <Link className='text-red-500' to={"/register"}>Register Now</Link></span>
                         </div>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default UserName