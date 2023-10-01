import React from 'react'

export default function Contact() {
  return (
    <div>
     <div>
  {/* Parallax header*/}
  <section className="bg-gray-dark">
    <section style={{backgroundImage:"url(assets-2/images/parallax-1.jpg)"}} className="section parallax-container" data-parallax-img="assets-2/images/parallax-1.jpg">
      <div className="parallax-content parallax-header">
        <div className="parallax-header__inner">
          <div className="parallax-header__content">
            <div className="">
              <div className="row justify-content-sm-center">
                <div className="col-md-10 col-xl-8">
                  <h2 className="heading-decorated">Contacts</h2>
                  <div className="breadcrumb__list">
                <span><a style={{color:"white"}} href="/">Home</a></span>
                <span style={{color:"white", padding:"10px"}}  className='dvdr'><i className="fa-regular fa-angle-right" /></span>
                <span  style={{color:"white"}} >Contact Us</span>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
 
  <section className="section-md bg-default">
    <div className="container">
      <div className="row row-50">
        <div className="col-md-5 col-lg-4">
          <h4 className="heading-decorated">Contact Details</h4>
          <ul className="list-sm contact-info">
            <li>
              <dl className="list-terms-inline">
                <dt>Address</dt>
                <dd>Ambivali, Kalyan, Maharashtra 421301</dd>
              </dl>
            </li>
            <li>
              <dl className="list-terms-inline">
                <dt>Phones</dt>
                <dd>
                  <ul className="list-semicolon">
                  <li><a href="tel:#">+91 93242 14404</a></li>
                  </ul>
                </dd>
              </dl>
            </li>
            <li>
              <dl className="list-terms-inline">
                <dt>We are open</dt>
                <dd>Mon-Fri: 24/7</dd>
              </dl>
            </li>
            <li>
              <ul className="list-inline-sm">
                <li><a className="icon-sm fa-facebook novi-icon icon" href="#" /></li>
                <li><a className="icon-sm fa-twitter novi-icon icon" href="#" /></li>
                <li><a className="icon-sm fa-instagram novi-icon icon" href="#" /></li>
               
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="heading-decorated">Get in Touch</h4>
          {/* RD Mailform*/}
          <form className="rd-mailform rd-mailform_style-1" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
            <div className="form-wrap form-wrap_icon linear-icon-man">
              <input className="form-input" id="contact-name" type="text" name="name" data-constraints="@Required" />
              <label className="form-label" htmlFor="contact-name">Your name</label>
            </div>
            <div className="form-wrap form-wrap_icon linear-icon-envelope">
              <input className="form-input" id="contact-email" type="email" name="email" data-constraints="@Email @Required" />
              <label className="form-label" htmlFor="contact-email">Your e-mail</label>
            </div>
            <div className="form-wrap form-wrap_icon linear-icon-feather">
              <textarea className="form-input" id="contact-message" name="message" data-constraints="@Required" defaultValue={""} />
              <label className="form-label" htmlFor="contact-message">Your message</label>
            </div>
            <button className="button button-primary" type="submit">send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
 
</div>

    </div>
  )
}
