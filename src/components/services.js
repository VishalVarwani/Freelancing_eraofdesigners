import React from 'react'
import Header from './header'

export default function Services() {
  return (
    <div>
      <div>
  <section className="bg-gray-dark">
    <section style={{backgroundImage:"url(assets-2/images/parallax-1.jpg)"}} className="section parallax-container" data-parallax-img="assets-2/images/parallax-1.jpg">
      <div className="parallax-content parallax-header">
        <div className="parallax-header__inner">
          <div className="parallax-header__content">
            <div className="container">
              <div className="row justify-content-sm-center">
                <div className="col-md-10 col-xl-8">
                  <h2 className="heading-decorated">Our Services</h2>
                  <div className="breadcrumb__list">
                <span><a style={{color:"white"}} href="/">Home</a></span>
                <span style={{color:"white", padding:"10px"}}  className='dvdr'><i className="fa-regular fa-angle-right" /></span>
                <span  style={{color:"white"}} >Services </span>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  {/* Space Planning*/}
  <section className="section-md bg-gray-lighter">
    <div className="container">
      <div className="row justify-content-md-center row-30 row-md-50">
        <div className="col-md-11 col-lg-10 col-xl-6">
          <h4 className="heading-decorated">Civil Works</h4>
          <p> Revitalize your spaces through our specialized Civil Works services. Our team's craftsmanship and attention to detail shine as we reimagine interiors, creating a harmonious fusion of structural integrity and aesthetic allure. From revitalizing foundations to optimizing layouts, our commitment to excellence ensures every corner reflects innovation in design. Step into a realm where architecture meets artistry, and experience the transformative power of our Civil Works expertise. </p>
        </div>
        <div className="col-md-11 col-lg-10 col-xl-6"><img src="assets-2/images/service-1-652x491.jpg" alt width={652} height={491} />
        </div>
      </div>
    </div>
  </section>
  {/* Construction Management*/}
  <section className="section-md bg-default">
    <div className="container">
      <div className="row justify-content-md-center flex-xl-row-reverse row-30 row-md-50">
        <div className="col-md-11 col-lg-10 col-xl-6">
          <h4 className="heading-decorated">Carpentry/Furniture</h4>
          <p>Immerse yourself in bespoke furniture and cabinetry that embodies both style and utility. Our artisans craft personalized pieces that seamlessly integrate into your space, creating an atmosphere of individuality and comfort. From timeless designs to contemporary aesthetics, explore a world of craftsmanship where every piece tells a story.</p>
        </div>
        <div className="col-md-11 col-lg-10 col-xl-6"><img src="assets-2/images/service-2-652x491.jpg" alt width={652} height={491} />
        </div>
      </div>
    </div>
  </section>
  {/* Decorative Services*/}
  <section className="section-md bg-gray-lighter">
    <div className="container">
      <div className="row justify-content-md-center row-30 row-md-50">
        <div className="col-md-11 col-lg-10 col-xl-6">
          <h4 className="heading-decorated">Electrical Works</h4>
          <p>Illuminate your vision with our precise electrical solutions. Modern lighting and technology meet seamless integration, enhancing the aesthetic appeal and functionality of your space. Experience the art of lighting design that transforms environments, creating a balance between ambiance and innovation.</p>
        </div>
        <div className="col-md-11 col-lg-10 col-xl-6"><img src="assets-2/images/service-3-652x491.jpg" alt width={652} height={491} />
        </div>
      </div>
    </div>
  </section>
  {/* Interior Design*/}
  <section className="section-md bg-default">
    <div className="container">
      <div className="row justify-content-md-center flex-xl-row-reverse row-30 row-md-50">
        <div className="col-md-11 col-lg-10 col-xl-6">
          <h4 className="heading-decorated">Paintings</h4>
          <p> Infuse life into walls and surfaces with our mastery of color, texture, and technique. Our paintings redefine spaces, capturing the essence of your personality and taste. From bold statements to subtle accents, immerse yourself in a palette of possibilities that elevate interiors beyond the ordinary. </p>
        </div>
        <div className="col-md-11 col-lg-10 col-xl-6"><img src="assets-2/images/service-4-652x491.jpg" alt width={652} height={491} />
        </div>
      </div>
    </div>
  </section>
  {/* Consultations*/}
  <section className="section-md bg-gray-lighter">
    <div className="container">
      <div className="row justify-content-md-center row-30 row-md-50">
        <div className="col-md-11 col-lg-10 col-xl-6">
          <h4 className="heading-decorated">Ceiling Design</h4>
          <p> Redefine spatial dynamics with our innovative ceiling designs. Our creations blend artistic finesse with architectural ingenuity, transforming overhead space into an expression of style and elegance. Explore designs that transcend conventional boundaries, creating a visual symphony that captivates the eye and uplifts the soul.</p>
        </div>
        <div className="col-md-11 col-lg-10 col-xl-6"><img src="assets-2/images/service-5-652x491.jpg" alt width={652} height={491} />
        </div>
      </div>
    </div>
  </section>
  {/* Building Information Modeling*/}
  <section className="section-md bg-default"> 
    <div className="container">
      <div className="row justify-content-md-center flex-xl-row-reverse row-30 row-md-50">
        <div className="col-md-11 col-lg-10 col-xl-6">
          <h4 className="heading-decorated">2D/3D Design</h4>
          <p> Unlock the power of visualization through our exceptional 2D and 3D design services. Our team employs cutting-edge technology to transform ideas into vivid, lifelike renderings. With meticulous attention to detail, we breathe life into your concepts, allowing you to explore and refine every aspect of your space before it comes to fruition. Experience the thrill of watching your vision take shape in a digital realm, where creativity meets precision, and possibilities know no bounds. Welcome to a realm where imagination becomes reality through the art of 2D and 3D design. </p>
        </div>
        <div className="col-md-11 col-lg-10 col-xl-6"><img src="http://www.avanila.com/images/3Dfloor1.jpg" alt width={652} height={491} />
        </div>
      </div>
    </div>
  </section>
</div>


    </div>
  )
}
