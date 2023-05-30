

export default class APIService {

  static async InsertProduct(body, token) {
    const resp = await fetch('http://127.0.0.1:8000/products/', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify(body)
    });
    return await resp.json();
                     

      
    
  }


    static async RegisterUser(body) {

      const resp = await fetch('http://127.0.0.1:8000/dj-rest-auth/registration/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
      return await resp.json();

    }
    

    

    static async UpdateProductInfo(body, product_slug, token) {

      const resp = await fetch(`http://127.0.0.1:8000/products/${product_slug}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify(body)
      });
      return await resp.json();               

      }   
      
}


