

function FirstTestSecond(String, x){

	var Expression = String;

	console.log('Step 1:', Expression);

	Expression = Expression.replace(/x/g,x);

	console.log('Step 2:', Expression);

	return eval(Expression);
}

console.log('Step 3:', FirstTestSecond("y=20+((10*x)/(100-x))",5));