

// const getImagePromesa = () => {
//     return new Promise((resolve, reject) => {
//         resolve('https://jhavajhsvbfdjhsavhjd.com')
//     })
// }
// const getImagePromesa = () => {
//     return new Promise(resolve =>
//         resolve('https://jhavajhsvbfdjhsavhjd.com'))

// }
// const getImagePromesa = () =>   
// new Promise(resolve => resolve('https://jhavajhsvbfdjhsavhjd.com'))

// const getImage = async() => {
//     return 'https://jhavajhsvbfdjhsavhjd.com';
// }


const getImage = async () => {

    try {
        const apiKey = 'dOv0LM1e9OjbMAvId5PDvdTySsgzD3ri';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        // manejo del error
        console.error(error)
    }

}


getImage().then(console.log)
// console.log(getImage())

// getImagePromesa().then(console.log)

