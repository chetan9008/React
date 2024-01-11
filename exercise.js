let form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // let formData = new FormData(e.currentTarget);
    // console.log(formData);
    // console.log(...formData.entries());
    // console.log(...formData.keys());
    // console.log(...formData.values());
    // formData.forEach((value)=>{
    //     console.log(value);
    // })
    // for(let [key,value] of formData)
    // {
    //     console.log(`key is ${key} and value is ${value}`);
    // }

    let formData = new FormData(e.currentTarget);
    let json = Object.fromEntries(formData);
    console.log(json);

})