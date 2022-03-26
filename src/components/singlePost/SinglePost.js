import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
     <div className='singlePostWrapper'>
         <img src='https://www.infobae.com/new-resizer/GWJie7YEqWzj-zrhWHiKy31ST-4=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/12/24071604/violin-stradivarius-1920-3.jpg' className='singlePostImage'/>
         <h1 className='singlePostTitle'>lorem ipsun
          <div className='singlePostEdit'>
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
            <span className='singlePostAuthor'>Author: <b>Antoni Romero</b>
            </span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>lorem ipsun lorem ipsun lorem ipsun lorem ipsun 
        lorem ipsun lorem ipsun lorem ipsun lorem ipsun
        lorem ipsun lorem ipsun lorem ipsun lorem ipsun
        lorem ipsun lorem ipsun lorem ipsun lorem ipsun
        lorem ipsun lorem ipsun lorem ipsun lorem ipsun
        lorem ipsun lorem ipsun lorem ipsun lorem ipsun
        lorem ipsun lorem ipsun lorem ipsun lorem ipsun
        lorem ipsun lorem ipsun lorem ipsun lorem ipsun
        lorem ipsun lorem ipsun lorem ipsun lorem ipsun
        lorem ipsun lorem ipsun lorem ipsun lorem ipsun
        lorem ipsun lorem ipsun lorem ipsun lorem ipsun
        lorem ipsun lorem ipsun lorem ipsun lorem ipsun

        </p>
     </div>
    </div>
  )
}
