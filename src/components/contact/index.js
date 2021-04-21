import React, { useState } from 'react'
import { Data } from '../../data/contactData'
import { navigate, Link } from 'gatsby'
import axios from 'axios'
import './contact.css'

const Index = () => {
    return (
        <div id="contact" className="contact__background">
            <ContactTypo />
            <ContactFields />
        </div>
    )
};  

const ContactTypo = () => {
    let { title, description } = Data
    return (
        <div>
            <h1> {title} </h1>
            <Typography desc={description} />
        </div>
    )
}

const Typography = (props) => {
    const text = props.desc;
    const newText = text.split('\n').map(str => <p style={{fontWeight: 300}}> {str} </p>)

    return newText;
}

const ContactFields = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
        sent: false,
        buttonText: 'Submit',
        err: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        setData({
            ...data,
            buttonText: 'Sending...'
        });
        axios.post('/.netlify/functions/sendMail', data)
            .then(res => {
                if(res.data.result == 'success') {
                    setData({
                        ...data,
                        buttonText: 'Message Sent',
                        sent: true,
                        err: 'success'
                    })
                    setTimeout(() => {
                        resetForm()
                    }, 4000);
                } else {
                    setData({
                        ...data,
                        buttonText: 'Message not sent due to an error',
                        sent: false,
                        err: 'failed'
                    })
                    setTimeout(() => {
                        resetForm();
                    }, 5000);
                }
            }).catch(err => {
                console.log(err);
                setData({
                    ...data,
                    buttonText: 'Failed to send',
                    err: 'Failed'
                })
            })
    }

    const resetForm = () => {
        setData({
            name: '',
            email: '',
            message: '',
            sent: false,
            buttonText: 'Submit',
            err: ''
        })
    };

    return (
        <React.Fragment>
            <form action="mailto:together@fourpercnt.com" method="POST" encType="multipart/form-data" className="form">
                <div className="form__field-1">
                    <div className="form__input-1">
                        <label>First Name</label>
                        <input onChange={handleChange} name="name" type="text" />
                    </div>
                    <div className="form__input-1">
                        <label>Surname</label>
                        <input onChange={handleChange} name="name" type="text" />
                    </div>
                </div>
                <div className="form__field-2">
                    <div className="form__input-2">
                        <label>Email Address</label>
                        <input onChange={handleChange} name="email" type="text" />
                    </div>
                    <div className="form__input-2">
                        <label>Message</label>
                        <textarea onChange={handleChange} name="message" type="text" />
                    </div>
                </div>
                <button onClick={formSubmit} className="contact__btn"> <Link style={{textDecoration: 'none', color: '#dd226e'}} to="/success">Submit</Link> </button>
            </form>
        </React.Fragment>
    )
};

export default Index;