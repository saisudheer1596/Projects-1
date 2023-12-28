import React from 'react'
import Banner from '../components/home/Banner'
import Blog from '../components/home/Blog'
import Header from '../components/home/Header'
import Features from '../components/home/Features'
import Clients from '../components/home/Clients'
import Footer from '../components/home/Footer'
import Service from '../components/home/Service'
import Testimonials from '../components/home/Testimonials'
import Faq from '../components/home/Faq'
import Missionvission from '../components/home/Missionvission'
import Workout from '../components/home/Workout'
import Contactarea from '../components/home/Contactarea'

function Homepage() {
  return (
    <>
            <Header />
            <Banner />
            <Features />
            <Clients />
            <Missionvission />
            <Service />
            <Workout />
            <Testimonials />
            <Faq />
            <Blog />
            <Contactarea />
            <Footer />
        </>
  )
}

export default Homepage