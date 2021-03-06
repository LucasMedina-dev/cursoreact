/* eslint-disable */
import CartWidget from './CartWidget'
import Nav from './Nav'
import {Link} from 'react-router-dom'

const Header = (params) => {
    return (
        <header className={params.className}>
            <div className="header_title">
                <Link to="/" className="header_title-style">
                    <img className="header_image-size" src='https://i.ibb.co/48bRsjf/icon.png'></img>
                    Flame
                </Link>
            </div>
            <div className="header_nav">
                <Nav/>
                <CartWidget/>
            </div>
        </header>
    )
}

export default Header