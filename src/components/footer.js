import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      
  <section className="bg_default small_pt small_pb" style={{backgroundColor: '#385c6a', paddingTop:"20px", paddingBottom:"20px"}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-8">
          <div className="text_white cta_section">
            <div className="medium_divider d-block d-md-none" />
            <div className="heading_s1 heading_light">
              <h2 style={{color: 'white'}}>Let's Turn Your Vision into Reality. Let's Get Started!</h2>
            </div>
            <p style={{color: 'white'}}>For more information for contact us</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-md-right">
            <Link to="tel:+91 8976758080" className="btn-outline-white" style={{color: 'white', border:"2px solid white", padding:"12px 30px"}}>+91 9324214404</Link>
          </div>
          <div className="medium_divider d-block d-md-none" />
        </div>
      </div>
    </div>
    </section>
  {/* Page Footer*/}
  <section className="pre-footer-corporate bg-gray-darker">
    <div className="container ">
      <div className="row justify-content-sm-center justify-content-lg row-30 row-md-60">
        <div className="col-lg-4 col-md-6 col-sm-4 mb-4 mb-lg-0">      
        <a style={{color:"white"}}className="navbar-brand" href="/">Era Of <span>Designers</span></a>

          <p>We are one of the leading interior design and remodeling studios available for
             all of your residential and commercial interior design needs. Our desire is to create a design that represents your personal and unique style, creating an environment that you will love for years to come.</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-8 mb-4 mb-lg-0">
          <h6>Navigation</h6>
          <ul className="list-xxs list-primary">
            <li><a href="/about">About Us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contact">Contacts</a></li>
          </ul>
        </div>
        <div  className="col-lg-3 col-md-6 col-sm-4 mb-4 mb-lg-0">
          <h6>Contacts</h6>
          <ul className="list-xs">
          <li>
              <dl className="list-terms-minimal">
                <dt>Name</dt>
                <dd>Parshuram Vishwakarma</dd>
              </dl>
            </li>
            <li>
              <dl className="list-terms-minimal">
                <dt>Address</dt>
                <dd>Ambivali, Kalyan, Maharashtra 421301</dd>
              </dl>
            </li>
            <li>
              <dl className="list-terms-minimal">
                <dt>Phones</dt>
                <dd>
                  <ul className="list-semicolon">
                    <li><a href="tel:#">+91 93242 14404</a></li>
                  </ul>
                </dd>
              </dl>
            </li>
            <li>
              <dl className="list-terms-minimal">
                <dt>E-mail</dt>
                <dd><a className="link-primary" href="mailto:#">info@eraofdesigners.com</a></dd>
              </dl>
            </li>
            <li>
              <dl className="list-terms-minimal">
                <dt>We are open</dt>
                <dd>Mon-Fri: 24/7</dd>
              </dl>
            </li>
          </ul>
        </div>
        <div  className="col-lg-2 col-md-6 mb-4 mb-lg-0">
        <h5 style={{fontSize: 19}}><span className="fa fa-star checked" style={{color: '#ffd400'}} />
      <span className="fa fa-star checked" style={{color: '#ffd400'}} />
      <span className="fa fa-star checked" style={{color: '#ffd400'}} />
      <span className="fa fa-star" style={{color: '#ffd400'}} />
      <span className="fa fa-star" style={{color: '#ffd400'}} /></h5>
        <Link to="" target="_blank">
      <img className="logo_light" src="assets-2/images/reviewImage.png" style={{width: '100%'}} alt="Review Us On Google" />
    </Link>
    <br/>    <br/>
    
          <h6>Follow Us</h6>
          <ul className="list-inline-xxs">
          <li><a className="icon icon-xxs icon-gray-darker fa fa-facebook" href="#" /></li>
          <li><a className="icon icon-xxs icon-gray-darker fa fa-twitter" href="#" /></li>
          <li><a className="icon icon-xxs icon-gray-darker fa fa-instagram" href="#" /></li>
        </ul>
          </div>
      </div>
    </div>
  </section>
  <footer className="footer-corporate bg-gray-darkest ">
    <div className="container ">
      <div className="footer-corporate__inner">
        <p className="rights"><span>EraOfDesigners</span><span>&nbsp;</span><span className="copyright-year" />. All Rights Reserved. </p>
        <p className="rights"><span>Design & Developed by <Link to='https://kumarinfotech.net'>Kumarinfotech,Website Development In Mumbai  </Link> </span><span>&nbsp;</span><span className="copyright-year" /></p>

      </div>
    </div>
    <div className="">
      <div className="footer-corporate__inner">
       
      </div>
    </div>
  </footer>
</div>

  )
}
