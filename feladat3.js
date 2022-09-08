
delay()
let count = 0
console.log(count);
async function delay() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    count++
    console.log(count);
    delay()
  }