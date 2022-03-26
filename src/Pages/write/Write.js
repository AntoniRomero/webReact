import './write.css'

export default function Write() {
  return (
    <div className='write'>
    <img src='https://www.semana.com/resizer/mr_RmGot8noarHgf_606CLFTxv8=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/4H5JOXSQDRADPNHFOYV3ZMTEDE.jpg'
    className='writeImg' >

    </img>
     <form className='writeForm'>
         <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
             <i className="writeIcon fa-solid fa-plus"></i>
         </label>
             <input type='file' id='fileInput' style={{display:'none'}}/>
             <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
             
             </div>

             <div className='writeFormGroup'>
               <textarea placeholder='Tell your story..' type='text' className='writeInput writeText'></textarea>
          </div>
          <button className='writeSubmit'>Publish</button>
        </form>

    </div>
  )
}
