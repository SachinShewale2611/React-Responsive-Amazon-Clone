import React from 'react'
import Logo from "../../assets/logo.png"
import css from "./Footer.module.css"
import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UserIcon, LinkIcon } from "@heroicons/react/outline"
function Footer() {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="logo" />
                    <span>Amazon</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>200, Arenja Corner,Navi Mumbai, 400705</span>
                        </span>
                        <span className={css.pngLine}>
                            <PhoneIcon className={css.icon} />
                            <span>02230985454</span>
                        </span>
                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <span>support@sachin.com</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <span>Sign In</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UserIcon className={css.icon} />
                            <span>About us</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <span>Safety Privacy & Terms</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className={css.coppyRight}>
                <span>Copyright ©2022 by Amazon, Inc.</span>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;