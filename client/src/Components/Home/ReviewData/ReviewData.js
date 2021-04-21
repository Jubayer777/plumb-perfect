import React from 'react';
import "./ReviewData.css";

const ReviewData = (props) => {
    const { reviewerName, designation, description,image } = props.data;
    return (
        <div className="d-flex justify-content-center col-lg-4 col-md-6  pb-5 pt-5 text-center">
            <div id="review-card" className="card " style={{ width: "18rem" }}>
                <div className="card-body">
                    <div className="d-flex justify-content-between ">
                        <div>
                            <img id="review-img" src={image} alt="" />
                        </div>
                        <div className="reviewer"> 
                          <h5>{reviewerName}</h5>
                          <strong>{designation}</strong>
                        </div>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewData;
