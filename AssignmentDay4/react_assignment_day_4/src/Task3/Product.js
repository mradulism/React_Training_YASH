import React, { useState } from 'react';
import ShowDetailProduct from './ShowDetailProduct'
import Container from 'react-bootstrap/Container';


const Product = () => {
    const [prod, setProd] = useState([{ prodModel : 'iPhone 14 Pro', price: 'Rs. 1,29,000', camera: '48 MP', ram: '6 GB', os: 'iOS v16.1.2' ,processor:'Bionic A16 chipset' }
    , { prodModel: 'Samsung S22 Ultra', price: 'Rs. 1,18,990', camera: '108 MP', ram: '12 GB', os: 'Android v12' ,processor:'Snapdragon 8 Gen1' }]);

    const prodData = prod.map((prod)=>{
      return <ShowDetailProduct product = {prod}/>
    });
  return (
    <div>
      <h2 style={{color:'#03a5fc','text-align':'center'}}>Phones</h2>
      <Container  className="d-flex"
        style={{display: 'fluid', width: '60%',    'justify-content':'center',    margin:'0 auto',border: "2px solid #525252" }}>
      <br></br>
           {prodData}
      </Container>
    </div>
  );
}

export default Product