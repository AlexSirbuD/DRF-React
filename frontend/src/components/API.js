import axiosInstance from "axios";

const apiSettings = {

    createMyProdutEntry: async (data) => {
        let form_data = new FormData();
        if (data.images)
            form_data.append("images", data.images, data.images.name);
        if (data.img_thumb)
            form_data.append("img_thumb", data.img_thumb, data.img_thumb.name);
        form_data.append("title", data.title);
        form_data.append("brand", data.brand);
        form_data.append("size", data.size);
        form_data.append("price", data.price);
        form_data.append("content", data.content);
        form_data.append("published", true);

        const myNewProduct = await axiosInstance
            .post('http://127.0.0.1:8000/products/', form_data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((res) => {
                return res;
            }).catch((error) => {
                return error.response;
            });

        if (myNewProduct.status === 201) {
            window.location.href = `/myproducts/${myNewProduct.data.slug}`;
        }
        return myNewProduct;
    },
};

export default apiSettings;