import React, { Component } from 'react'
import biologo from './public/image/biopicimg.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={biologo} width="180" height="180" alt="abtimg"/>
                    <p> Software Engineer by profession have vast experience in Retail domain. Previouly worked with top 2nd retailer in USA and currently working for top 1 retailer in USA.
                    React Native Engineer interested in building performant Point of Sale app on both the iOS and Android platforms. Responsible for architecting and building these applications, as well as coordinating with the teams responsible for other layers of the product infrastructure. Building a product is a highly collaborative effort, and as such, a strong team player with a commitment to perfection is required.
                    Expert in Android/iOS Mobile App Development with React Native technologies and JavaScript and React/Redux
                    Integrating Point of Sale devices such as payment terminals or barcode scanners, or other types of peripheral devices
                    Experience in testing with tools like Jest, Detox, Cypress, Selenium, TestNG, Cucumber, Appium, Gatling
                    Knowledge with unit and automated testing of React Native apps on both iOS and Android.
                    Experience with Splunk, Google Cloud Platform
                    </p>
                
            </section>
        )
    }
}

export default About
