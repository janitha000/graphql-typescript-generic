import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import './Profile.css'

const Home: React.FC = () => {
    return (
        <div className="profile">
            <Navbar />
            <div className="profile-sections">
                <About />
                <Contact />
            </div>

        </div>
    )
}

export default Home
