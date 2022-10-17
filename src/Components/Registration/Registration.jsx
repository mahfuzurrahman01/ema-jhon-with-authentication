import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/UserContext';
import './Registration.css'
const Registration = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    const signupHandle = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password.length < 8) {
            setError('Password should be 8 character')
            return
        }
        if (password !== confirm) {
            // alert('did not match')
            setError("Password didn't match")
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                //sweet alert
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })
            })
            .catch(error => {
                console.error(error)
                //sweet alert
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'error',
                    title: `${error}`
                })
            })
   
}
return (
    <div className='container'>
        <p className='p'>Sign up</p>
        <form onSubmit={signupHandle}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' required />
            </div>
            <div className="form-control">
                <label htmlFor="email">Password</label>
                <input type="password" name='password' id='password' required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name='confirm' id='confirm' required />
                <p className='error'>{error}</p>
            </div>
            <div>
                <button type="submit">Sing up</button>
            </div>
        </form>
        <p className='create-acc'><small>Already have an account? <Link id='link' to='/login'>login</Link></small></p>
    </div>
);
};

export default Registration;