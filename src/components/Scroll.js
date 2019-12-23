// import React from "react"
// import "../styles/Scroll.css"

const Scroll = (props) => {

    // return (
    //     <div id="scroll" style={{ overflowY: "scroll", border: "5px solid black", height: "500px"}}>
    //         {props.children}
    //     </div>
    // );
    return props.children;
};

export default Scroll;