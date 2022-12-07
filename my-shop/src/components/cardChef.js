import React from "react";
import { Link} from "react-router-dom";
//styles
import Styles from "./cardChef.module.css"
//styled components
import styled from "styled-components";

const  Img =styled.img`
border-radius: 15px;
`;


const CardChef = ({ ChefData }) => {
    const { id, pic } = ChefData;

    

    return (
        <>
        

            <div >
                <Link  to={`/ChefInfo/${id}`}>
                    <Img src={pic} className={Styles.chefImg} alt='first_chef' />
                   
                </Link>
            </div>
        </>
    );
};

export default CardChef;
