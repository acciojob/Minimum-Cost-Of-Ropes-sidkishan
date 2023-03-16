function calculateMinCost() {
  var inputData = document.querySelector("input").value;
	var inputArr = inputData.split(",");
	for(var i = 0; i < inputArr.length; i++){
		inputArr[i] = Number(inputArr[i]);
	}
	var cost = 0;
	//inputArr.sort(function(a,b) {return a-b});
	while(inputArr.length > 1){
		var nr = inputArr[0] + inputArr[1];
		cost += nr;
		inputArr.splice(0,2);
		inputArr.push(nr);
		inputArr.sort(function(a,b) {return a-b; });
	}
    document.querySelector("#result").textContent = cost;
}
