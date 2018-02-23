function FirstTestFourth(MaxNum){
	
	var idx = 1;
	var emptySpae = "";
	var startPoint=1;
	var endPoint=1;
	var endPointGap=3;
	var arr = [];
	var arr2 = [];
	var space = "";

	console.log("Step 1 : Create a set of elements.");

	for(let i = 1; i<=MaxNum; i++){
		arr.push(i);
		if(i == endPoint){
			console.log(arr);			
			arr2.push(arr);
			arr=[];
			startPoint = endPoint;
			endPoint += endPointGap;
			endPointGap += 2;
		}
	}

	console.log("Step 2 : Push all sets into an empty array.")

	console.log(arr2);

	console.log("Step 3 : Make a space as the index of an array.")

	var index = 0;

	for(var i = 0; i<arr2.length-1; i++){
		space = space+"\t";
	}	

	console.log("Step 4 : Change the set to string. Replace comma to space. Then use a recursive function to place a space in front of it and reomve a space by a space")	

	arrInConsole(space, arr2, index);

	function arrInConsole(space, arr2, index){

		if(index<arr2.length){
			str = arr2[index]+"";
			str = str.replace(/,/g,"\t ");
			console.log(space,str);
			index++;
			space = space.replace("\t","");
			return arrInConsole(space, arr2, index);
		}

	}

}

console.log(FirstTestFourth(25));
