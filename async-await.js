function hello (nome){
    return new Promise(function(resolve,reject){
        resolve(`Hello ${nome}`)
    })
}


async function hello (nome){
    return `Hello ${nome}`
}


function fatorial(n){
    if(n<0) return Promise.reject("valor nao pode ser negativo")
    let res = 1
    for(let i=2;i<=n;i++)res *=i
    return Promise.resolve(res)
}

function chamadaComThenCatch(){
    fatorial(10)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    fatorial(-10)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}