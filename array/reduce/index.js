let arr = [1,2,3];
let val = 100
/*let res = arr.reduce((acc,curr,idx,arr) => {
    return acc+curr;
},val)
console.log(res)*/
// 1.acc
// 2.初始索引
// 3.遍历array
Array.prototype.myReduce = function (fn,initVal) {
    if(typeof fn !== 'function'){
        throw new Error('参数错误')
    }
    let acc = initVal ? initVal : this[0];
    let startIdx = initVal ? 0 : 1;
    for(let i = startIdx; i < this.length; i++){
        let curr = this[i];
        acc = fn(acc,curr,i,this)
    }
    return acc;
}
let res = arr.myReduce((acc,curr,idx,arr) => {
    return acc+curr;
},val)
console.log(res)




