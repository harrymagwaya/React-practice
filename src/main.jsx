import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Content from './content.jsx'
// import NavBar from './NavBar.jsx'
// import Page1 from './componenttest/Page1.jsx'
// import Footer from './componenttest/footer.jsx'
// import Header from './componenttest/Header.jsx'
// import Header from './test2/Header.jsx'
//import Content from './test2/Content.jsx'
import '../src/test2/style/style.css'
import Header from './blogpost/header.jsx'
import Content from './blogpost/Content.jsx'
import Contacts from './props-learn/contacts/Contacts.jsx'

createRoot(document.getElementById('root')).render(

 <main>
    <Entry>
      <Contacts/>
    </Entry>
  </main>
)
