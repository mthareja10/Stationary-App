import React from 'react'
import './About.css'
import login from './login.png'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function About() {
    return (
        <>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                exit={{
                    opacity:1,
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link id='main' to=''>About</Link></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <h3>ALPHABET</h3>
                    <h4><img src={login} /> Login</h4>
                    <hr />
                </nav>
                <div className="aboutPage">
                    <div className="aboutsubPage">
                        <p>The Story of</p>
                        <h2>ALPHABET</h2>
                    </div>
                </div>
                <div className="aboutPage2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam minus unde distinctio ducimus temporibus illum eum! Deserunt, eveniet unde minus possimus iste sequi maxime quam obcaecati et. Illo sapiente modi aliquid, provident nesciunt id reiciendis totam impedit ipsam dignissimos, ea possimus quaerat. Vero veniam sint repudiandae architecto sit consectetur? <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam minus unde distinctio ducimus temporibus illum eum! Deserunt, eveniet unde minus possimus iste sequi maxime quam obcaecati et. Illo sapiente modi aliquid, provident nesciunt id reiciendis totam impedit ipsam dignissimos, ea possimus quaerat. Vero veniam sint repudiandae architecto sit consectetur?
                    </p>
                </div>
                <div className="aboutPage3">
                    <div className="aboutsubPage3">
                        <div id="col1">
                            <h2>ALPHABET</h2>
                            <p>
                                <a href="">About</a><br />
                                <a href="">FAQ</a><br />
                                <a href="">Shipping & Returns</a><br />
                                <a href="">Store Policy</a><br />
                                <a href="">Contact</a>
                            </p>
                        </div>
                        <div id="col2">
                            <h2>Address</h2>
                            <p>500 Terry Francine Street <br />
                                San Francisco, CA 94158 <br />
                                Tel: 123-456-7890</p>
                        </div>
                        <div id="col3">
                            <h2>Opening Hours</h2>
                            <p>Mon - Fri: 10am - 7pm <br />
                                Saturday: 10am - 8pm <br />
                                Sunday: 10am - 7pm</p>
                        </div>
                        <div id="col4">
                            <h2>Join Our Newsletter</h2>
                            <p>Enter your email here *</p>
                            <input type="email" />
                            <button type='submit'>Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>

    )

}
