import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
//add loading img
import LoadingImg from "../images/Infinity-1s-200px.gif";
//bg img 
import Slider from "../images/slider-01.jpg"
//style
import Styles from "./chefInfo.module.css";
//add styeld component
import styled from "styled-components";
// ues the styled components
const SectionChef = styled.section`
width: 100vw;
height: 100vh;
background-image:url(${Slider});
background-size: cover;
background-position: center;
display: flex;
align-items: center;
justify-content: center;
}

`;
const ContainerChefInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:30px;
    margin: 0 auto;
    border-radius: 25px;
    backdrop-filter: blur(20.6px);
    box-shadow: 0 2px 10px rgb(0 0 0 / 10%), 0 10px 15px rgb(0 0 0 / 20%);
    box-sizing: border-box;
    background-image: linear-gradient(45deg, rgba(255,255,255,0.25), rgba(255,255,255,0.25));
    mix-blend-mode: hard-light;
    width:65%;
    height:fit-content;
    
    
    @media only screen and (max-width: 700px){
        flex-wrap:wrap;
        padding:15px 10px;
        text-align: center;

    }
   
`;

const ChefImg = styled.img`
    width: 70%;
    border-radius: 15px;
    @media only screen and (max-width: 700px){
        width: 75%;
       margin-left:50px;

    }
    @media only screen and (max-width: 600px){
        width: 75%;
       margin-left:10px;

    }
`;

const ChefDes = styled.div`
    direction: rtl;
    @media only screen and (max-width: 900px){
        font-size: 15px;
    }
`;

const ChefName=styled.h1`
    margin:0 0 40px 0;
    @media only screen and (max-width: 900px){
        font-size: 22px;
    margin:0 0 30px 0;

    }
`

const ChefInfo = () => {
    // get the current id of chef becasue the will help you to get correct data from api to
    // set that for info of chefs
    const params = useParams();
    const getId = params.id;

    const BASE_URL = `https://631097cd826b98071a4568d0.mockapi.io/chefInfo/${getId}`;
    //save the data in this VAR
    const [chefInfoData, setChefInfoData] = useState({});

    //get the  data  agine

    useEffect(() => {
        axios.get(BASE_URL).then((Res) => setChefInfoData(Res.data));
    }, []);

    //Destructing
    const { name, pic, resume, experience } = chefInfoData;

    return (
        <SectionChef>
           
           <Link className={Styles.BackBtn} to="/mainPage">برگشت </Link>

            <ContainerChefInfo>
                <div>
                    {
                        pic ? <ChefImg src={pic} alt='img_chef'></ChefImg> :   <img src={LoadingImg}  alt='loading img' />
                    }
                    
                </div>
                <ChefDes>
                    <ChefName> اسم : {name}</ChefName>
                    <h3> روزمه : {resume}</h3>
                    <h3> تخصص : {experience}</h3>
                </ChefDes>
            </ContainerChefInfo>
        
        </SectionChef>
    );
};

export default ChefInfo;
