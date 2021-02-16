import React, { Component } from 'react'
import sk from '../Components/public/image/sk.png'
import cse from '../Components/public/image/yt1.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                <a href="#home"><img id="profilepic" src={sk} width="170" height="170" alt="profilepic" /></a>
                <h1> Hi! I'm Srinath Kunamalla </h1>
                <p id="paragarph1"> Software Engineer <br />
                </p>

            </section>
        )
    }
}

export default Banner


