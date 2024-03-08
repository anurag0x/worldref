import React, { useState, useEffect } from "react";
import axios from "axios";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setProducts(data);
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);
 

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products
    .filter(
      (product) => !selectedCategory || product.category === selectedCategory
    )
    .filter(
      (product) =>
        !searchTerm ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddToDeals = () => {
       alert("You are Authorized")
      };
    
      const handleSeeDetails = (productId) => {
        const selected = products.find((product) => product.id === productId);
        setSelectedProduct(selected);
      };
      const closePopup = () => {
        setSelectedProduct(null);
      };
    return (
        <div style={styles.container}>
          <h1 style={styles.heading}>Worldref</h1>
          {loading && <p>Loading...</p>}
          {error && <p style={styles.error}>{error}</p>}
          {!loading && !error && (
            <div>
              <div style={styles.filtersContainer}>
              <div style={styles.filtersContainer}>
            <label htmlFor="category" style={styles.label}>
              Select a category:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              style={styles.select}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={styles.searchInput}
            />
          </div>              </div>
              <div style={styles.productsContainer}>
                {filteredProducts.map((product) => (
                  <div key={product.id} style={styles.productCard}>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={styles.productImage}
                    />
                    <h2 style={styles.productTitle}>{product.title}</h2>
                    {/* <p style={styles.productDescription}>{product.description}</p> */}
                    <div style={styles.buttonsContainer}>
                      <button
                        onClick={() => handleAddToDeals(product.id)}
                        style={{ ...styles.button, ...styles.addToDealsButton }}
                      >
                        Add to Deals
                      </button>
                      <button
                        onClick={() => handleSeeDetails(product.id)}
                        style={{ ...styles.button, ...styles.seeDetailsButton }}
                      >
                        See Details
                      </button>
                      {selectedProduct && (
        <div style={styles.popup}>
          <h2>{selectedProduct.title}</h2>
          <p>{selectedProduct.description}</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
}

const styles = {
  container: {
    maxWidth: 800,
    margin: "0 auto",
    padding: 20,
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  filtersContainer: {
    marginBottom: 20,
  },
  label: {
    marginRight: 10,
  },
  select: {
    marginRight: 10,
    padding: 8,
    fontSize: 16,
    borderRadius: 5,
  },
  searchInput: {
    padding: 8,
    fontSize: 16,
    borderRadius: 5,
  },
  productsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 40,
  },
  productCard: {
    border: "1px solid #ccc",
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",  // Adjusted to a column layout
    height: "100%",          // Set a fixed height for consistent alignment
  },
  
  productImage: {
    width: "250px",
    height: "250px",
    borderRadius: 5,
    marginBottom: "10px",  // Add margin at the bottom
  },
  
  productTitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: "10px",  // Add margin at the bottom
  },

  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "auto",  // Push the buttons to the bottom
  },

  button: {
    padding: "8px 16px",
    borderRadius: 5,
    cursor: "pointer",
    border: "none",
    color: "white",
    fontSize: 14,
  },
  popup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: 20,
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    zIndex: 999,
  },


  addToDealsButton: {
    backgroundColor: "#4CAF50", // Green color, you can change it
  },

  seeDetailsButton: {
    backgroundColor: "#008CBA", // Blue color, you can change it
  },
};

export default Homepage;