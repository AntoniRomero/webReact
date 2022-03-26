import './posts.css'

export default function Posts() {
  return (
    <div className='posts'>
       <img className='postsImg'
          src='https://www.esferamusical.com/wp-content/uploads/2020/04/contrabajo-1-1.jpg'
       />

       <div className='postsInfo'>
          <div className='postsCategories'>
            <span className='postsCategories'>Music</span>
            <span className='postsCategories'>Life</span>
          </div>
             <span className='postsTitle'>Lorem ipsun</span>
              <hr/>
       
          <span className='postsDate'>1 hour ago</span>
        </div>
             <p className='postsDescription'>Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion DescripcionDescripcion Descripcion 
             </p>
    </div>
  )
}
