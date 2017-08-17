# Coding exam for LaunchByte/Ambi

Programming Problem

## Problem
Given two filenames, open and read their contents line-by- line, processing each
line in parallel to replace any double-quoted string that appears on a single
line with its reversed value.

Both files should be processed at the same time, operating on as many lines as are feasible without exhausting the stack.

So if a file contains a line like:
Now it the time for &quot;all good men&quot; to come to the aid of their country.
The resulting line should read:
Now it the time for &quot;nem doog lla&quot; to come to the aid of their country.
You must provide your own data files with at least 100 lines where at least half
of the lines include a double-quoted string.

## Solution
Here is my process

### Step 1 
Create data files (save as data1.json and data2.json) and load the files asynchronously using fs.readFile() within a function the loadJsonAsync function

```
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

```

### Step 2

Process my files with the loadAndProcess function, which reseverses any characters inside double quotes and logs the processed content to the console

```
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

```

### Step 3
Run the two files
```
Promise.all([loadAndProcess("./data1.json"),loadAndProcess("./data2.json")]).then(data => {
    // both are done here
 }).catch(err => {
    // error here
 });
 ```




