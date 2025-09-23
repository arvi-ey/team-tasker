import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import DashBoard from './components/Dashboard/DashBoard'
import Analytics from './components/Analytics/Analytics'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        <Route index element={<Analytics />} /> {/* default page */}
        <Route path="projects" element={<Projects />} />
      </Route>


      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App
