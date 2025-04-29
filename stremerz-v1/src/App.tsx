import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Works } from './components/Works'
import { Features } from './components/Features'
import { Price } from './components/Price'
import { Testimonial } from './components/Testimonial'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='text-neutral-300 text-sm antialiased'>
      <Navbar />
      <Hero />
      <Works />
      <Features />
      <Price />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
