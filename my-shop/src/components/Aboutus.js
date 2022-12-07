import React from "react";
//import styles
import Styles from "./AboutUs.module.css";
import AobutUSimg from "../images/aboutimage-.png";

const Aboutus = () => {
    return (
        <section className={Styles.Aboutus}>
            <div className={Styles.about_us_des}>
                <h1>مـــا کـــــی هستیم ؟</h1>
                <p>
                    مجموعه ما حدودا از 18 ساله پیش شروع به کار کرده و اوایل تو
                    بازار بزرگ تهران شعبه داشتیم و روزانه 1000 غذا پخت داشتیم و
                    تو کیفیت غذاهامون ادعا داریم ولی کم کم تصمیم گرفتیم وبسایتی
                    داشته باشیم تا بتونیم به سرار تا سر تهران غذا ارسال کنیم با
                    افتخار درخدمت شما هستیم حیدر فود
                </p>
            </div>
            <div className={Styles.about_us_img}>
                <img src={AobutUSimg} alt='aboutUs_img' />
            </div>
        </section>
    );
};

export default Aboutus;
