let arr = [2,  -2, 0 , 4, 1, 9 , -7, -4 , 6, 7];

function tripletSum(arr){
    let flag = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        let s = new Set();
        for(let j = i+1; j< arr.length; j++) {
            sum = -(arr[i]+ arr[j]);
            if(s.has(sum)) {
                console.log('Triplet Found => {', arr[i], arr[j], sum, '}');
            } else {
                s.add(arr[j])
            }
        }
    }
    if(flag === 0) console.log('No triplets found.');
}

tripletSum(arr);


// Javascript program to find triplets in a given
// array whose sum is zero

// function to print triplets with 0 sum
// function findTriplets(arr, n)
// {
// 	var found = false;

// 	for (var i = 0; i < n - 1; i++)
// 	{
// 		// Find all pairs with sum equals to
// 		// "-arr[i]"
// 		var s = new Set();
// 		for (var j = i + 1; j < n; j++)
// 		{
// 			var x = -(arr[i] + arr[j]);
// 			if (s.has(x))
// 			{
// 				console.log( x + " " + arr[i] + " " + arr[j] + "<br>");
// 				found = true;
// 			}
// 			else
// 				s.add(arr[j]);
// 		}
// 	}

// 	if (found == false)
// 		console.log( " No Triplet Found" );
// }

// // Driver code
// // var arr = [0, -1, 2, -3, 1];
// var n = arr.length;
// findTriplets(arr, n);

// This code is contributed by famously.

