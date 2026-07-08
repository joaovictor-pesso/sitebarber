import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { SearchBar } from '@/components/site/search-bar'
import { Categories } from '@/components/site/categories'
import { Featured } from '@/components/site/featured'
import { HowItWorks } from '@/components/site/how-it-works'
import { Benefits } from '@/components/site/benefits'
import { ForProfessionals } from '@/components/site/for-professionals'
import { Testimonials } from '@/components/site/testimonials'
import { Stats } from '@/components/site/stats'
import { FAQ } from '@/components/site/faq'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <Categories />
        <Featured />
        <HowItWorks />
        <Benefits />
        <ForProfessionals />
        <Testimonials />
        <Stats />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
