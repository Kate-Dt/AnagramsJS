const fs = require('fs');

let sortLetters = word => {
    return word.split('').sort().join('');
};

let countAnagrams = filename =>{
    let contents = fs.readFileSync(filename, 'UTF-8').toString().split('\n');
    let associations = {};
    for (let i = 0; i < contents.length; i++) {
        let findForWord = contents[i];
        if (!(findForWord in associations)) {
            associations[findForWord] = [];
        }
        for (let j = i + 1; j < contents.length - 1; j++) {
            let currSorted = sortLetters(findForWord);
            if (currSorted.localeCompare(sortLetters(contents[j])) === 0) {
                let newWord = contents[j];
                associations[findForWord].push(newWord);
                if (!(newWord in associations)){
                    associations[newWord] = [];
                }
                associations[newWord].push(findForWord);
            }
        }
    }
        for (let key in associations){
            if (associations.hasOwnProperty(key)){
                if (associations[key].length > 1){
                    console.log(key, associations[key])
                }
        }
    }
};

countAnagrams('newanagrams.txt');

