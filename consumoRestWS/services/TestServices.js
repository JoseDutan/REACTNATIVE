export const getAllPostsService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => { return response.json() }).then((json) => { console.log(json) });
}

export const createPostService = (post, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch('https://jsonplaceholder.typicode.com/posts', config).then((response) => { return response.json() }).then((json) => { console.log(json); fnExito(); });
}

export const updatPostService = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: "mensaje final",
            body: "hasta la vista baby",
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch('https://jsonplaceholder.typicode.com/posts/1', config).then((response) => { return response.json() }).then((json) => { console.log(json) });
}

export const getByUserIdService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then((response) => { return response.json() }).then((json) => { console.log(json) });
}

export const getPokemonService = () => {
    fetch('https://pokeapi.co/api/v2/berry').then((response) => { return response.json() }).then((json) => { console.log(json) });
}

export const postProductService = () => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title: 'New Product',
            price: 29.99,
            description: 'A great new product',
            image: 'https://i.pravatar.cc',
            category: 'electronics'
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch('https://fakestoreapi.com/products', config).then((response) => { return response.json() }).then((json) => { console.log(json) });
}

export const putProductService = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            title: 'Updated Product',
            price: 49.99,
            description: 'An updated great product',
            image: 'https://i.pravatar.cc',
            category: 'electronics'
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch('https://fakestoreapi.com/products/1', config).then((response) => response.json()).then((json) => { console.log(json) })


}
export const getDocumentTypes = () => {
    fetch('http://192.168.3.36:8080/inventarios-1.0.0/rest/tiposdocumento/recuperar').then((response) => { return response.json() }).then((json) => { console.log(json) });
}
export const createDocumentType = (post, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            codigo: post.title,
            descripcion: post.body,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };
    fetch('http://192.168.3.36:8080/inventarios-1.0.0/rest/tiposdocumento/agregar', config).then((response) => {
        if (response.body == null) {
            return { "message": "completado" }
        } else {
            return response.json()
        }
    }).then((json) => { console.log(json); fnExito(); });
}