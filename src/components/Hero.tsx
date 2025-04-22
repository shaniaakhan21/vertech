import React from 'react'
import { Button } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import bgGrid from '../assets/hero-section/grid.png'
import CircleGlow from '../assets/hero-section/circle.png'
import LogoWhite from '../assets/Logos/whitelogo.png'

const Hero = () => {
    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center text-center bg-black text-white overflow-hidden"
            style={{
                backgroundImage: `url(${bgGrid})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            {/* Content */}
            <div className="relative z-10 max-w-3xl w-full flex flex-col items-center px-[20%] py-[22%] mt-[8%]" style={{
                backgroundImage: `url(${CircleGlow})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} >
                {/* Logo tag */}
                <div className=" px-4 py-1 rounded-full border border-gray-700 text-sm mb-6 flex items-center space-x-2">
                    <img src={LogoWhite} alt="logo" className="w-4 h-4" />
                    <span className="text-[#fff] font-semibold tracking-wide">VERTECH</span>
                    <span className="text-[#fff]">– Digital Solutions Agency</span>
                </div>

                {/* Headline */}
                <h1 className="text-6xl md:text-6xl lg:text-5xl text-[#fff] font-bold leading-tight mb-4">
                    Empowering Brands with <br /> Purpose & Innovation
                </h1>
                {/* Subtext */}
                <p className="text-[#fff] mb-8 max-w-md">
                    We craft high-impact digital solutions that drive business growth and brand recognition
                </p>

                {/* CTA Button */}
                <Button
                    variant="contained"
                    endIcon={<ArrowOutwardIcon />}
                    sx={{
                        backgroundColor: '#23E4BC',
                        color: '#000',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        px: 3,
                        py: 1,
                        '&:hover': {
                            backgroundColor: '#1fc3a5',
                        },
                    }}
                >
                    Get a Free Strategy Call
                </Button>

                {/* Scroll Down Indicator */}
                <div className="mt-20 text-sm text-gray-400 flex flex-col items-center">
                    <span>Scroll Down</span>
                    <span className="animate-bounce mt-1 text-2xl">↓</span>
                </div>
            </div>
        </section>
    )
}

export default Hero
