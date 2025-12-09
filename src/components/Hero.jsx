import React from 'react'
import './Hero.css'
import heroImage from '../assets/hero.png'

function Hero() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>絶品 冷凍あまおう</h1>
                <p>美味しさを氷に閉じ込めました。<br />福岡自慢のプレミアムな味わいをお楽しみください。</p>
                <button className="cta-button" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
                    今すぐ購入
                </button>
            </div>
        </section>
    )
}

export default Hero
