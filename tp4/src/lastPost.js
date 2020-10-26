import React from "react";

function LastPost (props) {

    return (
        <div>
            <div className="line">
                {props.value.post1}
            </div>
            <div className="line">
                {props.value.post2}
            </div>
            <div className="line">
                {props.value.post3} 
            </div>
        </div>
    );
}

export default LastPost;