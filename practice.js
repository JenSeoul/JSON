// solely for JSON practice 

// JSON Object
const obj = {"name": "Jen", "age": 32};

// JSON Array
const arr = [{"name": "Min", "age":52}, {"name": "Kelly", "age": 22}, {"name": "Sunny", "age": 12}];

// JSON Function - JSON.parse(),JSON.stringify()

const jsonStr = '{"name": "hse", "age":12, "weight":60.3, "bool":false, "inNull":null}'
let jsonObj = JSON.parse(jsonStr);
console.log(jsonObj)

const jsonList=document.querySelector('#list')

const li1 = document.createElement('li')
const liAge = document.createTextNode(`${jsonObj.age}`)
li1.appendChild(liAge)
jsonList.appendChild(li1)

const li2 = document.createElement('li')
const liName = document.createTextNode(`${jsonObj.name}`)
li2.appendChild(liName)
jsonList.appendChild(li2)



