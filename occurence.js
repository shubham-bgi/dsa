
// Javascript program to count occurrences
// of an element

/* if x is present in arr[] then returns
the count of occurrences of x,
otherwise returns -1. */
function count(arr, x, n)
{
	
	// Index of first occurrence of x in arr[0..n-1]
	let i;
	
	// Index of last occurrence of x in arr[0..n-1]
	let j;
	
	// Get the index of first occurrence of x
	i = first(arr, 0, n - 1, x, n);
	
	// If x doesn't exist in arr[] then return -1
	if (i == -1)
		return i;
	
	// Else get the index of last occurrence of x.
	// Note that we are only looking in the
	// subarray after first occurrence
	j = last(arr, i, n - 1, x, n);	
	
	// return count
	return j - i + 1;
}
	
// if x is present in arr[] then returns the
// index of FIRST occurrence of x in arr[0..n-1],
// otherwise returns -1
function first(arr, low, high, x, n)
{
	if (high >= low)
	{
		
		// low + (high - low)/2;
		let mid = (low + high) / 2;
		
		if ((mid == 0 || x > arr[mid - 1]) &&
		arr[mid] == x)
			return mid;
		else if (x > arr[mid])
			return first(arr, (mid + 1), high, x, n);
		else
			return first(arr, low, (mid - 1), x, n);
	}
	return -1;
}

// If x is present in arr[] then returns the
// index of LAST occurrence of x in arr[0..n-1],
// otherwise returns -1
function last(arr, low, high, x, n)
{
	if (high >= low)
	{
		/*low + (high - low)/2;*/	
		let mid = Math.floor((low + high) / 2);
		if ((mid == n - 1 || x < arr[mid + 1]) &&
		arr[mid] == x)
			return mid;
		else if (x < arr[mid])
			return last(arr, low, (mid - 1), x, n);
		else
			return last(arr, (mid + 1), high, x, n);	
	}
	return -1;
}

// Driver code
let arr = [ 1, 2, 2, 3, 3, 3, 3 ];

// Element to be counted in arr[]
let x = 3;
let n = arr.length;
let c = count(arr, x, n);

console.log(x + " occurs " + c + " times");

// This code is contributed by target_2

