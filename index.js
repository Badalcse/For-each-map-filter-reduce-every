let arr = [2,3,4]

arr.forEach(function(ele, index, arr){
    console.log(ele,index,arr);
})

arr.forEach((ele, index,arr)=>{
    console.log("arrow", index, ele, arr);
})

const hereo = ["naagraj", "badal", "minraj","vikash"]

hereo.forEach((el)=>{
    console.log(el.toUpperCase());
})

arr.map(function(element, index, arr){
    console.log(element, index, arr);
})

hereo.map((h)=>{
    console.log(h.toUpperCase());
})

//filter

console.log(hereo);
const hereowiththraj = hereo.filter((h)=>{
    return h.endsWith('raj')
    console.log(hereowiththraj);
})

const carBill = [20,30,13]

const somBill = carBill.reduce((prev, curr)=>{
    console.log(prev + curr, 0);
})

const gameScore = [200,300,310,250,150]

const gemeScoreCheck = gameScore.every((v)=>typeof v === 'number')

console.log(
    gemeScoreCheck
);

const above200 = gameScore.find((score)=> score > 200)
console.log(above200);