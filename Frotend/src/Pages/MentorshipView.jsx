import React from 'react'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'
import Hero from '../comps/Hero'
import Mentorship from '../comps/Mentorship';
export default function MentorshipView() {
    return (
        <>
            <NavBar />
            <Hero heig={true} text="Empowering women through education and mentorship" button="Enroll Now" title="All Avalaible Courses" image="https://i.ytimg.com/vi/w4Dl4UffTC8/maxresdefault.jpg" />
            <Mentorship />

            <Footer />
        </>
    )
}
