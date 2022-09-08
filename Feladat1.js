let array = []

for (let i = 0; i < 10; i++){
    array[i] = Math.floor(Math.random() * (100 - 1) + 1)
}

array.sort((a,b) => a -b);

for (let i = 0; i < array.length; i++){
    console.log(array[i])
}