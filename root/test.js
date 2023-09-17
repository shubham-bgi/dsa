	// Javascript code to find
	// duplicates in O(n) time
	let numRay = [ 0, 4, 3, 2, 7, 8, 2, 3, 1, 4 ];
	let arr_size = numRay.length;
	
	
	// count the frequency
	for (let i = 0; i < arr_size; i++) {
		numRay[numRay[i] % arr_size]
			= numRay[numRay[i] % arr_size] + arr_size;
	}
	console.log("The repeating elements are : " + "</br>");
	for (let i = 0; i < arr_size; i++) {
		if (numRay[i] >= arr_size * 2) {
			console.log(i + " " + "</br>");
		}
	}

    let duplicate = numRay[0];
    for (let i = 1; i < numRay.length; i++) {
        duplicate = duplicate ^ numRay[i] ^ i;
    }
