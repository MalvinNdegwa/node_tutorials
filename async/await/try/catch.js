const { readFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data)
            }
        })
    })
}

// getText('./textfiles/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

const start = async () => {
    try{
        const first = await getText('./textfiles/first.txt')
        console.log(first)
    }
    catch (err){
        console.log(err)
    }
}

start()

