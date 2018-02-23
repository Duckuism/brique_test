// If we list all the natural numbers below 10 
// that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// 1000아래 3과5의 배수를 모두 찾아 더하는 문제

// step1. 1000까지의 숫자를 다 반복

function Problem1(number){
	var result = 0;
	var pastPublicMultiple = 0;

	for(var i = 0; i<=number; i++){ // 1000까지 숫자를 돌다가
		if(i%15==0){ // 3과 5의 공배수가 나오면 	
			for(var j = pastPublicMultiple; j<i; j++){ //지난 공배수부터 현재 공배수 전까지 반복
				if(j%3 == 0 || j%5 == 0){
					// console.log(j);
					result += j ;
				}	
			}
			pastPublicMultiple = i; //현재 공배수를 지난 공배수로 저장
		}
	}

	return	result;
}

console.log(Problem1(30));