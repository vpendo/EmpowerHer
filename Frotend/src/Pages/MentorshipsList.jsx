import React from 'react'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'
import AboutU from '../comps/About'
import Hero from '../comps/Hero'
import { Mentorship } from '../comps/Mentorship'

export const Mentorships = () => {
    return (
        <>
            <NavBar/>
            <Hero heig={true} text="Empowering women through education and mentorship" title="Mentorship Us" image="https://i.ytimg.com/vi/w4Dl4UffTC8/maxresdefault.jpg"/>
            <Mentorship/>
            <Footer/>
        </>
    )
}
