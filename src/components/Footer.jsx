import React from "react";


function Footer() {
    return (

        <div className={'site-footer'}>

            {/* ----- Footer ----- */}

            <footer className="footer">
            <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="foot-logo"> <img src="images/logo.svg" alt="#"/> </div>
        <div class="foot-sec">
          <div class="widget-title">
            <h2>Contact Us</h2>
          </div>
          <div class="cont-infoft">
            <a href="tel:123400123">Call : +123 400 123</a>
            <p>Praesent nulla massa, hendrerit <br/>vestibulum gravida in, feugiat auctor felis.</p>
            <a href="mailto:example@mail.com">Email: example@mail.com</a>
		 </div>
			  <div class="foot-social">
                  <a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a> 
				  <a href="#" target="_blank"><i class="fa-brands fa-dribbble"></i></a> 
				  <a href="#" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a> 
				  <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
				  <a href="#" target="_blank"><i class="fa-brands fa-behance"></i></a>
			  </div>
		
        </div>
      </div>
		
		
      <div class="col-md-2">
        <div class="widget-title">
          <h2>Explore</h2>
        </div>
        <div class="foot-nav">
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/about-us">About</a></li>
            <li><a href="/course">Course</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact-us">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-2">
        <div class="widget-title">
          <h2>Support</h2>
        </div>
        <div class="foot-nav">
          <ul>
            <li><a href="/contact-us">Contact</a></li>
            <li><a href="#">Experience Centers</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="widget-title">
          <h2>Subscribe</h2>
        </div>
        <div class="subs-col">
          <p >Lorem Ipsum has been them an industry printer took a galley make book.</p>
          <div class="subscr">
            <form>
              <input type="text" placeholder="email here"/>
              <div class="subscr-btn">
                <button>Subscribe now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
            </footer>

            {/* ----- Footer ----- */}

        </div>

    )
}
export default Footer