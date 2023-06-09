import React from "react";
import "./style.css";
import { Fragment } from "react";

const ImgRedonda = (props) => {
    return (

        <Fragment>

            <img className="img_redonda" src={props.img} alt="BMW"></img>

        </Fragment>

    )
}

export default ImgRedonda;