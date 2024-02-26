import React from "react";

function Coursedetail() {
    return (

        <div className={'Coursedetail'}>

            <>
                <div
                    className="pages-header detail-banner"
                    style={{ background: 'url("images/course-detail.png")' }}
                >
                    <div className="container">
                        <div className="study">
                            <h4>Course Detail </h4>
                            <h1>
                                Popular Online <br />
                                <span className="line-anmt">Engineering</span> Courses and <br />
                                Certifications
                            </h1>
                            <p>
                                Classia is an interesting platform that will teach you in more
                                <br />
                                an interactive way
                            </p>
                        </div>
                    </div>
                </div>
                <div className="course-detl-sec">
                    <div className="container">
                        <div className="row eduratitle">
                            <div className="col-md-8">
                                <h2 className="sec-title">
                                    Select your <span> Genre here</span>
                                </h2>
                                <p>
                                    Various versions have evolved over the years, sometimes by accident,
                                </p>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="detail-form">
                                    <form>
                                        <div className="form-group">
                                            <label>Level</label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Level"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Feedback</label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Feedback"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Ranking</label>
                                            <div className="input-group mb-3">
                                                <div className="stars">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-smt">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                fdprocessedid="bucf8n"
                                            >
                                                Send Feedback
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="detail-pic">
                                    <img src="images/student-online.png" alt="student" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="courses-sectn section-detail">
                    <div className="container">
                        <div className="row eduratitle">
                            <div className="col-md-8">
                                <h2 className="sec-title">
                                    Your may also be <span> Interested in</span>
                                </h2>
                                <p>
                                    Various versions have evolved over the years, sometimes by accident,
                                </p>
                            </div>
                        </div>
                        <div className="row gy-30 slider-mobile mbs-arow">
                            <div className="col-md-6 col-xl-3">
                                <div className="course-box">
                                    <div className="course-img">
                                        {" "}
                                        <img src="images/courses01.png" alt="#" />{" "}
                                        <span className="tag">HTML</span>{" "}
                                    </div>
                                    <div className="course-content">
                                        <h3 className="course-title">
                                            <a href="#">Various versions have evolved d...</a>
                                        </h3>
                                        <div className="course-rating">
                                            <div className="tutor-ratings-stars">
                                                {" "}
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />{" "}
                                            </div>
                                            <div className="tutor-ratings-average">(15)</div>
                                        </div>
                                    </div>
                                    <div className="course-meta">
                                        <div className="offer-tag">
                                            <span className="woo-price">$ 500</span>
                                        </div>
                                        <div className="info-crs">
                                            <a href="#">
                                                <img src="images/arrowup.svg" alt="#" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="course-box">
                                    <div className="course-img">
                                        {" "}
                                        <img src="images/courses02.jpg" alt="#" />{" "}
                                        <span className="tag">Design</span>{" "}
                                    </div>
                                    <div className="course-content">
                                        <h3 className="course-title">
                                            <a href="#">Various versions have evolved d...</a>
                                        </h3>
                                        <div className="course-rating">
                                            <div className="tutor-ratings-stars">
                                                {" "}
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />{" "}
                                            </div>
                                            <div className="tutor-ratings-average">(20)</div>
                                        </div>
                                    </div>
                                    <div className="course-meta">
                                        <div className="offer-tag">
                                            <span className="woo-price">$ 500</span>
                                        </div>
                                        <div className="info-crs">
                                            <a href="#">
                                                <img src="images/arrowup.svg" alt="#" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="course-box">
                                    <div className="course-img">
                                        {" "}
                                        <img src="images/courses03.jpg" alt="#" />{" "}
                                        <span className="tag">Business</span>{" "}
                                    </div>
                                    <div className="course-content">
                                        <h3 className="course-title">
                                            <a href="#">Various versions have evolved d...</a>
                                        </h3>
                                        <div className="course-rating">
                                            <div className="tutor-ratings-stars">
                                                {" "}
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />{" "}
                                            </div>
                                            <div className="tutor-ratings-average">(102)</div>
                                        </div>
                                    </div>
                                    <div className="course-meta">
                                        <div className="offer-tag">
                                            <span className="woo-price">$ 500</span>
                                        </div>
                                        <div className="info-crs">
                                            <a href="#">
                                                <img src="images/arrowup.svg" alt="#" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="course-box">
                                    <div className="course-img">
                                        {" "}
                                        <img src="images/courses04.jpg" alt="#" />{" "}
                                        <span className="tag">Social Media</span>{" "}
                                    </div>
                                    <div className="course-content">
                                        <h3 className="course-title">
                                            <a href="#">Various versions have evolved d...</a>
                                        </h3>
                                        <div className="course-rating">
                                            <div className="tutor-ratings-stars">
                                                {" "}
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />
                                                <i className="fa-solid fa-star" />{" "}
                                            </div>
                                            <div className="tutor-ratings-average">(102)</div>
                                        </div>
                                    </div>
                                    <div className="course-meta">
                                        <div className="offer-tag">
                                            <span className="woo-price">$ 500</span>
                                        </div>
                                        <div className="info-crs">
                                            <a href="#">
                                                <img src="images/arrowup.svg" alt="#" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="learning">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                {" "}
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
                                </a>{" "}
                            </div>
                        </div>
                    </div>
                </section>
            </>


        </div>

    )
}

export default Coursedetail