import React from 'react'
import './ProductSection.css'

const products = [
    { id: 1, weight: '1kg', price: 1500, label: 'スタンダードパック', color: '#FFB3C6' },
    { id: 2, weight: '2kg', price: 2800, label: 'ファミリーパック', color: '#FF8FAB' },
    { id: 3, weight: '5kg', price: 5000, label: 'バリューパック', color: '#FB6F92' },
]

function ProductSection() {
    return (
        <section id="products" className="product-section">
            <h2>商品を選ぶ</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="card-header" style={{ backgroundColor: product.color }}>
                            <h3>{product.weight}</h3>
                        </div>
                        <div className="card-body">
                            <span className="price-label">価格</span>
                            <p className="price">¥{product.price.toLocaleString('ja-JP')}</p>
                            <p className="unit-price">
                                (¥{(product.price / parseInt(product.weight)).toLocaleString('ja-JP')}/kg)
                            </p>
                            <button className="buy-button">カートに入れる</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductSection
