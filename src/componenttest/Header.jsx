import '../assets/Styles/header.css'

export default function Header (){
    return (
        <header className='top'> 
            <img src="/src/assets/react.svg"  className="nav-logo" width="50px" alt="react logo"/>
            <nav>
                 <ul className='nav-list1'>
                    <li className='nav-list1-item'>Pricing</li>
                    <li className='nav-list1-item'>About</li>
                    <li className='nav-list1-item'>Contact</li>
                 </ul>
            </nav>
       
        </header>
    )
}

