
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import APIService from './APIService';





function AddProduct() {

    const [images, setImages] = useState('')
    const [img_thumb, setImg_thumb] = useState('')
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [size, setSize] = useState('')
    const [price, setPrice] = useState('')
    const [content, setContent] = useState('')    
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const token = localStorage.getItem('mytoken')

    const addProduct = () => {
        APIService.InsertProduct({ title, brand, size, price, content, img_thumb, images}, token)
            .then(result => {
                console.log(result)
            })
    }

    const handlesubmit = () => {

        let form_data = new FormData();
        form_data.append('title', title)
        form_data.append('brand', brand)
        form_data.append('price', price)
        form_data.append('size', size)
        form_data.append('price', price)
        form_data.append('content', content)        
        form_data.append('images', images)
        if (img_thumb !== null) {
            form_data.append('img_thumb', img_thumb)
            let url = 'http://127.0.0.1:8000/new-product/';
            axios.post(url, form_data, {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': `Token ${token}`
                }
            }).then(res => {
                console.log(res.data);


            })
                .catch(err => console.log(err))
            navigate('/')

        }
    }



    return (
        <div>
            <form onSubmit={handlesubmit} >

                {error ?
                    <div className="alert alert-warning alert-dismissible" role="alert">
                        <p>{error}</p>
                    </div>

                    :

                    null
                }


                <div className="container mt-4" style={{ 'width': '700px' }}>
                    <h2 className='text-center'>Add product</h2>

                    <div className='form-group'><label>Title</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div><br />

                    <div className='form-group'><label>Brand</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Brand'
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </div><br />

                    <div className='form-group'><label>Size</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter Size'
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        />
                    </div><br />

                    <div className='form-group'><label>Price</label>
                        <input
                            type='number'
                            className='form-control'
                            placeholder='Enter Price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div><br />


                    <div className='form-group'><label>Description</label>
                        <textarea
                            type='text'
                            rows='5'
                            className='form-control'
                            placeholder='Enter Description'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div><br />

                    <div className='form-group'><label>Upload Images</label>

                        <input
                            type='file'
                            className='form-control'
                            accept="image/jpeg,image/png,image/gif"


                            onChange={(e) => setImages(e.target.files[0])}
                        />
                    </div>
                    <br />

                    <div className='form-group'><label>Upload Thumbnail</label>

                        <input
                            type='file'
                            className='form-control'
                            accept="image/jpeg,image/png,image/gif"
                            onChange={(e) => setImg_thumb(e.target.files[0])}
                        />

                        <br />
                        
                    </div>
                    <br />
                    <button className="btn btn-success" type="submit">Add Product</button>


                </div>
            </form>

        </div>










    );


}

export default AddProduct;
