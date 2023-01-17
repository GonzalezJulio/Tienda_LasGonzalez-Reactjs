const products = [
    {
        id: '1',
        name:'Vaso Unicornio',
        category:'Vasos',
        price: 3600,
        img:'../assest/img/botellas_vasos.JPG',
        stock:25,
        description:'Vaso Unicornio',
    },
    {
        id: '2',
        name:'Set Mate',
        category:'Set Mate',
        price: 2590,
        img: '../assest/img/juego_de_mate.JPG',
        stock:10,
        description:"Set Matero",
    },
    {
        id: '3',
        name:'Lapiceras',
        category:'Varios',
        price: 1800,
        img: '../assest/img/lapiceras.JPG',
        stock:10,
        description:'Lapiceras'
        
    },
    {
        id: '4',
        name:'Neceser',
        category:'Varios',
        price: 2500,
        img: '../assest/img/neceser.JPG',
        stock:10,
        description:'Nesecer de viaje'
        
    },
    {
        id: '5',
        name:'Mate Termico',
        category:'Set Mate',
        price: 4700,
        img: '../assest/img/mate_termico.jpg',
        stock:10,
        description: 'Mate Termico',
        
    },
    {
        id: '6',
        name:'Vaso Tornasolado',
        category:'Vasos',
        price: 4700,
        img: '../assest/img/vaso_compra.jpeg',
        stock:10,
        description: 'Vaso Tornasolado de 900ml',
        
    },
    {
        id: '7',
        name:'Ceramica de Animales',
        category:'Varios',
        price: 2380,
        img: '../assest/img/varios1.JPG',
        stock:10,
        description: 'Ceramica de Animales',
        
    },
    {
        id: '8',
        name:'Juego de Mate',
        category:'Set Mate',
        price: 3300,
        img: '../assest/img/juego_de_mate10.jpeg',
        stock:10,
        description: 'Juego Matero'
        
    },
    {
        id: '9',
        name:'Set Matero',
        category:'Set Matero',
        price: 3300,
        img: '../assest/img/juego_de_mate3.JPG',
        stock:10,
        description: 'Juego de Mate'
        
    },
    {
        id: '10',
        name:'Funda Sumergible',
        category:'Varios',
        price: 980,
        img: '../assest/img/varios7.JPG',
        stock:10,
        description: 'Funda para Celulares'
        
    },
    {
        id: '11',
        name:'Botella Termica',
        category:'Vasos',
        price: 4700,
        img: '../assest/img/botella_compra.jpeg',
        stock:10,
        description: 'Botella Termica con tapa inmantada'
        
    },
    {
        id: '12',
        name:'Juego de Cubierto',
        category:'Varios',
        price: 1250,
        img: '../assest/img/varios4.JPG',
        stock:10,
        description: 'Juego de Cubiertos'
        
    }
]
export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}