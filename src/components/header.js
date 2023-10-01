import React from 'react'
import { Link } from 'react-router-dom'
import "../css/header.css"
export default function Header() {
  return (
    <div>
       <Link to="https://api.whatsapp.com/send?phone=+91 9324214404&amp;text=Hi I need to know about Interior Designing"
        className="float" target="_blank"><i className="fab fa-whatsapp my-float"></i></Link>
<Link className="wp-call-button" to="tel:+91 9324214404"></Link>
      <section className="">
  
  <div className="wrap ">
    <div className="container">
      <div className="row justify-content-between">

        <div className="col">
          <p className="mb-0 phone"><span className="fa fa-phone" /> <Link to="#">+91 93242 14404</Link></p>
        </div>

        <div className="col d-flex justify-content-end">
          <div className="social-media">
            <p className="mb-0 d-flex">
              <Link to="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></Link>
              <Link to="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></Link>
              <Link to="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light fixed-top" id="ftco-navbar">
    <div className="container">
      <Link className="navbar-brand" to="/">EraOf <span>Designers</span></Link>
     
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fa fa-bars" /> Menu
      </button>
      <div   className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav m-auto">

          <li style={{fontSize:"15px"}} className="nav-item"><Link style={{fontSize:"12px", fontWeight:"600"}}  to="/" className="nav-link">Home</Link></li>
          <li style={{fontSize:"15px"}}  className="nav-item"><Link style={{fontSize:"12px", fontWeight:"600"}}  to="/about" className="nav-link">About Us</Link></li>

          <li className="nav-item dropdown">
            <Link style={{fontSize:"12px", fontWeight:"600"}}  className="nav-link dropdown-toggle" to="/services" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</Link>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <Link style={{fontSize:"13px",fontWeight:"600", color:"#4d4d4d", textTransform:"uppercase", letterSpacing:"1px"}}  className="dropdown-item" to="/services">Civil Works</Link>
              <Link  style={{fontSize:"13px",fontWeight:"600", color:"#4d4d4d", textTransform:"uppercase", letterSpacing:"1px"}} className="dropdown-item" to="/services">Carpentry/Furniture</Link>
              <Link  style={{fontSize:"13px",fontWeight:"600", color:"#4d4d4d", textTransform:"uppercase", letterSpacing:"1px"}} className="dropdown-item" to="/services">Paintings</Link>
              <Link  style={{fontSize:"13px",fontWeight:"600", color:"#4d4d4d", textTransform:"uppercase", letterSpacing:"1px"}} className="dropdown-item" to="/services">Ceiling Design</Link>
              <Link  style={{fontSize:"13px",fontWeight:"600", color:"#4d4d4d", textTransform:"uppercase", letterSpacing:"1px"}}className="dropdown-item" to="/services">Electrical Works</Link>
              <Link  style={{fontSize:"13px",fontWeight:"600", color:"#4d4d4d", textTransform:"uppercase", letterSpacing:"1px"}}  className="dropdown-item" to="/services">2D/3D Design</Link>

            </div>
          </li>
          <li className="nav-item"><Link style={{fontSize:"12px", fontWeight:"600"}}  to="/gallery" className="nav-link">Gallery</Link></li>
          <li className="nav-item"><Link  style={{fontSize:"12px", fontWeight:"600"}} to="/contact" className="nav-link">Contact</Link></li>
        </ul>
       
 <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
    Get Free Consultation
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
        <p style={{color: '#000f2f', fontSize: 20, textAlign: 'center', textDecoration: 'underline', fontWeight: 700}}>Enquiry Form</p>
     
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          
        </div>
        <div className="heading_s1 mb-3" style={{textAlign: 'center'}}>
                      <h6>Please feel the below form, we will call you very shortly</h6>
                    </div>
        <div className="modal-body">
        <form action="mail.php" method="POST" className="pt-md-2">
                      <div className="row">
                        <div className="form-group col-sm-12" style={{ paddingBottom: 15}}>
                          <input required="required" placeholder="Enter Your Name *" id="nameEnquiry" className="form-control alpha-only" name="fname" type="text" />
                        </div>
                        <div className="form-group col-sm-12" style={{ paddingBottom: 15}}>
                          <input required="required" placeholder="Enter Mobile No. *" id="phoneEnquiry" className="form-control number-only" name="mobile" type="text" maxLength={10} oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
                        </div>
                        <div className="form-group col-sm-12" style={{ paddingBottom: 15}}>
                          <input required="required" placeholder="Enter Email ID" id="emailEnquiry" className="form-control" name="email" type="text" />
                        </div>
                        <div className="form-group col-sm-12" style={{ paddingBottom: 15}}>
                          <input required="required" placeholder="message" id="course" className="form-control" name="course" type="text" />
                          {/*<input t placeholder="Enter course" id="message" class="form-control" name="Message" rows="4"></textarea>*/}
                        </div>
                        <div className="col-md-12" style={{textAlign: 'center'}}>
                          {/*<input type="submit" name="submit" value="Send Details" class="tp-btn"  id="submitEnquiry" />*/}
                          <button className="tp-btn" onclick="" style={{cursor: 'pointer'}}>
                            <span className='button button-gray-light-outline'>Submit <i className="fa-regular fa-arrow-right" /> </span>
                          </button> 
                        </div>
                        <div className="col-sm-12">
                          <div id="alert-msg" className="alert-msg text-center" />
                        </div>
                      </div>
                    </form>
        </div>
        
      </div>
    </div>
</div>
      </div>
    </div>
  </nav>
</section>
    </div>
  )
}