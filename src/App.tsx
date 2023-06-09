import { Routes, Route } from 'react-router-dom'
import {
  Container,
  Navbar as NavbarBs,
  Nav,
  Button,
  Navbar,
} from 'react-bootstrap'
import Home from '../pages/Home'
import Store from '../pages/Store'
import About from '../pages/About'

const App = () => {
  return (
    <>
      <NavbarBs />
      <Container className="mb-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  )
}
export default App
