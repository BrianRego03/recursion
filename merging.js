function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    
    let hlent=Math.floor(arr.length/2);
    let leftarr=arr.slice(0,hlent);
    let rightarr=arr.slice(hlent);
    return merge(mergeSort(leftarr),mergeSort(rightarr));

}

function merge(lefta,righta){
    let temparr=[];
    while((lefta.length)&&(righta.length)){
        if(lefta[0]>righta[0]){
            temparr.push(righta.shift());

        }
        else{temparr.push(lefta.shift());}
    }
    return [...temparr, ...righta, ...lefta]

}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));