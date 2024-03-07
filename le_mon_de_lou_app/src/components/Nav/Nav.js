import logo from './../../assets/Logo.png';
import logo_insta from './../../assets/instagram.png';
import './Nav.css'
import NavBar from '../NavBar/NavBar';

function Nav() {
    return (
        <div className='header'>
            <div className='div_head'>
                <img className="logo" src={logo} alt='logo' />
                <div className='content_nav'>
                    <ul className='ul_nav'>
                        <li className='li_nav'><a className='a_nav' href={`/`}>Accueil</a></li>
                    </ul>
                    <div className='navBar'>
                        <NavBar></NavBar>
                    </div>
                    <a href='https://www.instagram.com/le_monde_de_louu/?igsh=MTZncWc4ZXBhdTRjZg%3D%3D&utm_source=qr'><img className="insta" src={logo_insta} alt='logo_insta'/></a>
                </div>
            </div>
        </div>
    )
}

export default Nav