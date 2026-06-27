let a = [2,5,0,0,7,5,0,1,3,0];

let count = 0;

for(let i = 0; i < a.length; i++){
    if(a[i] === 0){
        count++;
    }
}

console.log("Total number of zeros:", count);