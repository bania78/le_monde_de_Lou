import logo from './../../assets/Logo.png';
import logo_insta from './../../assets/instagram.png';
import './Nav.css'

function Nav() {
    return (
        <div className='header'>
            <div className='div_head'>
                <img className="logo" src={logo} alt='logo' />
                <div className='content_nav'>
                    <ul className='ul_nav'>
                        <li className='li_nav'><a className='a_nav' href={`/`}>Accueil</a></li>
                    </ul>
                    <img className="insta" src={logo_insta} alt='logo_insta' />
                </div>
            </div>
        </div>
    )
}

export default Nav