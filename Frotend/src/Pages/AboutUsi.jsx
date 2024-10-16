import React from 'react'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'
import AboutU from '../comps/About'
import Hero from '../comps/Hero'

export const AboutUs = () => {
    return (
        <>
            <NavBar/>
            <Hero heig={true} text="Empowering women through education and mentorship" title="About Us" image="https://i.ytimg.com/vi/w4Dl4UffTC8/maxresdefault.jpg"/>
            <AboutU/>
            <Footer/>
        </>
    )
}
