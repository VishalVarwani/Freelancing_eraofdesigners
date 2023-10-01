import React from 'react'
import "../css/style.css"
import {Link} from 'react-router-dom'
import "../css/navbar.css"
import "../css/services.css"
import "../css/testi.css"
import "../css/gallery.css"
import "../css/lightbox.css"
import MetaTags from 'react-meta-tags';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from './footer'
import About from './about'

export default function Home() {
<style dangerouslySetInnerHTML={{__html: ".ie-panel{display: none;background: #212121;padding: 10px 0;box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3);clear: both;text-align:center;position: relative;z-index: 1;} html.ie-10 .ie-panel, html.lt-ie-10 .ie-panel {display: block;}" }} />

  return (
   <div>
  <MetaTags>
            <title>Best Interior designers | Carpenters in  kalyan | eraofdesigners</title>
            <meta id="meta-description" name="description" content="Get affordable & friendly carpenters in kalyan for quality designing of home. Decorate your home with best interior designers in best price. Get a quote now." />
          </MetaTags>
  {/* Page*/}
  <div className="page">

    {/* Swiper*/}
      {/* 1 single slider */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height">
        
      <img style={{height:"700px"}}className="d-block w-100 imgsrc" src="https://inspirationseek.com/wp-content/uploads/2014/08/Clean-Modern-Apartment-Interior-Living-Room-Design.jpg" alt="First slide" />
  
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      <div className="carousel-caption d-none d-md-block">
                  <h1 className="tp-slider__title text-white" data-animation="fadeInUp" data-delay="0.5s" style={{    marginBottom: "170px"
}}>Creating Beauty Beyond Walls: <br /> Unveiling the Artistry of Interior Design
</h1>
                  </div>
      
                <div className="witr_btn_style">

                  <div className="witr_btn_sinner">
                 
                  </div>
                </div>
       
              </section>
    </div>
    <div className="carousel-item">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height">
      <img style={{height:"700px"}} className="d-block w-100 imgsrc" src="https://housely.com/wp-content/uploads/2016/09/Inspiring-Black-Themed-Living-Room.jpg" alt="Second slide" />
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      <div className="carousel-caption d-none d-md-block">
      <h1 className="tp-slider__title text-white" data-animation="fadeInUp" data-delay="0.5s"  style={{    marginBottom: "170px"
}}>"Transforming Spaces, Enriching Lives: <br/> Our Passionate Approach to Interior Design."
.
</h1>

                  </div>
    
<div className="slider_btn">
                <div className="witr_btn_style">
                  <div className="witr_btn_sinner">
                  </div>
                </div>
              </div>

</section>
    </div>
    <div className="carousel-item">
      <section className="swiper-slide d1 t1 m1 witr_swiper_height">
      <img style={{height:"700px"}} className="d-block w-100 imgsrc" src="https://1.bp.blogspot.com/-I1TODyKLBSo/XyQJkiJkStI/AAAAAAAAABI/mn7peabm3HYRBD8Cds8_WpGErbAgORQKQCLcBGAsYHQ/s2000/the-inside-story-navrangpura-ahmedabad-interior-designers-83ya0zesnz.jpg" alt="Third slide" />
      <a  class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span  class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span  class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      <div className="carousel-caption d-none d-md-block">
  <h1 className="tp-slider__title text-white" data-animation="fadeInUp" data-delay="0.5s"  style={{    marginBottom: "170px"
}}>"Where Imagination Meets Reality: <br />
 Crafting Inspirational Interiors That Tell Your Story."

</h1>

                  </div>

<div className="slider_btn">
                <div className="witr_btn_style">
                  <div className="witr_btn_sinner">
                  </div>
                </div>
              </div>

</section>
    </div>
  </div>
  </div>
 <div style={{paddingTop:"30px"}}>
  <center><h4 className="heading-decorated">Welcome to Era OF DESIGNERS</h4> </center>
  </div>

  <section style={{marginTop:"30px",}} className="bg-gray-lighter object-wrap">

    <div className="">
      <div className="">
        <div style={{margin:"10px"}} className="row">
          
          <div className="col-lg-5">
            <p>Era of Designers are best interior designing in kalyan which gives best shape to your dream house. Era of designers work with freely and in affordable price that bring home beautiful interiors that fit your budget. We are highly experienced team which works in corporate as well as noncorporate areas. We are working on full home designing, kitchen designing, wardrobe, wall designing and painting.</p>
            <div className="row row-30">
              <div className="col-md-6 col-lg-12 col-xl-6">
                {/* Blurb minimal*/}
                <article className="blurb blurb-minimal">
                  <div className="unit flex-row unit-spacing-md">
                    <div className="unit-left">
                      <div className="blurb-minimal__icon"><span className="icon linear-icon-menu3" /></div>
                    </div>
                    <div className="unit-body">
                      <p className="blurb__title heading-6"><a >Award-winning designs</a></p>
                      <p>We have received numerous awards for our designs, concepts, and ideas.</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-md-6 col-lg-12 col-xl-6">
                {/* Blurb minimal*/}
                <article className="blurb blurb-minimal">
                  <div className="unit flex-row unit-spacing-md">
                    <div className="unit-left">
                      <div className="blurb-minimal__icon"><span className="icon linear-icon-users2" /></div>
                    </div>
                    <div className="unit-body">
                      <p className="blurb__title heading-6"><a >Expert team</a></p>
                      <p>We are a team of dedicated interior design and remodeling professionals.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div style={{textAlign:"center"}}className="col-md-12">
                {/* Linear progress bar*/}
               
                {/* Linear progress bar*/}
             
                {/* Linear progress bar*/}
               
                <Link className="button button-primary" to="/about">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <video style={{width:"100%" , height:"700px"}}className="elementor-video object-wrap__body object-wrap__body-sizing-1 object-wrap__body-md-right bg-image" src="assets-2\images\WhatsApp Video 2023-08-26 at 12.59.45 PM (1).mp4" loop controls preload="metadata" controlslist="nodownload" poster="assets-2\images\WhatsApp Video 2023-08-26 at 12.59.45 PM (1).mp4" /> */}

    <div style={{backgroundImage:"url(http://www.outlookinterior.com.sg/wp-content/uploads/2016/06/Interior-Design-Work-40.jpg)"}} className="object-wrap__body object-wrap__body-sizing-1 object-wrap__body-md-right bg-image" />
    
  </section>
{/* <video style={{width:"100%" , height:"700px"}}className="elementor-video" src="assets-2\images\WhatsApp Video 2023-08-26 at 12.59.45 PM (1).mp4" loop controls preload="metadata" controlslist="nodownload" poster="assets-2\images\WhatsApp Video 2023-08-26 at 12.59.45 PM (1).mp4" /> */}


  {/* Our Services*/}
  <section className="section-md bg-default text-center">
    <div className="">
      <h4 className="heading-decorated">Our Services</h4>
      <div style={{margin:"10px"}}className="row row-50 justify-content-md-center justify-content-lg-start">
        <div className="col-md-6 col-xl-4">
          {/* Blurb circle*/}
          <article className="blurb blurb-minimal">
            <div className="unit flex-row unit-spacing-md">
              <div className="unit-left">
                <div className="blurb-minimal__icon"><span className="icon linear-icon-pencil-ruler" /></div>
              </div>
              <div className="unit-body">
                <p className="blurb__title heading-6"><Link to="/services">Civil Works</Link></p>
                <p>Transform spaces with expert structural modifications and enhancements, ensuring seamless integration of architectural elements for a harmonious and functional environment.</p>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-6 col-xl-4">
          {/* Blurb circle*/}
          <article className="blurb blurb-minimal">
            <div className="unit flex-row unit-spacing-md">
              <div className="unit-left">
                <div className="blurb-minimal__icon"><span className="icon linear-icon-users" /></div>
              </div>
              <div className="unit-body">
                <p className="blurb__title heading-6"><Link to="/services">Carpentry/Furniture</Link></p>
                <p>Craft bespoke furniture pieces and cabinetry that harmonize with your space, blending style and utility to create a truly personalized and inviting atmosphere.</p>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-6 col-xl-4">
          {/* Blurb circle*/}
          <article className="blurb blurb-minimal">
            <div className="unit flex-row unit-spacing-md">
              <div className="unit-left">
                <div className="blurb-minimal__icon"><span className="icon linear-icon-wall" /></div>
              </div>
              <div className="unit-body">
                <p className="blurb__title heading-6"><Link to="/services">Electrical Works</Link></p>
                <p>Illuminate your vision with precise electrical solutions, seamlessly integrating modern lighting and technology to enhance both aesthetics and functionality. </p>
            </div>
            </div>
          </article>
        </div>
        <div className="col-md-6 col-xl-4">
          {/* Blurb circle*/}
          <article className="blurb blurb-minimal">
            <div className="unit flex-row unit-spacing-md">
              <div className="unit-left">
                <div className="blurb-minimal__icon"><span className="icon linear-icon-apartment" /></div>
              </div>
              <div className="unit-body">
                <p className="blurb__title heading-6"><Link to="/services">Paintings</Link></p>
                <p>Elevate your interiors through the art of color, texture, and technique, breathing life into walls and surfaces that reflect your unique personality and taste.</p>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-6 col-xl-4">
          {/* Blurb circle*/}
          <article className="blurb blurb-minimal">
            <div className="unit flex-row unit-spacing-md">
              <div className="unit-left">
                <div className="blurb-minimal__icon"><span className="icon linear-icon-home4" /></div>
              </div>
              <div className="unit-body">
                <p className="blurb__title heading-6"><Link to="/services">Ceiling Design</Link></p>
                <p>Redefine spatial dynamics with innovative ceiling designs, combining artistic finesse and architectural ingenuity to reimagine the overhead dimension of your space.</p>
              </div>
            </div>
          </article>
        </div>
       
        <div className="col-md-6 col-lg-4">
        <article className="blurb blurb-minimal">
            <div className="unit flex-row unit-spacing-md">
              <div className="unit-left">
                <div className="blurb-minimal__icon"><span className="icon linear-icon-pencil-ruler2" /></div>
              </div>
              <div className="unit-body">
                <p className="blurb__title heading-6"><Link to="/services">2D/3D Designs</Link></p>
                <p> We also provide 2d/3d designs of interiors/buildings/bunglows </p>
              </div>
            </div>
          </article>
        </div>
       
      </div>
    </div>
  </section>
{/* Call to Action*/}
<section  className="section-md bg-accent bg-image text-center" style={{backgroundImage: 'url(assets-2/images/bg-image-8.jpg)', marginTop:"-60px"}}>
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-11 col-lg-9 col-xl-8"> 
        <h4 className="heading-decorated">If you can envision it, then we can design it. <br />Tell us more about your project! </h4><Link className="button button-primary" to="/contact">Contact Us</Link>
      </div>
    </div>
  </div>
</section>
{/* running projects*/}
<section  className="section-md bg-default text-center">


  <div className="">
    <h4 className="heading-decorated">Our Gallery</h4>
    <div style={{margin:"10px"}}className="row row-50" data-lightgallery="group">
      <div className="col-md-6 col-xl-4">
        {/* Post project*/}
        <article className="post-project"><a data-lightgallery="item" data-size="652x491">
        <a href='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.47 PM.jpeg'className='anchor' data-lightbox="models" >
    <img src='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.47 PM.jpeg' /> </a>

        </a>
         
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
        {/* Post project*/}
        <article className="post-project"><a data-lightgallery="item" data-size="652x491">
        <a href='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.48 PM.jpeg'className='anchor' data-lightbox="models" >
    <img src='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.48 PM.jpeg' /> </a>

  </a>
          
        </article>
      </div>
      <div className="col-md-6 col-xl-4">
        {/* Post project*/}
        <article className="post-project"><a data-lightgallery="item" data-size="652x491">
        <a href='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.48 PM (1).jpeg'className='anchor' data-lightbox="models" >
    <img src='assets-2\images\WhatsApp Image 2023-08-30 at 11.51.48 PM (1).jpeg' /> </a>
</a>
         
        </article>
      </div>
      <div className="col-md-6 col-xl-4">

      </div>
      <div className="col-md-6 col-xl-4">
      <Link className="button button-primary" to="/gallery">View More</Link>

      </div>
      <div className="col-md-6 col-xl-4">
       
      </div>
    </div>
  </div>
</section>

<section className="section-lg bg-image context-dark text-center" style={{backgroundImage: 'url(assets-2/images/bg-image-2.jpg)',   backgroundSize:"300px 100px",
 marginTop:"-60px", marginBottom:"60px"}}>
  <div className="container">
    <h4 className="heading-decorated">WHAT PEOPLE SAY</h4>
    {/* Owl Carousel*/}
   

<Carousel
showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
               <div className="myCarousel">
            <h3>Bhavesh</h3>
            <h4>Designer</h4>
            <p>
            Working with Era Of Designers was a great experience!  They combined my ideas and vision with their expertise and experience, to come up with a beautifully designed space.
            </p>
          </div>
        </div>

        <div>
                <div className="myCarousel">
            <h3>Shradha</h3>
            <h4>Designer</h4>
            <p>
            Every step in the project from design to final walkthrough was stress-free and enjoyable
            </p>
          </div>
        </div>

        <div>
        <div className="myCarousel">
            <h3>Rajni</h3>
            <h4>Designer</h4>
            <p>
            We had the pleasure of working closely with the Era Of Designers. They were professional, supportive, and understood every part of what we wanted to capture in great detail. 
            </p>
          </div>
        </div>
      </Carousel>
    </div></section>
  </div></div>

  )
}
