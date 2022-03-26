import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
   
  const user = false;
  return (

    <div className='navDirection'>
      <div className='navLeft'>
       <i className='leftIcon fa-brands fa-facebook'></i>
       <i className='leftIcon fa-brands fa-twitter-square'></i>
       <i className='leftIcon fa-brands fa-instagram'></i>
       </div>


      <div className='navCenter'>
        <ul className='navList'>
          <li className='navItems'><Link className='link' to = '/'>HOME</Link></li>
          <li className='navItems'><Link className='link' to = '/about'>ABOUT</Link></li>
          <li className='navItems'><Link className='link' to = '/contact'>CONTACT</Link></li>
          <li className='navItems'><Link className='link' to = '/write'>WRITE</Link></li>
          <li className='navItems'>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>


      <div className='navRigth'>
        {
          user ? (  <img className='topImg'src='https://images.pexels.com/photos/258288/pexels-photo-258288.jpeg?cs=srgb&dl=pexels-pixabay-258288.jpg&fm=jpg' alt=''/>

          ) : (
            <ul className='navList'>
             <li className='navItems'>
              <Link className='link' to = '/login'>
                 LOGIN
               </Link>
              </li>
             <li className='navItems'>
               <Link className='link' to = '/register'>
                 REGISTER
               </Link>
             </li>
            </ul>
          )}
          <i className='searchIcon fa-solid fa-magnifying-glass'></i>
      </div>
   
    </div>
  );
}
