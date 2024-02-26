import React, { useEffect } from 'react';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={'About'}>
            <div className="page-wrapper">
                <div
                    className="pages-header"
                    style={{ background: 'url("images/about-banner.jpg")' }}
                >
                    <div className="container">
                        <div className="study">
                            <h4>About</h4>
                            <h1>
                                <span className="line-anmt">Fueling</span> the world’s
                                <br />
                                ambition
                            </h1>
                            <p>
                                Classia is an interesting platform that will teach you in more
                                <br />
                                an interactive way
                            </p>
                        </div>
                    </div>
                </div>
                <section className="about-col">
                    <div className="container">
                        <div className="row align-items-sm-center">
                            <div className="col-md-6">
                                <img src="images/about-img.png" alt="#" className="img-fluid" />
                            </div>
                            <div className="col-md-6 peset">
                                <div className="col-tetls">
                                    <h4>About us</h4>
                                    <h2>
                                        We Are The <span>Best</span>
                                    </h2>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                                <a href="#" className="btn btn-primary btngt">
                                    Get Start
                                </a>{" "}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="learn-section">
                    <div className="container">
                        <div className="row align-items-sm-center">
                            <div className="col-md-6 leran-mrit">
                                <div className="col-tetls">
                                    <h2>
                                        Tools For Teachers <br />
                                        And <span>Learners</span>
                                    </h2>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img src="images/Learners.png" alt="#" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="classia-section">
                    <div className="container">
                        <div className="col-tetls">
                            <h2>
                                What is <span>Classia</span>
                            </h2>
                            <p>
                                Classia is a platform that allows educators to create online classes
                                whereby they can store the course materials online; <br />
                                manage assignments, quizzes and exams; monitor due dates; grade
                                results and provide students with feedback all in one place.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 ivesr">
                                <div className="istrt-img">
                                    <img src="images/clssiaimg.png" alt="#" className="img-fluid" />{" "}
                                </div>
                                <div className="instrt">
                                    <h2>FOR INSTRUCTORS</h2>
                                    <a href="#">Start a class today</a>{" "}
                                </div>
                            </div>
                            <div className="col-md-6 ivesr">
                                <div className="istrt-img">
                                    <img src="images/clssiaimg.png" alt="#" className="img-fluid" />{" "}
                                </div>
                                <div className="instrt">
                                    <h2>FOR STUDENTS</h2>
                                    <a href="#" className="acc-code">
                                        Enter access code
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-secabt">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-6">
                                <div className="featured-post-lg">
                                    <div className="thumb rounded">
                                        {" "}
                                        <img
                                            src="images/blog-img01.png"
                                            alt="#"
                                            className="img-fluid"
                                        />{" "}
                                    </div>
                                    <div className="adds-post">
                                        <h5 className="post-title">
                                            <a href="#">
                                                Class adds $30 million to its balance sheet for a
                                                Zoom-friendly edtech solution
                                            </a>
                                        </h5>
                                        <p className="excerpt">
                                            Class, launched less than a year ago by Blackboard co-founder
                                            Michael Chasen, integrates exclusively...
                                        </p>
                                        <a href="#" className="pst-btn">
                                            Read more
                                        </a>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-6 develop">
                                <div className="col-tetls">
                                    <h2>
                                        Latest News and
                                        <br />
                                        <span>Resources</span>
                                    </h2>
                                    <p>
                                        See the developments that have occurred to Classia in the world
                                    </p>
                                </div>
                                <div className="post-list-sm">
                                    <div className="thumb circle">
                                        {" "}
                                        <img
                                            src="images/blog-img01.png"
                                            alt="#"
                                            className="img-fluid"
                                        />{" "}
                                        <span className="bl-cat">News</span>{" "}
                                    </div>
                                    <div className="details  ">
                                        <h6 className="post-title">
                                            <a href="#">
                                                Class Technologies Inc. Closes $30 Million Series A Financing
                                                to Meet High Demand
                                            </a>
                                        </h6>
                                        <p className="excerpt">
                                            Class Technologies Inc., the company that created Class,...
                                        </p>
                                    </div>
                                </div>
                                <div className="post-list-sm">
                                    <div className="thumb circle">
                                        {" "}
                                        <img
                                            src="images/blog-img01.png"
                                            alt="#"
                                            className="img-fluid"
                                        />{" "}
                                        <span className="bl-cat">News</span>{" "}
                                    </div>
                                    <div className="details  ">
                                        <h6 className="post-title">
                                            <a href="#">
                                                Class Technologies Inc. Closes $30 Million Series A Financing
                                                to Meet High Demand
                                            </a>
                                        </h6>
                                        <p className="excerpt">
                                            Class Technologies Inc., the company that created Class,...
                                        </p>
                                    </div>
                                </div>
                                <div className="post-list-sm">
                                    <div className="thumb circle">
                                        {" "}
                                        <img
                                            src="images/blog-img01.png"
                                            alt="#"
                                            className="img-fluid"
                                        />{" "}
                                        <span className="bl-cat">News</span>{" "}
                                    </div>
                                    <div className="details  ">
                                        <h6 className="post-title">
                                            <a href="#">
                                                Class Technologies Inc. Closes $30 Million Series A Financing
                                                to Meet High Demand
                                            </a>
                                        </h6>
                                        <p className="excerpt">
                                            Class Technologies Inc., the company that created Class,...
                                        </p>
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
            </div>
        </div>
    )
}


export default About
