import React from 'react';
import { navigate } from 'gatsby'
import { SuccessData } from '../data/aboutData'
import '../components/success.css'
import BlogPosts from '../components/blog-post/index'
import Layout from '../components/layout'


const Success = () => {
    let { title, description, buttonTitle } = SuccessData

    const handlePage = () => {
        navigate('/')
    };

    return (
        <Layout>
            <div className="success__background">
                <h1>{title}</h1>
                <p>{description}</p>
                <button 
                    onClick={handlePage} 
                    className="success-btn"
                >
                    {buttonTitle}
                </button>
            </div>
            <BlogPosts />
        </Layout>
    );
};

export default Success;