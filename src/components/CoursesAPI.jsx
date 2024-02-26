import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

function CoursesAPI() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        // Define the API endpoint
        const apiUrl = 'http://ec2-54-76-194-248.eu-west-1.compute.amazonaws.com/courses/?language=es';

        // Fetch data from the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // The empty dependency array ensures that this effect runs once when the component mounts

    return (
        <div>
            <div className="row">
                {courses.map(course => (
                    <div className="col-md-3" key={course.course_id}>
                        <div className='course-box'>
                            <div className="course-img">
                                <img src={course.course_image_url} alt={course.course_name} />
                                <span className='tag'>{course.course_category_type}</span>
                            </div>
                            <div className="course-content">
                                <h3 className="course-title">
                                    <NavLink to="/course-detail">
                                        {course.course_name}
                                    </NavLink>
                                </h3>
                            </div>
                            <div className="course-rating">
                                <div className="tutor-ratings-stars">
                                    {course.course_rating}
                                </div>
                                <div className="tutor-ratings-average">{course.course_rating_count}</div>
                            </div>
                            <div className="course-meta">
                                <div className="offer-tag">
                                    <span className="woo-price">{course.course_amount}</span>
                                </div>
                                <div className="info-crs">
                                    <NavLink to="#">
                                        <img src="images/arrowup.svg" alt="#" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}
export default CoursesAPI;
