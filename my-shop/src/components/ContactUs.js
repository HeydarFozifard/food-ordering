import React from "react";
// style
import Styles from "./ContactUs.module.css";
//icon
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiArrowGoForwardLine } from "react-icons/ri";

//social media
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const ContactUs = () => {
    return (
        <div>
            <div className={Styles.AboutUs_title}>
                <span className={Styles.icon}></span>
                <h1 className={Styles.headerTitle}>با ما در ارتباط باشید </h1>
                <span className={Styles.icon}></span>
            </div>
            <div className={Styles.contianer_address}>
                <ul className={Styles.container_mainList}>
                    <li>
                        <span>
                            <MdLocationOn />
                        </span>
                        <div>
                            <p> آدرس مـا</p>
                            <h4>تهران/شهرری/دولت آباد</h4>
                        </div>
                    </li>
                    <li>
                        <span>
                            <BsFillTelephoneFill />
                        </span>
                        <div>
                            <p>تماس با مـا</p>
                            <h4>021 32 53 22 55</h4>
                        </div>
                    </li>
                    <li>
                        <span>
                            <HiOutlineMail />
                        </span>
                        <div>
                            <p>ایمیل مـا</p>
                            <h4>heydar.Food@gmail.com</h4>
                        </div>
                    </li>
                    <li>
                        <span>
                            <RiArrowGoForwardLine />
                        </span>
                        <div>
                            <p>مارو در شبکه های اجتماعی دنبال کنید</p>
                            <ul className={Styles.socialMediaIcon}>
                                <ol>
                                    <a href='#'>
                                      <i> <AiOutlineInstagram /></i>  
                                    </a>
                                </ol>
                                <ol>
                                    <a href='#'>
                                        <i> <AiFillYoutube /></i>

                                        
                                        
                                    </a>
                                </ol>
                                <ol>
                                    <a href='#'>
                                       <i><AiOutlineTwitter /></i> 
                                    </a>
                                </ol>
                                <ol>
                                    <a href='#'>
                                       <i><FaFacebookF /> </i> 
                                    </a>
                                </ol>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactUs;
