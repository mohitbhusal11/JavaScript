let score = "33"

console.log("score: " + score + "type: "+ typeof(score))
console.log("after type conversion")
score = Number(score)
console.log("score: " + score + "type: "+ typeof(score))



let name = "mohit"

console.table([name, typeof(name), Number(name), typeof(Number(name))]) //here Number(name) will print NaN


let condition = true
console.table([condition, typeof(condition), Number(condition), typeof(Number(condition))])

let undef = undefined
console.table([undef, typeof(undef), Number(undef), typeof(Number(undef))])

let nll = null
console.table([nll, typeof(nll), Number(nll), typeof(Number(nll))])