import React from 'react'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
        <div className="app-container">
            <header className="header">
                <div className="logo">🍓 あまおう農園</div>
                <nav>
                    <a href="#products">商品一覧</a>
                    <a href="#contact">お問い合わせ</a>
                </nav>
            </header>

            <main>
                <Hero />
                <ProductSection />
            </main>

            <Footer />
        </div>
    )
}

export default App
