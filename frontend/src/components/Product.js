import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';




function Product({ product }) {

    

    return (
        <div className='container'>
        <Card className='my-3 rounded'>
            <Link to={`/product/${product.slug}`}>
            
                <Card.Img key={product.img_thumb} src={product.img_thumb} />
            </Link>
            
        <Card.Body>
            <Link to={`/product/${product.slug}`}>
                <Card.Title as='div'>
                    <strong>{product.title}</strong>
                    
                </Card.Title>
            </Link>
            <Card.Text as='h2' className='.font-monospace' >
                ${product.price}
                
                <hr></hr>
            </Card.Text>
            <Card.Text>
                <h7><strong>Author</strong> {product.author} <br></br> {product.time_create}</h7>
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
    );
}

export default Product
