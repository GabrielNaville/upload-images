form.addEventListener('submit', event => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('image', event.target[0].files[0]);
    console.log(formData);
    fetch('http://localhost:1337/api/image', {method: 'post', body: formData})
    .then(res => res.json())
    .then(res => {
        image.src = `http://localhost:1337${res.payload.url}`;
        console.log(res.payload)
    })
    .catch(console.log);
    
});