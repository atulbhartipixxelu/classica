import React, { useEffect } from 'react';
import CoursesAPI from '../components/CoursesAPI';


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1
            }
        }
    ],
};







function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <div className={'homepage'}>

      <section className="classia">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="study">
                <h4>Start to success</h4>
                <h1>
                  <span className="line-anmt">Studying Online</span> is now much
                  easier
                </h1>
                <p>
                  Classia is an interesting platform that will teach you in more an
                  interactive way
                </p>
              </div>
              <div className="input-group clas-serch">
                <div className="form-outline">
                  <input
                    type="search"
                    placeholder="What do want to learn?"
                    id="form1"
                    className="form-control"/>
                </div>
                <button type="button" className="btn btn-primary">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
            <div className="col-md-6 tulat-mtr">
              <div className="tulat-cprt mltrs">
                <img src="images/250k.svg" alt="#" />
              </div>
              <div className="tulat-cprt mltrstp">
                <img src="images/congratulations.svg" alt="#" />
              </div>
              <img src="images/Girl.png" alt="#" className="img-fluid" />
              <div className="tulat-cprt ltr">
                <img src="images/User-Experience.svg" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-sectn">
        <div className="container">
        <div className="row eduratitle">
      <div className="col-md-8">
        <h2 className="sec-title">Most <span>Popular Courses</span></h2>
        <p>Various versions have evolved over the years, sometimes by accident,</p>
      </div>
      <div className="col-md-4 th-btn"><a href="#">View All</a></div>
    </div>
      <CoursesAPI />
      </div>
      </section>


      <section className="popular-cats">
        <div className="container">
          <div className="eduratitle">
            <h2 className="sec-title line-anmt">
              Most <span>Popular Categories</span>
            </h2>
            <p>
              Various versions have evolved over the years, sometimes by accident,
            </p>
          </div>
          <div className="category-sec-wrap">
            <div className="row slider-mobilecat mbs-arow">
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/PenNib.svg" alt="#" />
                      </i>
                      Design
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/devlp.svg" alt="#" />
                      </i>
                      Development
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/micro.svg" alt="#" />
                      </i>
                      Marketing
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/Briefcase.svg" alt="#" />
                      </i>
                      Business
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/SunHorizon.svg" alt="#" />
                      </i>
                      Lifestyle
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/Camera.svg" alt="#" />
                      </i>
                      Photography
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/MusicNote.svg" alt="#" />
                      </i>
                      Music
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/Database.svg" alt="#" />
                      </i>
                      Data Science
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/Lightbulb.svg" alt="#" />
                      </i>
                      Personal Develop
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/Heartbeat.svg" alt="#" />
                      </i>
                      Helth &amp; Fitness
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/Graph.svg" alt="#" />
                      </i>
                      Finance
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="category-card">

                  <a href="#">
                    <div className="catr-cnt">

                      <i>
                        <img src="images/Detective.svg" alt="#" />
                      </i>
                      Teaching
                    </div>
                    <div className="catr-lik"> </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="achie-vement">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="eduratitle">
                <h2 className="sec-title line-anmt">
                  Our <span>Achievement</span>
                </h2>
                <p>
                  Various versions have evolved over the years, sometimes by
                  accident,
                </p>
              </div>
              <div className="count-area" data-diff={100}>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-md-6">
                      <div className="cont-row">
                        <div className="count-icon">
                          <img src="images/g2703.svg" alt="#" />
                        </div>
                        <div className="comrpr">
                          <div className="count-digit">300</div>
                          <div className="count-title"> Instructor</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="cont-row">
                        <div className="count-icon">
                          <img src="images/video-ic.svg" alt="#" />
                        </div>
                        <div className="comrpr">
                          <div className="count-digit">10000</div>
                          <div className="count-title"> Video</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="cont-row">
                        <div className="count-icon">
                          <img src="images/student-ic.svg" alt="#" />
                        </div>
                        <div className="comrpr">
                          <div className="count-digit">20000</div>
                          <div className="count-title"> Student</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="cont-row">
                        <div className="count-icon">
                          <img src="images/user-ic.svg" alt="#" />
                        </div>
                        <div className="comrpr">
                          <div className="count-digit">20000</div>
                          <div className="count-title"> User’s</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">

              <img src="images/copy-girls.png" alt="#" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="feedback-row">
        <div className="container">
          <div className="eduratitle">
            <h2 className="sec-title line-anmt">
              Student <span>Feedback</span>
            </h2>
            <p>
              Various versions have evolved over the years, sometimes by accident,
            </p>
          </div>
          <div className="feedback">
          <Slider {...settings}>
            <div className="testi-box">
              <div className="testi-box_content">
                <div className="testi-box_img">
                  <div className="testi-tham">
                    <img src="images/client01.png" alt="#" />
                  </div>
                  <div className="testi-data">
                    <h4>Jenny Wilson</h4>
                    <span>UI-UX Designer</span>
                  </div>
                </div>
                <div className="client-info">
                  <p>
                    Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                    pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                    dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                    feugiat auctor felis.
                  </p>
                  <p>
                    Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                    pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                    dictumst.
                  </p>
                </div>
              </div>
            </div>
            <div className="testi-box">
              <div className="testi-box_content">
                <div className="testi-box_img">
                  <div className="testi-tham">
                    <img src="images/client01.png" alt="#" />
                  </div>
                  <div className="testi-data">
                    <h4>Guy Hawkins</h4>
                    <span>UI-UX Designer</span>
                  </div>
                </div>
                <div className="client-info">
                  <p>
                    Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                    pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                    dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                    feugiat auctor felis.
                  </p>
                  <p>
                    Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                    pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                    dictumst.
                  </p>
                </div>
              </div>
            </div>
            <div className="testi-box">
              <div className="testi-box_content">
                <div className="testi-box_img">
                  <div className="testi-tham">
                    <img src="images/client01.png" alt="#" />
                  </div>
                  <div className="testi-data">
                    <h4>Jenny Wilson</h4>
                    <span>UI-UX Designer</span>
                  </div>
                </div>
                <div className="client-info">
                  <p>
                    Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                    pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                    dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                    feugiat auctor felis.
                  </p>
                  <p>
                    Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                    pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                    dictumst.
                  </p>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="learning">
        <div className="container">
          <div className="row">
            <div className="col-md-6">

              <img src="images/call-action.png" alt="#" className="img-fluid" />
            </div>
            <div className="col-md-6 larg-lran">
              <h2>
                Join <span>World's largest</span> learning
                <br />
                platform today
              </h2>
              <p>Start learning by registering for free</p>
              <a href="#" className="site-btn">
                Sign up for Free
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}


export default Home
