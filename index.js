require('dotenv').config()
console.log(process.env.API_key)
//operador de desestruturação

const { PROTOCOL, BASE_URL, API_key, LANGU, UNITS, Q } = process.env
const url = `${PROTOCOL}://${BASE_URL}?appid=${API_key}&units=${UNITS}&q=${Q}`

console.log(url)
