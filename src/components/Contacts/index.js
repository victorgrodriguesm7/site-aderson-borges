import React from 'react';
import {
    FaInstagram as InstagramIcon,
    FaFacebook as FacebookIcon,
    FaPhoneAlt as PhoneIcon
} from 'react-icons/fa';
import './index.css';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contactsInstagram">
                <InstagramIcon className="mediaIcon"/>
                <span>
                    <a href="https://www.instagram.com/aderson_borges_carvalho/">@aderson_borges_carvalho</a>
                </span>
            </div>
            <div className="contactsFacebook">
                <FacebookIcon className="mediaIcon"/>
                <span>
                    <a href="https://www.facebook.com/pages/EEEP-Aderson-Borges-de-Carvalho-Liceu-de-Juazeiro/699326460078337">Aderson Borges de Carvalho</a>
                </span>
            </div>
            <div className="contactsPhone">
                <PhoneIcon className="mediaIcon"/>
                <span><a>3102-1139</a></span>
            </div>
        </div>
    );
}

export default Contacts;