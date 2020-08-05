import fruits from "./foods"
import {remove, choice} from "./helpers"


let RANDOMFRUIT  = choice(fruits);
console.log(`I’d like one ${RANDOMFRUIT}, please`)
console.log(`Here you go: ${RANDOMFRUIT}`)
console.log(`Delicious! May I have another?`)

let FRUITSLEFT = remove(fruits, RANDOMFRUIT); 
console.log(`I’m sorry, we’re all out. We have ${FRUITSLEFT.length} left.`)