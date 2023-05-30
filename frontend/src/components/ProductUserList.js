import React from 'react'
import Product from './Product'
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap'



function ProductList(props) {


    const [products, setProducts] = useState([]); 

    const token = localStorage.getItem('mytoken')

    useEffect(() => {
        fetch('http://127.0.0.1:8000/user-products/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`

            }
        })
            .then(resp => resp.json())
            .then(result => setProducts(result))
            .catch(e => console.log(e))
    }, [token])





    return (
        <div>
            <h1 className='text-center m-4'>Latest Products</h1>

            <Row>

                {products[0] && products.map(product => {

                    return (

                        <Col key={product.id} sm={12} md={4} lg={4} xl={3}>

                            <Product product={product} />

                        </Col>
                    )
                })}



            </Row >


        </div >
    )
}

export default ProductList
