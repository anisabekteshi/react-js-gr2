import React, { useState } from 'react';
import img1 from '../images/img1.png';


function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: img1,
      productName: "Iphone 17 air",
      desc: "Dizajn elegant dhe i hollë",
      isFavorite: false
    },
    {
      id: 2,
      img: img1,
      productName: "Iphone 17 pro",
      desc: "Telefon i shpejtë dhe modern",
      isFavorite: false
    },
    {
      id: 3,
      img: img1,
      productName: "Iphone 17 pro max",
      desc: "Kamera me cilësi të lartë",
      isFavorite: false
    },
    {
      id: 4,
      img: img1,
      productName: "Iphone 17 pro",
      desc: "Bateri që zgjat gjithë ditën.",
      isFavorite: false
    },
    {
      id: 5,
      img: img1,
      productName: "Iphone 17 pro max",
      desc: "Ekran i madh dhe i pastër.",
      isFavorite: false
    },
    {
      id: 6,
      img: img1,
      productName: "Iphone 17",
      desc: "Performancë e fuqishme",
      isFavorite: false
    },
  ])

  const toggleFavorite = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };
  return (
    <>
      <h1>Products</h1>
      <div className="container">

        {products
          .filter((p) => !p.isFavorite)
          .map((p) => (
            <div className="card" key={p.id}>

              <img src={p.img} alt={p.productName} className="card-img" />

              <h3 className="card-title">{p.productName}</h3>

              <p className="card-desc">{p.desc}</p>

              <i
                className="bi bi-heart"
                onClick={() => toggleFavorite(p.id)}
              ></i>

            </div>
          ))}
      </div>

      <h2>Favorite Products</h2>

      <div className="container">
        {products
          .filter((p) => p.isFavorite)
          .map((p) => (
            <div className="card" key={p.id}>
              <img src={p.img} className="card-img" />

              <h3 className="card-title">{p.productName}</h3>
              <p className="card-desc">{p.desc}</p>

              <i
                className="bi bi-heart-fill"
                onClick={() => toggleFavorite(p.id)}
              ></i>
            </div>
          ))}
      </div>
    </>
  )
}

export default ProductList