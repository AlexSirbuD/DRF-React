import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';


function ProductUpdate(props) {


    const { slug } = useParams();

    const [images, setImages] = useState('')
    const [img_thumb, setImg_thumb] = useState('')
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [size, setSize] = useState('')
    const [price, setPrice] = useState('')
    const [content, setContent] = useState('')
    

    let navigate = useNavigate();


    useEffect(() => {
        loadProducts();
    }, [])


    let loadProducts = async () => {


        const { data } = await axios.get(`http://127.0.0.1:8000/products/${slug}/`);
        console.log(data);

        setImages(data.images);
        setImg_thumb(data.img_thumb);
        setTitle(data.title);
        setBrand(data.brand);
        setSize(data.size);
        setPrice(data.price);
        setContent(data.content);
        
    }




    const UpdateProductInfo = async () => {
        let formField = new FormData()

        const token = localStorage.getItem('mytoken')

        formField.append('title', title)
        formField.append('brand', brand)
        formField.append('price', price)
        formField.append('size', size)
        formField.append('price', price)
        formField.append('content', content)        
        formField.append('images', images)
        formField.append('img_thumb', img_thumb)


        let url = `http://127.0.0.1:8000/products/${slug}/`;
        axios.put(url, formField, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Token ${token}`
            }
        }).then(res => {
            console.log(res.data);

        }).catch(err => console.log(err))
        navigate('/', { replace: true });
    }

    


    return (
        <div className="container mt-4" style={{ 'width': '700px' }}>

            <form onSubmit={UpdateProductInfo} >
                <h2 className='text-center'>Update product</h2>

                <div className='form-group'><label>Title</label>
                    <input
                        type='text'
                        className='form-control'

                        value={title || ''}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div><br />

                <div className='form-group'><label>Brand</label>
                    <input
                        type='text'
                        className='form-control'

                        value={brand || ''}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </div><br />

                <div className='form-group'><label>Size</label>
                    <input
                        type='text'
                        className='form-control'

                        value={size || ''}
                        onChange={(e) => setSize(e.target.value)}
                    />
                </div><br />

                <div className='form-group'><label>Price</label>
                    <input
                        type='number'
                        className='form-control'

                        value={price || ''}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div><br />


                <div className='form-group'><label>Description</label>
                    <textarea
                        type='text'
                        rows='5'
                        className='form-control'

                        value={content || ''}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div><br />

                <div className='form-group'><label>Upload Images</label><br />
                    <img className='my-3' src={images} width={50} alt='images' />
                    <input
                        type='file'
                        className='form-control'


                        onChange={(e) => setImages(e.target.files[0])}
                    />
                </div>
                <br />

                <div className='form-group'><label>Upload Thumbnail</label><br />
                    <img className='my-3' src={img_thumb} width={50} alt='images thumb' />
                    <input
                        type='file'
                        className='form-control'
                        onChange={(e) => setImg_thumb(e.target.files[0])}
                    />
                </div>
                <br />

                

                <button className='btn btn-success' type="submit" onClick={props.reload} >Update</button>


            </form>
        </div>
    )
}

export default ProductUpdate
