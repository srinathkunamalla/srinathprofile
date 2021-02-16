import React, { Component } from 'react'

import javaimg from '../Components/public/image/java.png'
import jsimg from '../Components/public/image/javascriptimg2.png'
import htmlimg from '../Components/public/image/html5logo.jpg'
import cssimg from '../Components/public/image/csslogo.png'
import reactlogo from '../Components/public/image/logo192.png'
import cucumber from '../Components/public/image/cucumber.png'





class Project extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    <div><img src={javaimg} width="100" height="100" alt="python"/></div>
                    <div><img src={jsimg} width="100" height="100" alt="js"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={reactlogo} width="100" height="100" alt="reactlogo"/></div>  
                    <div><img src={cucumber} width="100" height="100" alt="cucumber"/></div>
                
            </section>
        )
    }
}

export default Project
