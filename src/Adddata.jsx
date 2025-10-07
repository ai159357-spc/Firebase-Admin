import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase/firebase';

import "./App.css";

const Adddata = () => {
  const [productname, setProductName] = useState("");
  const [producturl, setProductURL] = useState("");
  const [productprice, setProductPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!productname || !producturl || !productprice) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: productname,
        url: producturl,
        price: productprice,
        createdAt: new Date().toISOString(),
      });
      alert("Product added successfully!");
      setProductName("");
      setProductURL("");
      setProductPrice("");
    } catch (e) {
      console.error("Error adding document:", e);
      alert("Error adding product!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrap">
      <div className="card">
        <h2 className="card-title">Add Product</h2>

        <label className="field">
          <span className="label">Product Name</span>
          <input
            type="text"
            placeholder="Enter product name"
            value={productname}
            onChange={(e) => setProductName(e.target.value)}
            className="input"
          />
        </label>

        <label className="field">
          <span className="label">Product URL</span>
          <input
            type="text"
            placeholder="Enter product url"
            value={producturl}
            onChange={(e) => setProductURL(e.target.value)}
            className="input"
          />
        </label>

        <label className="field">
          <span className="label">Product Price</span>
          <input
            type="text"
            placeholder="Enter product price"
            value={productprice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="input"
          />
        </label>

        <div className="actions">
          <button
            className="btn"
            onClick={handleAdd}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Data"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Adddata;
