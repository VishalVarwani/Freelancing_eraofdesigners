import React from 'react'
import "../css/lightbox.css"

export default function Gallery() {
  return (
    <div>
     <section className="bg-gray-dark">
  <section style={{backgroundImage:"url(assets-2/images/parallax-1.jpg"}} className="section parallax-container" data-parallax-img="assets-2/images/bg-image-1.jpg">
    <div className="parallax-content parallax-header">
      <div className="parallax-header__inner">
        <div className="parallax-header__content">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-md-10 col-xl-8">
                <h2 className="heading-decorated">Gallery </h2>
                <div className="breadcrumb__list">
                <span><a style={{color:"white"}} href="/">Home</a></span>
                <span style={{color:"white", padding:"10px"}}  className='dvdr'><i className="fa-regular fa-angle-right" /></span>
                <span  style={{color:"white"}} >Gallery</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>

        <section  className="section-md bg-default text-center">

       <div className="">
    <h4 className="heading-decorated">Our Gallery</h4>
    <div style={{margin:"10px"}}className="row row-50" data-lightgallery="group">
      <div className="col-md-6 col-xl-4">
        {/* Post project*/}
        <article className="post-project"><a  data-lightgallery="item" data-size="652x491">
        < a href='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.48 PM (1).jpeg'className='anchor' data-lightbox="models" >
    <img src='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.48 PM (1).jpeg' /> </a>
</a>
        
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
        {/* Post project*/}
        <article className="post-project"><a data-lightgallery="item" data-size="652x491">
        <a href='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.48 PM (2).jpeg'className='anchor' data-lightbox="models" >
    <img src='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.48 PM (2).jpeg' /> </a>
      </a>
         
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
        {/* Post project*/}
        <article className="post-project"><a  data-lightgallery="item" data-size="652x491">
            
            <a href='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.47 PM.jpeg'className='anchor' data-lightbox="models" >
    <img src='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.47 PM.jpeg' /> </a>
           </a>
         
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
      <article className="post-project"><a data-lightgallery="item" data-size="652x491">
      <a href='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.48 PM.jpeg'className='anchor' data-lightbox="models" >
    <img src='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.48 PM.jpeg' /> </a>
           
       </a>
         
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
      <article className="post-project">
        
      {/* <a href='assets-2\images\WhatsApp Video 2023-08-26 at 12.59.45 PM (1).mp4'className='anchor' data-lightbox="models" > */}
<iframe style={{width:"430px",height:"320px"}} className="" src="assets-2\images\eraofdesigners_in_kalyan.mp4" loop controls preload="metadata" controlslist="nodownload" poster="assets-2\images\WhatsApp Video 2023-08-26 at 12.59.45 PM (1).mp4" />
    
         
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
      <article className="post-project"><a  data-lightgallery="item" data-size="652x491">
      <iframe style={{width:"430px",height:"320px"}} className="" src="assets-2\images\interior_desigining_in_kalyan.mp4" loop controls preload="metadata" controlslist="nodownload" poster="assets-2\images\WhatsApp Video 2023-08-26 at 12.59.45 PM (1).mp4" allowFullScreen/>
           
   </a>
          
        </article>
      </div>
    </div>
  </div>
  </section>
</div>

  )
}
