import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Content from './content.jsx'
// import NavBar from './NavBar.jsx'
// import Page1 from './componenttest/Page1.jsx'
// import Footer from './componenttest/footer.jsx'
// import Header from './componenttest/Header.jsx'
import Header from './test2/Header.jsx'
import Content from './test2/Content.jsx'
import '../src/test2/style/style.css'

createRoot(document.getElementById('root')).render(

 <main>
    <section className='sect'>
  <Header />
    {/* <NavBar />
    <Content /> */}
    <Content />
    {/* <Page1 />
    <Footer /> */}
    </section>
    
  </main>
)
