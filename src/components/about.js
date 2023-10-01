import React from 'react'
import Header from './header'
import Footer from './footer'

export default function About() {
  return (
    <div>
       <section className="bg-gray-dark">
  <section style={{backgroundImage:"url(assets-2/images/bg-image-8.jpg)"}} className="section parallax-container" data-parallax-img="assets-2/images/bg-image-1.jpg">
    <div className="parallax-content parallax-header">
      <div className="parallax-header__inner">
        <div className="parallax-header__content">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-md-10 col-xl-8">
                <h2 className="heading-decorated">About Us </h2>
                <div className="breadcrumb__list">
                <span><a style={{color:"white"}} href="/">Home</a></span>
                <span style={{color:"white", padding:"10px"}}  className='dvdr'><i className="fa-regular fa-angle-right" /></span>
                <span  style={{color:"white"}} >About Us</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>
       {/* About us*/}
  <section style={{marginTop:"30px"}} className="bg-gray-lighter object-wrap">
    <div className="section-lg">
      <div className="">
        <div style={{margin:"10px"}} className="row">
          <div className="col-lg-5">
            <h4 className="heading-decorated">About us</h4>
            <p>Era of Designers are best interior designing in kalyan which gives best shape to your dream house. Era of designers work with freely and in affordable price that bring home beautiful interiors that fit your budget. We are highly experienced team which works in corporate as well as noncorporate areas. We are working on full home designing, kitchen designing, wardrobe, wall designing and painting.</p>

            <p>We are a team of professional, energetic individuals with talented designers and experienced managers available to guide our clients through the flawless and timely execution of any residential design project. Since day one, we have been delivering creative and cozy interiors to our clients worldwide.</p>
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
              <div className="col-md-12">
                {/* Linear progress bar*/}
                <div className="progress-linear progress-linear-modern">
                  <div className="progress-header">
                    <p>Interior Design</p><span className="progress-value">98</span>
                  </div>
                  <div className="progress-bar-linear-wrap">
                    <div className="progress-bar-linear" />
                  </div>
                </div>
                {/* Linear progress bar*/}
                <div className="progress-linear progress-linear-modern">
                  <div className="progress-header">
                    <p>Interior Planning</p><span className="progress-value">96</span>
                  </div>
                  <div className="progress-bar-linear-wrap">
                    <div className="progress-bar-linear" />
                  </div>
                </div>
                {/* Linear progress bar*/}
                <div className="progress-linear progress-linear-modern">
                  <div className="progress-header">
                    <p>Consultations</p><span className="progress-value">92</span>
                  </div>
                  <div className="progress-bar-linear-wrap">
                    <div className="progress-bar-linear" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{backgroundImage:"url(http://www.outlookinterior.com.sg/wp-content/uploads/2016/06/Interior-Design-Work-40.jpg)"}} className="object-wrap__body object-wrap__body-sizing-1 object-wrap__body-md-right bg-image" />
  </section>
    </div>
  )
}
