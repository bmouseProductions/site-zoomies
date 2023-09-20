import { Link } from "react-router-dom";

import { faBars, faHome, faNewspaper, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuMobile() {

    return (
        <>
            
                <ul className="flex justify-around">    
                    <li>
                        <Link to="/" className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faHome} />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre" className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faHome} />
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link to="/produtos" className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faBars} />
                            Produtos
                        </Link>
                    </li>
                    <li>
                        <Link to="/produtos" className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faNewspaper} />
                            Blog
                        </Link>
                    </li>
                </ul>
        </>
    );
}


/*<Link to='/' onClick={handleDrawerClose}>
                        <img src={logo} className="max-w-[200px] h-[50px] md:max-w-xs " alt="" />
                    </Link>*/