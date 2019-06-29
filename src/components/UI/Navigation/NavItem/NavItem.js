import React from "react";

const navItem = (props) => (
    <li><a href={props.link}>{props.name}</a></li>
);

export default navItem;