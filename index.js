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
// .then(res=>{
//     for (let previsao of res){
//         console.log(`
//         ${new Date (+previsao.dt*1000).toLocaleString()},
//         Min:${previsao.main.tem_min},
//         Max:${previsao.main.tem_max},
//         Umidade:${previsao.main.humidity}%,
//         ${previsao.weather[0].description}
//         `)
//     }
// })
.then(res=>{
    cont = 0
    for (let previsao of res){
        if(previsao.main.feels_like>30){
            cont++
        }
    }
    console.log(`n>30 \n ${cont}`)
})