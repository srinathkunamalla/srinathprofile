import React, { Component } from 'react'
import forbidden from '../Components/public/image/forbidden.png';
import burgerlogo from '../Components/public/image/burgerlogo.png';





class Portfolio extends Component {
    render() {
        return (

            <section className="projects">
                <h1 id='Portfolio'>Portfolio</h1>
                <p>Some of the projects done by me including my blog.</p>

                <div className="container">
                    <a href="https://github.com/srinathkunamalla/Fill-Skill"><img src={forbidden} width="200" height="200" /><p>Fill Skill</p></a>
                    <a href="https://github.com/srinathkunamalla/burger-app"><img src={burgerlogo} width="200" height="200" /><p>Burger order app</p></a>
                </div>


            </section>
        )
    }
}

export default Portfolio


