
	function removeDuplicates(arr, n) {
		let i = 0;
		while (i < n) {
			let cur = arr[i];
			let cnt = 0;
			while (i < n && cur == arr[i]) {
				cnt++;
				i++;
			}
			if (cnt == 1) {
				console.log(cur + " ")
			}
		}
	}
	let arr = [1, 3, 3, 5, 5, 6, 10]
	let N = 7;
	removeDuplicates(arr, N);