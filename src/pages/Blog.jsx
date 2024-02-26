import React, { useEffect } from 'react';

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={'Blog'}>

            <>
                <div
                    className="pages-header"
                    style={{ background: 'url("images/about-banner.jpg")' }}
                >
                    <div className="container">
                        <div className="study">
                            <h4>Blog</h4>
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
                {/*[/Pages Header]*/}
                <div className="classia-mblog">
                    <div className="bl-tlt text-center">Blog</div>
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
                                        id="pills-skills-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#skills"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Soft Skills
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
                    <div className="blackboar">
                        <div className="container">
                            <div className="tab-content clasmrt" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="all"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                    tabIndex={0}
                                >
                                    {/*[blog latest]*/}
                                    <div className="ficd-blog">
                                        <div className="row blog-sec">
                                            <div className="col-md-6">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <img
                                                            src="images/young-collageer.png"
                                                            alt="#"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">
                                                                Class adds $30 million to its balance sheet for a
                                                                Zoom-friendly edtech solution
                                                            </a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <img
                                                            src="images/close-up-stu.png"
                                                            alt="#"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">
                                                                Class adds $30 million to its balance sheet for a
                                                                Zoom-friendly edtech solution
                                                            </a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*[/blog latest]*/}
                                    {/*[blog All]*/}
                                    <div className="classia-blog">
                                        <div className="row blog-pgnv">
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="featured-post-lg box-blog">
                                                    <div className="thumb rounded">
                                                        <a href="#">
                                                            <img
                                                                src="images/blog02.png"
                                                                alt="#"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="adds-post">
                                                        <h5 className="post-title">
                                                            <a href="#">AWS Certified solutions Architect</a>
                                                        </h5>
                                                        <p className="excerpt">
                                                            Class, launched less than a year ago by Blackboard
                                                            co-founder Michael Chasen, integrates exclusively...
                                                        </p>
                                                        <a href="#" className="pst-btn">
                                                            Read more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*[/blog All]*/}
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="development"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                    tabIndex={0}
                                >
                                    Development
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="software"
                                    role="tabpanel"
                                    aria-labelledby="pills-contact-tab"
                                    tabIndex={0}
                                >
                                    IT &amp; Software
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="skills"
                                    role="tabpanel"
                                    aria-labelledby="pills-contact-tab"
                                    tabIndex={0}
                                >
                                    Soft Skills
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="lsd"
                                    role="tabpanel"
                                    aria-labelledby="pills-contact-tab"
                                    tabIndex={0}
                                >
                                    HR and L&amp;D
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="marketing"
                                    role="tabpanel"
                                    aria-labelledby="pills-contact-tab"
                                    tabIndex={0}
                                >
                                    Marketing
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="design"
                                    role="tabpanel"
                                    aria-labelledby="pills-contact-tab"
                                    tabIndex={0}
                                >
                                    Design
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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


        </div>
    )
}
export default Blog
