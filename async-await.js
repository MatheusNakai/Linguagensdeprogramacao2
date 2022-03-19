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

function callWithAsyncAwait(){
    const f1 = await fatorial(10)
    const f2 = await fatorial(-5)
}