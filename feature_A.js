let arr = [];
let buttonObjects = [{
    _id: '_1', btnName: 'Stash',
    bgColor: 'red', color: 'white'
}, {
    _id: '_1', btnName: 'Close',
    bgColor: 'red', color: 'white'
}];

for (let obj of buttonObjects) {
    const btn = document.createElement('button');
    btn.setAttribute('_id', obj._id);
    btn.innerText = obj.btnName;
    btn.style.backgroundColor = obj.bgColor;
    btn.style.color = obj.color;
    document.querySelector('.button-group').append(btn);
}

const img = document.createElement('img');
const upload = (event) => {
    console.log(event.target.files[0]);
    img.setAttribute('src',URL.createObjectURL(event.target.files[0]));
    img.style.width = '100px';
    img.style.height = '50px';
    document.querySelector('.button-group').append(img);
}


const ping = (data) => {
    const check = arr.some((ele) => {
        return ele === data;
    });
    if (check) {
        const filtered_arr = arr.filter((ele) => {
            return ele !== data;
        });
        arr = filtered_arr;
    } else {
        arr.push(data);
    }
    console.log(arr);
}
