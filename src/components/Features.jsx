import React from "react";
import featuresimage from '../images/Frame 19.png'

function Features () {
    return (
        <div id="features">
            <div className="features-model">
                <img src={featuresimage} alt="" />
            </div>
            <div className="features-text">
                <h2>Features</h2>
                <h3>This Application <span>Software</span> is Art</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem architecto et mollitia earum aliquam libero excepturi officia illo qui placeat vero eius ipsum consectetur alias quidem tenetur, beatae recusandae.</p>
                <button>View More Features</button>
            </div>
        </div>
    )
}

export default Features