const fs = require('fs');

function loadJsonAsync(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

function loadAndProcess(f) {
    return loadJsonAsync(f).then(arr => {
        for (let str of arr.data) {
            const newStr = str.replace(/"[^"]*"/g, function(match) {
                return match.split('').reverse().join('');
            });
            console.log(newStr);
        }
    }).catch(err => {
        console.log(err);
        throw err;
    });
}

Promise.all([loadAndProcess("./data1.json"),loadAndProcess("./data2.json")]).then(data => {
    // both are done here
 }).catch(err => {
    // error here
 });