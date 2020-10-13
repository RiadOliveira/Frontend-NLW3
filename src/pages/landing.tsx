import React from 'react'
import '../styles/pages/landing.css'
import logoImg from '../images/logo.svg'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Landing () {
    return (
        <div id="page-landing">
            <div className="page-content">
                <img src={logoImg} alt="Happy"/>

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanantos e mude o dia de muitas crianças.</p>
                </main>
      

                <div className="location">
                    <strong>Areia Branca</strong>
                    <span>Rio Grande do Norte</span>
                </div>

                <Link to="/orphanages-map" className="enter-app">
                    <FiArrowRight size={26} color='rgba(250, 250, 250, 1)'/>
                </Link>

            </div>
        </div>
    );
}

export default Landing;