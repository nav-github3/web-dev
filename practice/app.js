const res = require("express/lib/response");

let arr = [22, 24, 56, 92, 100];

for(let i = 0; i<arr.length; i++){
	if(arr[i] % 2 == 0){
		console.log(arr[i]);
	}
}



let name = ["navneet", "harkirat", "riya"];
let gender = ["male", "male", "female"];

for(let i = 0; i<name.length; i++){
	if(gender[i] == "female"){
		console.log(name[i]);
	}
	
}

const users = [{
	firstName : "navneet",
	lastname : "lonare",
	gender :"male"
},
{
	firstName : "harkirat",
	lastname : "singh",
	gender : "male"
}, {
	firstName : "riya",
	lastname : "shrama",
	gender : "female"
}
];

for(let i = 0; i<users.length; i++){
	if(users[i]["gender"] == "male"){
		console.log(users[i]["firstName"]);
	}
}





const allUsers = [{
	firstName : "Navneet",
	lastName : "Lonare",
	gender : "male"
},{
	firstName : "Harkirat",
	lastName : "Singh",
	gender : "male"
},{
	firstName  : "Riya ",
	lastName : "Lay",
	gender : "female"
}];

for(let i = 0; i<allUsers.length; i++){
	if(allUsers[i]["gender"] == "female"){
		console.log(allUsers[i]["firstName"]);
	}
}	










function sunAll(num1, num2, fuToCall){
	let result =  num1+num2;
	fuToCall(result);
}
function displayResult(data){
	console.log("Result of the sum is :  "+data);
}
sunAll(1, 2, displayResult);







function calculalteArithmatic(a, b, fnToCall){
	
	return fnToCall(a,b);

}
function sum(a,b){
	return a+b;
}
function sub(a,b){
	return a-b;
}
let val = calculalteArithmatic(3,5,sum);
let val2 = calculalteArithmatic(3,1, sub);
console.log(val2);
console.log(val);




function greet(){
	console.log("Namaste Bharat");
}
// setTimeout(greet, 3* 1000);
// setInterval(greet , 2 *1000);




function counter(){
	let count = 0;
	for(let i = 30; i>0; i--){
		count++;
	}

	return count;
}
let val1 = counter();
console.log(val1);




function getLength(str){
	console.log("Orignal String : "+str);
	console.log("Length : "+str.length);
}
getLength("Namste Bharat");


function findIndexOf(str, target){
	console.log("Orignal String : "+str);
	console.log("Index : "+str.lastIndexOf(target))
}

findIndexOf("Namaste Bharat Bharat", "Bharat");

function getSlice(str, start, end) {
	console.log("Original String:", str);
	console.log("After slice:", str.slice(start, end));
  }
  getSlice("Navneet Lonare", 0, 7);


function getReplace(str, target, replacement ){
		console.log("Orignal String  : "+str);
		console.log("After replacement : "+str.replace(target, replacement));
}
getReplace("Namaste Bharat", "Bharat", "JavaScript");


function trimString(str) {
	console.log("Original String:", str);
	console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");






//   function promisfyMyOwnTimeou(duration){
// 	const p = new Promise(function(resolve){
// 		setTimeout(function(){
// 			resolve();
// 		},duration);
// 	});
// 	return p ;
//   }

//   const ans = promisfyMyOwnTimeou(2000);
//   ans.then(function(){
// 	console.log("Time out is done");
//   });
;

function promisfyMyOwnTimeout(duration){
	const p = new Promise(function(reslove){
		setTimeout(function(){
			reslove();
		}, duration);
	})
	return p;
}
const ans = promisfyMyOwnTimeout(2000);
ans.then(function(){
	console.log("Time out is done");
});


//Map functions 
let input = [1, 2, 3, 4, 5];

console.log(input.map(function(i){
	return i*2;
}))


///filter function 
// function filterinLogic(n){
// 	if(n % 2 == 0){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }

// const ans1= input.filter(filterinLogic);
// console.log(ans1);


console.log(input.filter(function(n){
	if(n % 2 == 0){
		return true;
	}
	else {
		return false;
	}
}))

let nav = ["harkirat", "navneet" , "rajat"];
console.log(nav.filter(function(n){
	if(n.startsWith("n")){
		return true;
	}
	else {
		return false;
	}
}))