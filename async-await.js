function hello (nome){
    return new Promise(function(resolve,reject){
        resolve(`Hello ${nome}`)
    })
}

hello('Pedro')
.then((res)=>console.log(res))
