import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
          <div className='settingsTitle'>
           <span className='settingsUpdateTitle'>Update your account</span>
          <span className='settingsDeleteTitle'>Delete account</span>
        </div>
      <form className='settingsForm'>
        <label >Profile Picture</label>
         <div className='settingsPP'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1XfE9oyFp8R7-GoN-7z6vs5rnABxKKUoCA&usqp=CAU' alt='' />
            <label htmlFor='fileInput'>
            <i className='settingsPPIcon fa-solid fa-user'></i>
            </label> 
            <input type="file" id='fileInput' style={{ display :'none'}}/>
           </div>
            <label>User name</label>
            <input type='text' placeholder='AntoniRM'/>
            <label>Email</label>
            <input type='email' placeholder='antoni@RM'/>
            <label>Password</label>
            <input type='password' />
            <button className='settingsSubmit'>Update</button>
        </form>
        </div>
       <Sidebar />
      </div>
     )
  }

