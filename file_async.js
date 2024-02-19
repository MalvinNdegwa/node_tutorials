const { readFile, writeFile } = require('fs')

// asynchronous file 
// require a callback function

readFile('./Modules/first.txt','utf8',(err, result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./Modules/second.txt','utf8',(err, result)=>{
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './Modules/result_async.txt',
            `Here is the result ${first+second}`,
            (err, result)=>{ 
            if(err){
                console.log(err)
            }
            console.log(result)
        })
    })
} )