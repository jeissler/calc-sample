import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Intro from './components/Intro'
import LifeCalculator from './components/LifeCalculator'
import Promo from './components/Promo'

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/calc"
          element={
            <>
              <LifeCalculator />
              <Promo />
            </>
          }
        />
      </Routes>
    </Layout>
  )
} 