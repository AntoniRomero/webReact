import Header from '../../components/Header/Header';
import './home.css';
import Post from '../../components/post/Post';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Home() {
  return (
    <>
   
        <Header />
        <div className='Home'>
        <Post />
        <Sidebar />
        homepage
    </div>
    </>
  )
}
