import React, { Component } from 'react'

class Services extends Component {
    render() {
        return (
            <div className="services">
                <h1>Top services</h1>
                <div className="services-info">
                    <div className="box">
                        <img src="https://media.giphy.com/media/3ohhwf1hBDW56dTctO/giphy.gif" />
                        <p>Teaching</p>
                    </div>
                    <div className="box">
                        <img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" />
                        <p>Development</p>
                    </div>
                    <div className="box">
                        <img src="https://media.giphy.com/media/3o6gbchrcNIt4Ma8Tu/giphy.gif" />
                        <p>Business</p>
                    </div>
                    <div className="box">
                        <img src="https://media.giphy.com/media/sULKEgDMX8LcI/giphy.gif" />
                        <p>IT &amp; Software</p>
                    </div>
                    <div className="box">
                        <img src="https://media.giphy.com/media/povenlBAIz14s/giphy.gif" />
                        <p>Design</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
