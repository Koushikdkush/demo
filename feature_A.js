let arr = [];
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


// const checkbox = document.getElementById('checkbox');
// checkbox.addEventListener('click', (event, data = 'Laptop') => {
//     const check = arr.some((ele) => {
//         return ele === data;
//     });
//     if (check) {
//         const filtered_arr = arr.filter((ele) => {
//             return ele !== data;
//         });
//         arr = filtered_arr;
//     } else {
//         arr.push(data);
//     }
//     console.log(arr);
// })
