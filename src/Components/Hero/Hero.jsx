import React from 'react'
import css from "./Hero.module.css"
import HeroImg from "../../assets/hero.png"
import { RiShoppingBagFill } from "react-icons/ri"
import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"
function Hero() {
    const transition = { duration: 3, type: "spring" }
    return (
        <div className={css.container}>
            <div className={css.sides}>
                <span className={css.text1}>Skin protection cream</span>

                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>
                        {" "}
                        It is never too early to start taking care of your skin and these skin care collections offer a diverse range of benefits.
                    </span>
                </div>
            </div>

            <div className={css.wrapper}>
                <motion.div
                    initial={{ bottom: "2rem" }}
                    whileInView={{ bottom: "0rem" }}
                    className={css.blueCircle}
                    transition={transition}
                ></motion.div>


                <motion.img
                    initial={{ bottom: "-2rem" }}
                    whileInView={{ bottom: "0rem" }}
                    transition={transition}
                    src={HeroImg} alt="heroImg" width={600} />


                <motion.div className={css.cart2}
                    transition={transition}
                    initial={{ right: "4%" }}
                    whileInView={{ right: "2%" }}
                >
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <BsArrowRight />
                    </div>
                </motion.div>
            </div>

            <div className={css.sides}>
                <div className={css.traffic}>
                    <span>2.5m</span>
                    <span>Monthly Traffic</span>
                </div>

                <div className={css.customers}>
                    <span>150k</span>
                    <span>Happy Customers</span>
                </div>
            </div>

        </div>
    )
}

export default Hero