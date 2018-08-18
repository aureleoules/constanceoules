import React from 'preact';

import ContactPhoto from 'assets/photos/contact.jpg';

import './styles.scss';

class Contact extends React.Component {

    componentDidMount() {
        document.title = "Constance Oulès - Contact"
    }

    render() {
        return (
            <div className="contact">
                <img src={ContactPhoto} alt="contact"/>
                <p>
                    26 rue Simart
                    <br/>
                    75018 Paris
                    <br/>
                    contact@constanceoules.com
                    <br/>
                    +33 6 72 73 94 56
                </p>
            </div>
        )
    }
}

export default Contact;