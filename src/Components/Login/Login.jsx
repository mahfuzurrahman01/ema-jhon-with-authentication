import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/UserContext';
import './Login.css'

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();
    const signInHandler = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
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
            console.log(location.state)
            navigate(from,{replace: true})
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
            <p className='p'>Login</p>
            <form onSubmit={signInHandler}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Password</label>
                    <input type="password" name='password' id='password' required />
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
            </form>
            <p className='create-acc'><small>New to Ema-jhon? <Link id='link' to='/signup'>create an account</Link></small></p>
        </div>
    );
};

export default Login;