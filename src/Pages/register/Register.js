import './register.css'

export default function Register() {
  return (
    <div className='register'>
    <span className='registerTitle'>Register</span>
     <form className='registerForm'>
         <label>Username</label>
         <input type='text' className='resgiterInput'  placeholder='Enter your username'/>
         <label>Email</label>
         <input type='text' className='resgiterInput'  placeholder='Enter your email'/>
         <label>Password</label>
         <input type='password' className='resgisterInput' placeholder='Enter your password'/>
         <button className='registerButton'>Register</button>
     </form>
     <button className='registerLoginButton'>
     
     </button>
    </div>
  );
}
