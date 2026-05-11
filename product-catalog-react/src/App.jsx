import { useEffect, useMemo, useState } from 'react'
import './App.css'
import ProductList from './ProductList'
import CategoryFilter from './CategoryFilter'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8080/api/products').then((res) => res.json()),
      fetch('http://localhost:8080/api/categories').then((res) => res.json()),
    ])
      .then(([productsData, categoriesData]) => {
        setProducts(productsData)
        setCategories(categoriesData)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  const filteredProducts = useMemo(() => {
    return [...products]
      .filter((product) => {
        return (
          (selectedCategory
            ? product.category.id === selectedCategory
            : true) &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
      .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.price - b.price
        }
        return b.price - a.price
      })
  }, [products, selectedCategory, searchTerm, sortOrder])

  return (
    <div className="app-wrapper">
      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <div className="container py-5">
        <div className="hero-section mb-5">
          <span className="hero-badge">Modern Shopping Experience</span>

          <h1 className="hero-title">
            Discover Amazing <span>Products</span>
          </h1>

          <p className="hero-subtitle">
            Browse premium collections with lightning-fast search,
            category filters, and smooth shopping interactions.
          </p>

          <div className="stats-container">
            <div className="stat-card">
              <h3>{products.length}+</h3>
              <p>Products</p>
            </div>

            <div className="stat-card">
              <h3>{categories.length}</h3>
              <p>Categories</p>
            </div>

            <div className="stat-card">
              <h3>24/7</h3>
              <p>Shopping</p>
            </div>
          </div>
        </div>

        <div className="filter-panel">
          <div className="row g-3 align-items-center">
            <div className="col-lg-3 col-md-6">
              <CategoryFilter
                categories={categories}
                onSelect={(categoryId) =>
                  setSelectedCategory(categoryId ? Number(categoryId) : null)
                }
              />
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="search-box">
                <i className="bi bi-search"></i>
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <select
                className="form-select custom-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="results-bar">
          <p>
            Showing <span>{filteredProducts.length}</span> products
          </p>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner-border text-light" role="status"></div>
            <p>Loading products...</p>
          </div>
        ) : filteredProducts.length ? (
          <ProductList products={filteredProducts} />
        ) : (
          <div className="empty-state">
            <h3>No Products Found</h3>
            <p>Try changing filters or searching for another product.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App