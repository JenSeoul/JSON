// solely for JSON practice 

// // JSON Object
// const obj = {"name": "Jen", "age": 32};

// // JSON Array
// const arr = [{"name": "Min", "age":52}, {"name": "Kelly", "age": 22}, {"name": "Sunny", "age": 12}];

// JSON Function - JSON.parse(),JSON.stringify()

// const jsonStr = '{"name": "hse", "age":12, "weight":60.3, "bool":false, "inNull":null}'
// let jsonObj = JSON.parse(jsonStr);
// console.log(jsonObj)

// const jsonList=document.querySelector('#list')

// const li1 = document.createElement('li')
// const liAge = document.createTextNode(`${jsonObj.age}`)
// li1.appendChild(liAge)
// jsonList.appendChild(li1)

// const li2 = document.createElement('li')
// const liName = document.createTextNode(`${jsonObj.name}`)
// li2.appendChild(liName)
// jsonList.appendChild(li2)

// document.write(jsonObj['name']+'<br>')
// document.write(jsonObj['age']+'<br>')
// document.write(jsonObj['weight']+'<br>')
// document.write(jsonObj['name']+'<br>')
// document.write(jsonObj['name']+'<br>')

// const jsonStr2 = '{"info":{"name":"sue", "age":22}, "phone":"38271811822"}'

// const jsonObj2 = JSON.parse(jsonStr2)

// document.write(jsonObj2.info.name+'<br>')
// document.write(jsonObj2.info.age+'<br>')
// document.write(jsonObj2.phone+'<br>')
// document.write(jsonObj2['phone']+'<br>')
// document.write(jsonObj2['info']['name']+'<br>')

const jsonStr ='{"pokemon":[{"name":"pikachu", "height":132},{"name":"lucky", "height":122}]}'
const pokeName = JSON.parse(jsonStr)
// for(i =0; i<pokeName.pokemon.length; i++){
//     console.log(pokeName.pokemon[i].name)
// }
pokeName.pokemon.forEach((pokemons)=>console.log(pokemons.name)
)