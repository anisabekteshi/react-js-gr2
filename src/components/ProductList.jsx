import React ,{useState} from 'react';
import img1 from '../images/randomImg.jpg';

function ProductList() {
    const [products,setProducts]=useState([
            {
                id:1,
                img : img1,
                productName:"zare",
                desc:"Katër zare prej druri të hedhura mbi një sipërfaqe të errët."
            },
            {
               id:2,
                img : img1,
                productName:"zare",
                desc:"Katër zare prej druri "
            },
            {
               id:3,
                img : img1,
                productName:"zare",
                desc:"Katër zare prej druri të hedhura "
            },
            {
               id:4,
                img : img1,
                productName:"zare",
                desc:"Katër zare prej druri të hedhura mbi një sipërfaqe."
            },
            {
               id:5,
                img : img1,
                productName:"zare",
                desc:" të hedhura mbi një sipërfaqe të errët."
            },
            {
               id:6,
                img : img1,
                productName:"zare",
                desc:" prej druri të hedhura mbi një sipërfaqe të errët."
            },
        ])
  return (
    <>
    <h1>Products</h1>
        <div className="container">
            
      {products.map((p) => (
        <div className="card" key={p.id}>
          
          <img src={p.img} alt={p.productName} className="card-img" />
          
          <h3 className="card-title">{p.productName}</h3>
          
          <p className="card-desc">{p.desc}</p>
          
          

        </div>
      ))}
    </div>

      <h2>Favorite Products</h2>
    </>
  )
}

export default ProductList