const ProductList = ({ products }) => {
  return (
    <div className="row g-4">
      {products.map((product) => (
        <div className="col-xl-3 col-lg-4 col-md-6" key={product.id}>
          <div className="product-card h-100">
            <div className="image-wrapper">
              <img
                src={product.imageUrl || 'https://placehold.co/600x400'}
                className="product-image"
                alt={product.name}
              />

              <div className="product-overlay">
                <button className="view-btn">View Product</button>
              </div>
            </div>

            <div className="product-content">
              <div className="product-category">
                {product.category?.name}
              </div>

              <h5 className="product-title">{product.name}</h5>

              <p className="product-description">
                {product.description}
              </p>

              <div className="product-footer">
                <h4 className="product-price">${product.price}</h4>

                <button className="cart-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList