import React from 'react'
import TopHeader from '../layout/TopHeader'
import HeroSection from '../sections/HeroSection'
import Header from '../layout/Header'
import CarouselSection from '../sections/CarouselSection'
import TwoImageSection from '../sections/TwoImageSection'
import TwoImageBottomSection from '../sections/TwoImageBottomSection'
import TwoVideoSection from '../sections/TwoVideoSection'
import CarouselBottom from '../sections/CarouselBottom'
import CarouselBottomVideo from '../sections/CarouselBottomVideo'
import MarqueeSection from '../sections/MarqueeSection'
import BottomBanner from '../sections/BottomBanner'
import AnnouncementSection from '../sections/AnnouncementSection'
import Footer from '../layout/Footer'

const HomePage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <HeroSection />
      <CarouselSection />
      <TwoImageSection />
      <TwoImageBottomSection />
      <TwoVideoSection />
      <CarouselBottom />
      <CarouselBottomVideo />
      <MarqueeSection />
      <BottomBanner />
      <AnnouncementSection />
      <Footer />
    </>
  )
}

export default HomePage