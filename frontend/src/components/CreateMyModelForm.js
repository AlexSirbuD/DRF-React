import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import API from "./API";

const CreateMyModel = () => {

    const [data, setData] = useState({
        title: "",
        brand: "",
        size: "",
        price: "",
        content: "",
        images: "",
        img_thumb: "",
    });
    const [errors, setErrors] = useState({
        title: "",
        brand: "",
        size: "",
        price: "",
        content: "",
        images: "",
        img_thumb: "",
    });


    const handleChange = ({ currentTarget: input }) => {
        let newData = { ...data };
        newData[input.name] = input.value;
        setData(newData);
    };

    const handleImageChange = (e) => {
        let newData = { ...data };
        newData["images"] = e.target.files[0];
        setData(newData);
    };

    const handleImageThumbChange = (e) => {
        let newData = { ...data };
        newData["img_thumb"] = e.target.files[0];
        setData(newData);
    };

    const doSubmit = async (e) => {
        e.preventDefault();
        const response = await API.createMyProdutEntry(data);
        if (response.status === 400) {
            setErrors(response.data);
        }
    };

    

    return (

        <Form>
            <Row>
                <Form.Group className="mb-3" controlId="titleInput">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={data.title}
                        isInvalid={errors.title}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        maxLength={80}
                    />
                    {errors.title && (
                        <Form.Text className="alert-danger" tooltip>
                            {errors.title}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="titleInput">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                        type="text"
                        name="brand"
                        value={data.brand}
                        isInvalid={errors.brand}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        maxLength={80}
                    />
                    {errors.brand && (
                        <Form.Text className="alert-danger" tooltip>
                            {errors.brand}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="titleInput">
                    <Form.Label>Size</Form.Label>
                    <Form.Control
                        type="text"
                        name="size"
                        value={data.size}
                        isInvalid={errors.size}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        maxLength={80}
                    />
                    {errors.size && (
                        <Form.Text className="alert-danger" tooltip>
                            {errors.size}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="titleInput">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={data.price}
                        isInvalid={errors.price}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        maxLength={80}
                    />
                    {errors.price && (
                        <Form.Text className="alert-danger" tooltip>
                            {errors.price}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="titleInput">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        type="text"
                        name="content"
                        value={data.content}
                        isInvalid={errors.content}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        maxLength={80}
                    />
                    {errors.content && (
                        <Form.Text className="alert-danger" tooltip>
                            {errors.content}
                        </Form.Text>
                    )}
                </Form.Group>
            </Row>
            <Row>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>My Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="images"
                        accept="image/jpeg,image/png,image/gif"
                        onChange={(e) => {
                            handleImageChange(e);
                        }}
                    />
                    {errors.images && (
                        <Form.Text className="alert-danger" tooltip>
                            {errors.images}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>My Images Thumbnail</Form.Label>
                    <Form.Control
                        type="file"
                        name="img_thumb"
                        accept="image/jpeg,image/png,image/gif"
                        onChange={(e) => {
                            handleImageThumbChange(e);
                        }}
                    />
                    {errors.img_thumb && (
                        <Form.Text className="alert-danger" tooltip>
                            {errors.img_thumb}
                        </Form.Text>
                    )}
                </Form.Group>
            </Row>
            
            <Button
                variant="primary"
                type="submit"
                onClick={(e) => doSubmit(e)}>Add Product
            </Button>
        </Form>
    );
};

export default CreateMyModel;