import React from 'react';
import Product from './Product';
import { Row, Col } from 'react-bootstrap';


function ProductList(props) {

    return (
        <div>
            <h1 className='text-center m-4'>Latest Products</h1>
            <Row>
                {props.products[0] && props.products.map(product => {
                    return (
                        <Col key={product.id} sm={12} md={4} lg={4} xl={3}>

                            <Product product={product} />
                        </Col>
                    )
                })}
            </Row>


        </div >
    )
}

export default ProductList
