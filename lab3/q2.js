let arr = [1,2,3,4,2,5,3,6,1];

let duplicates = [];

for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])){
        duplicates.push(arr[i]);
    }
}

console.log("Duplicate values are:", duplicates);
