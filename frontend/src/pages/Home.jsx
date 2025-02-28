import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
    return (
        <div className="bg-gray-50">
            <Header />
            <div className="py-16 bg-white">
                <SpecialityMenu />
            </div>
            <div className="py-24 bg-gray-50">
                <TopDoctors />
            </div>
            <div className="py-16 bg-white">
                <Banner />
            </div>
        </div>
    )
}

export default Home