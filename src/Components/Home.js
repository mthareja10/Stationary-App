import React from 'react'
import './Home.css'
import login from './login.png'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Home() {

    return (
        <>
        <motion.div
        initial={{
            opacity:0,
        }}
        animate={{
            opacity:1,
        }}
        exit={{
            opacity:1,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        >
            <nav>
                <ul>
                    <li><Link id='main' to="">Home</Link></li>
                    <li><Link to="./About">About</Link></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <h3>ALPHABET</h3>
                <h4><img src={login} /> Login</h4>
                <hr />
            </nav>

            <div className="homePage">
                <div className="homesubPage">
                    <p id='f'>Introducing Your New</p>
                    <p id='s'>FUN & STYLISH DESK</p>
                    <button class="my-button">Shop Now</button>
                </div>
            </div>
            <div className="homePage2">
                <div className="homesubPage1">
                    <p className='p'>New Arrival</p>
                    <p className='q'>WASHI TAPE</p>
                    <button class="my-button">Shop Now</button>
                </div>
                <div className="homesubPage2">
                    <p className='p'>Start Doodling With</p>
                    <p className='q'>PERFECT PENCILS</p>
                    <button class="my-button">Shop Now</button>
                </div>
            </div>
            <div className="homePage3">
                <div className="homesubPage3">
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