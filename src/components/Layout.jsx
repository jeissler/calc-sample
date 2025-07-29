import { useLocation } from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

export default function Layout({ children }) {
  const location = useLocation();
  const isCalcPage = location.pathname === '/calculator';

  return (
    <div>
      <Header />
      <Hero />
      <main>
        {children}
      </main>
      <Footer showLegal={isCalcPage} />
    </div>
  )
} 