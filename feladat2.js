let catData = []

for (let i = 0; i < 20; i++){
    let rndAge = Math.floor(Math.random() * (10 - 2) + 2)
    catData.push({
        name: "Cirmos " + i,
        age: rndAge,
    })
}

for (let i = 0; i < catData.length; i++){
    if(catData[i].age == 2){
        console.log("Név: " + catData[i].name)
        console.log("Kor: " + catData[i].age)
    }
}