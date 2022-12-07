import React from "react";
//styles
import Styles from "./comments.module.css";

const Comments = ({ Data }) => {
    const { firstName, pic, idea } = Data;

    let imgUrl=require(`../images/${pic}`).default;
    
    return (
        <div className={Styles.Container_comments}>
            <div className={Styles.comments_info}>
                
                <img  src={imgUrl}  alt='comments' width="100px" height="100px" />
                <p>{firstName}</p>
            </div>
            <div className={Styles.Container_comments_content}>
                <h4>{idea}</h4>
                
            </div>
         
        </div>
    );
};

export default Comments;
