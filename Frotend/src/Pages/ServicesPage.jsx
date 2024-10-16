import React from 'react'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'
import AboutU from '../comps/About'
import Hero from '../comps/Hero'
import Services from '../comps/Servies'

export const ServicePage = () => {
    return (
        <>
            <NavBar/>
            <Hero heig={true} text="Empowering women through education and mentorship" title="Service Us" image="https://i.ytimg.com/vi/w4Dl4UffTC8/maxresdefault.jpg"/>
            <Services/>
            <Footer/>
        </>
    )
}
