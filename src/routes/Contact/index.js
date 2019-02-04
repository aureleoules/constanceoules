import React from 'preact';

import ContactPhoto from 'assets/photos/contact2.jpg';

import './styles.scss';

import Photo from 'components/Photo';

import client from 'services/client';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            address: "",
            email: "",
            phone: ""
        }
    }

    componentDidMount() {
        document.title = "Constance Oulès - Contact";

        client.get('/content/contact').then(response => {
            const content = response.data.payload;
            this.setState({...content});
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div className="contact">
                <Photo src={ContactPhoto} alt="contact"/>
                <p>
                    {this.state.address}
                    <br/>
                    {this.state.city}
                    <br/>
                    {this.state.email}
                    <br/>
                    {this.state.phone}
                </p>
            </div>
        )
    }
}

export default Contact;