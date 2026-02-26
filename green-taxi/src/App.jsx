import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">GreenTaxi</div>
        <div className="nav-links">
          <a className="nav-link">料金案内</a>
          <a className="nav-link">採用情報</a>
          <a className="nav-link">ライドシェア</a>
          <a className="nav-link">会社概要</a>
        </div>
        <button className="nav-button">ご予約・お問い合わせ</button>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <img src="/hero.png" alt="Green Taxi in Tokyo" className="hero-bg" />
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-tag">TAXI & RIDESHARE</span>
          <h1 className="hero-title">
            移動を、もっと<span>やさしく。</span><br />
            働くを、もっと<span>自由に。</span>
          </h1>
          <p className="hero-subtitle">
            グリーンタクシーは、お客様の安全で快適な移動と、<br />
            ドライバーの新しい働き方を応援するモビリティカンパニーです。
          </p>

          <div className="split-action">
            {/* Customer Card */}
            <div className="action-card">
              <div className="card-icon">🚕</div>
              <h3 className="card-title">タクシーを呼ぶ</h3>
              <p className="card-desc">
                日常の移動から、空港送迎、貸切タクシーまで。初乗り運賃は780円から。料金シミュレーションで事前に金額がわかって安心です。
              </p>
              <a href="#" className="btn-outline">料金・サービスを見る</a>
            </div>

            {/* Driver Card */}
            <div className="action-card">
              <div className="card-badge">二種免許不要・未経験歓迎</div>
              <div className="card-icon">🤝</div>
              <h3 className="card-title">ドライバーとして働く</h3>
              <p className="card-desc">
                プロのタクシードライバーから、副業感覚で始められる「ライドシェア」まで、あなたに合った働き方を。
              </p>
              <a href="#" className="btn-primary">採用情報・エントリー</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
