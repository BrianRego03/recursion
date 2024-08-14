function fibs(num){
    let arr=[];
    for (let i=1;i<=num;i++){
        if(i==1){
            arr[arr.length]=0;
        }
        else if(i==2){
            arr[arr.length]=1;
        }
        else {
            arr[i-1]=arr[i-2]+arr[i-3]
        }
    }
    console.log(arr);
    // return arr;
}

fibs(8);


    function fibsRec(numb){
        if(numb==1){
            return [0];
        }
        if (numb==2){
            return [0,1];
        }
        let fibs=fibsRec(numb-1);
        fibs.push(fibs[fibs.length-1]+fibs[fibs.length-2]);
        return fibs
        
    }
    


console.log(fibsRec(8));