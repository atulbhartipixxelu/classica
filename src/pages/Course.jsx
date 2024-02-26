
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoursesAPI from '../components/CoursesAPI.jsx';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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


function Courses() {

    return (


        <>
            <div
                className="pages-header"
                style={{ background: 'url("images/term-condition-bg.png")' }}
            >
                <div className="container">
                    <div className="study">
                        <h4>Course selection</h4>
                        <h1>
                            <span className="line-anmt">Frequently</span> asked
                            <br />
                            questions
                        </h1>
                        <p>
                            Classia is an interesting platform that will teach you in more
                            <br />
                            an interactive way
                        </p>
                    </div>
                </div>
            </div>
            {/*[/Pages Header]*/}
            <div className="classia-mblog course-tab">
                <div className="clasia-blnv">
                    <div className="container">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#all"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                >
                                    All
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#development"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                >
                                    Development
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-contact-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#software"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false"
                                >
                                    IT &amp; Software
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="lsd skill"
                                    data-bs-toggle="pill"
                                    data-bs-target="#lsd"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false"
                                >
                                    HR and L&amp;D
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="lsd marketing"
                                    data-bs-toggle="pill"
                                    data-bs-target="#marketing"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false"
                                >
                                    Marketing
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="lsd design"
                                    data-bs-toggle="pill"
                                    data-bs-target="#design"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false"
                                >
                                    Design
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="blackboar course-trnd">
                    <div className="container">
                        <div className="tab-content clasmrt" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="all"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab"
                                tabIndex={0}
                            >

                                <div>
                                    <CoursesAPI />
                                </div>

                            </div>
                            <div
                                className="tab-pane fade"
                                id="development"
                                role="tabpanel"
                                aria-labelledby="pills-profile-tab"
                                tabIndex={0}
                            >

                            </div>
                            <div
                                className="tab-pane fade"
                                id="software"
                                role="tabpanel"
                                aria-labelledby="pills-contact-tab"
                                tabIndex={0}
                            >

                            </div>
                            <div
                                className="tab-pane fade"
                                id="lsd"
                                role="tabpanel"
                                aria-labelledby="pills-contact-tab"
                                tabIndex={0}
                            >

                            </div>
                            <div
                                className="tab-pane fade"
                                id="marketing"
                                role="tabpanel"
                                aria-labelledby="pills-contact-tab"
                                tabIndex={0}
                            >

                            </div>
                            <div
                                className="tab-pane fade"
                                id="design"
                                role="tabpanel"
                                aria-labelledby="pills-contact-tab"
                                tabIndex={0}
                            >

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="courses-sectn new-course">
                <div className="container">
                    <div className="row eduratitle">
                        <div className="col-md-8">
                            <h2 className="sec-title">
                                New <span> Courses</span>
                            </h2>
                            <p>
                                Various versions have evolved over the years, sometimes by accident,
                            </p>
                        </div>
                        <div className="col-md-4 th-btn">
                            {/* <a href="#">View All</a> */}
                        </div>
                    </div>
                    <CoursesAPI />
                </div>
            </section>



            <section className="courses-sectn trending">
                <div className="container">
                    <div className="row eduratitle">
                        <div className="col-md-8">
                            <h2 className="sec-title">
                                Trending <span> Courses</span>
                            </h2>
                            <p>
                                Various versions have evolved over the years, sometimes by accident,
                            </p>
                        </div>
                        <div className="col-md-4 th-btn">
                            <a href="#">View All</a>
                        </div>
                    </div>
                    <CoursesAPI />
                </div>
            </section>


            <div className="feature-course">
                <div className="container">
                    <div className="row eduratitle">
                        <div className="col-md-8">
                            <h2 className="sec-title">
                                Featured <span> courses</span>
                            </h2>
                            <p>
                                Various versions have evolved over the years, sometimes by accident,
                            </p>
                        </div>
                    </div>
                    <div className="classia-blog">
                        <div className="Featured">
                            <Slider {...settings}>
                                <div className="Feat-box">
                                    <div className="Feat-box_img">
                                        <img src="images/featured-pic.png" alt="#" />
                                    </div>
                                    <div className="Feat-info">
                                        <h4>Microsoft Power BI - Beginner to Pro</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley
                                            of type and scrambled it to make a type specimen book.
                                        </p>
                                        <div className="feat-inner">
                                            <div className="inner-icon">
                                                <img src="images/moneyback.png" />
                                            </div>
                                            <div className="inner-content">
                                                <h5>100% Moneyback Guarantee</h5>
                                                <p>
                                                    Efficiency unleash cross-media information without
                                                    cross-media value
                                                </p>
                                            </div>
                                        </div>
                                        <div className="feat-inner">
                                            <div className="inner-icon">
                                                <img src="images/world-class.png" />
                                            </div>
                                            <div className="inner-content">
                                                <h5>World-class Education</h5>
                                                <p>
                                                    Podcasting operational change management inside of workflows
                                                    to establish
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Feat-box">
                                    <div className="Feat-box_img">
                                        <img src="images/featured-pic.png" alt="#" />
                                    </div>
                                    <div className="Feat-info">
                                        <h4>Microsoft Power BI - Beginner to Pro</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley
                                            of type and scrambled it to make a type specimen book.
                                        </p>
                                        <div className="feat-inner">
                                            <div className="inner-icon">
                                                <img src="images/moneyback.png" />
                                            </div>
                                            <div className="inner-content">
                                                <h5>100% Moneyback Guarantee</h5>
                                                <p>
                                                    Efficiency unleash cross-media information without
                                                    cross-media value
                                                </p>
                                            </div>
                                        </div>
                                        <div className="feat-inner">
                                            <div className="inner-icon">
                                                <img src="images/world-class.png" />
                                            </div>
                                            <div className="inner-content">
                                                <h5>World-class Education</h5>
                                                <p>
                                                    Podcasting operational change management inside of workflows
                                                    to establish
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Feat-box">
                                    <div className="Feat-box_img">
                                        <img src="images/featured-pic.png" alt="#" />
                                    </div>
                                    <div className="Feat-info">
                                        <h4>Microsoft Power BI - Beginner to Pro</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley
                                            of type and scrambled it to make a type specimen book.
                                        </p>
                                        <div className="feat-inner">
                                            <div className="inner-icon">
                                                <img src="images/moneyback.png" />
                                            </div>
                                            <div className="inner-content">
                                                <h5>100% Moneyback Guarantee</h5>
                                                <p>
                                                    Efficiency unleash cross-media information without
                                                    cross-media value
                                                </p>
                                            </div>
                                        </div>
                                        <div className="feat-inner">
                                            <div className="inner-icon">
                                                <img src="images/world-class.png" />
                                            </div>
                                            <div className="inner-content">
                                                <h5>World-class Education</h5>
                                                <p>
                                                    Podcasting operational change management inside of workflows
                                                    to establish
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Feat-box">
                                    <div className="Feat-box_img">
                                        <img src="images/featured-pic.png" alt="#" />
                                    </div>
                                    <div className="Feat-info">
                                        <h4>Microsoft Power BI - Beginner to Pro</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley
                                            of type and scrambled it to make a type specimen book.
                                        </p>
                                        <div className="feat-inner">
                                            <div className="inner-icon">
                                                <img src="images/moneyback.png" />
                                            </div>
                                            <div className="inner-content">
                                                <h5>100% Moneyback Guarantee</h5>
                                                <p>
                                                    Efficiency unleash cross-media information without
                                                    cross-media value
                                                </p>
                                            </div>
                                        </div>
                                        <div className="feat-inner">
                                            <div className="inner-icon">
                                                <img src="images/world-class.png" />
                                            </div>
                                            <div className="inner-content">
                                                <h5>World-class Education</h5>
                                                <p>
                                                    Podcasting operational change management inside of workflows
                                                    to establish
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Feat-box">
                                    <div className="Feat-box_img">
                                        <img src="images/featured-pic.png" alt="#" />
                                    </div>
                                    <div className="Feat-info">
                                        <h4>Microsoft Power BI - Beginner to Pro</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley
                                            of type and scrambled it to make a type specimen book.
                                        </p>
                                        <div className="feat-inner">
                                            <div className="inner-icon">
                                                <img src="images/moneyback.png" />
                                            </div>
                                            <div className="inner-content">
                                                <h5>100% Moneyback Guarantee</h5>
                                                <p>
                                                    Efficiency unleash cross-media information without
                                                    cross-media value
                                                </p>
                                            </div>
                                        </div>
                                        <div className="feat-inner">
                                            <div className="inner-icon">
                                                <img src="images/world-class.png" />
                                            </div>
                                            <div className="inner-content">
                                                <h5>World-class Education</h5>
                                                <p>
                                                    Podcasting operational change management inside of workflows
                                                    to establish
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/*[/Featured courses]*/}
            {/*[learning ]*/}
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
            {/*[/learning ]*/}
        </>


    );
}

export default Courses;