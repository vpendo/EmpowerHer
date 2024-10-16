import React from 'react'
import NavBar from '../comps/NavBar'
import Hero from '../comps/Hero'
import { Courses } from '../comps/Courses'
import { Mentorship } from '../comps/Mentorship'
import Footer from '../comps/Footer'


export const LandingPage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Courses/>
            <Mentorship/>
            <Footer/>
        </>
    )
}
