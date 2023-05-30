import React, { useState } from 'react';
import { Row, Container, Col, Image, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router';


function ProductScreen(props) {
   

    const params = useParams()
    const [product, setProduct] = useState({})
    const [req, setReq] = useState('')

    

    const token = localStorage.getItem('mytoken')

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/products/${params.slug}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(resp => resp.json())
            .then(result => setProduct(result))
            .catch(e => console.log(e))
    }, [params.slug])
    

    useEffect(() => {
        fetch('http://127.0.0.1:8000/dj-rest-auth/user/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
            .then(resp => resp.json())
            .then(result => setReq(result))
            .catch(e => console.log(e))
    }, [token])






    const deleteProduct = async (slug) => {
        axios.delete(`http://127.0.0.1:8000/products/${slug}/`, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Token ${token}`
            }
        })
        .then(res => {
            console.log('Deleted');
            navigate('/', { replace: true })
            
        }).catch(err => console.log(err))
        
                
    }

    

    
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)}
       


    return (
        <div>
            <Container>
            <button className='btn btn-dark my-3' onClick={goBack}>Go Back</button>
                {req.username === product.author ?
                                    <div className='flex-end'>
                                        <Link className="btn btn-outline-primary mr-2" to={`/${product.slug}/update`}>Update</Link>
                                        <Link className="btn btn-outline-danger mr-2" onClick={() => deleteProduct(product.slug)}>Delete</Link>
                                    </div>
                                    :
                                    null
                                }
                                <br/>

                <Row>
                    <Col md={5}>
                        <Image key={product.img_thumb} className="img-fluid" src={product.img_thumb} alt={product.title}></Image>

                    </Col>

                    <Col md={6}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>

                                <h1>{product.title}</h1>
                                <br></br>
                                <hr></hr>
                                <br></br>


                                <div class="text-secondary">

                                    <h7> <strong>Description: </strong><br></br>{product.content}</h7>

                                    <br/><br/>

                                    <h6><strong>Brand: </strong>{product.brand}</h6>

                                    <h6><strong>Size: </strong>{product.size}</h6>


                                    <br></br>
                                    <h7> <strong>Author: </strong>{product.author}</h7><br></br>

                                    <h7> <strong>Published: </strong>{product.time_create}</h7><br></br>

                                    <h7 > Updated: {product.time_update}</h7>
                                </div>
                                <div className="text-danger">
                                    <br></br>
                                    <hr></hr>
                                    <h2 className='color-danger'> <strong>$</strong>{product.price}</h2>
                                </div>

                                

                            </ListGroup.Item>


                            <Col md={6}>

                                <Image key={product.images} className="img-fluid mt-3" src={product.images} alt={product.title}></Image>
                            </Col>

                        </ListGroup>

                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ProductScreen
