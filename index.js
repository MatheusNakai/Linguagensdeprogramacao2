require('dotenv').config()
const axios = require('axios')
//operador de desestruturação

const { PROTOCOL, BASE_URL, API_key, LANGU, UNITS, Q } = process.env
const url = `${PROTOCOL}://${BASE_URL}?appid=${API_key}&units=${UNITS}&q=${Q}`

axios.get(url)
.then(res =>{
    console.log(res.data)
    return res.data
})
.then (res => {
    console.log(res.cnt)
    return res
})
.then(res =>{
    return res.list
})
.then(res=>{
    
})