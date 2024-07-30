function spiral(param1) {
    let multiple = 0;
    const result = [];
    for (let i = 0; i < param1; i++) {
        const arr = [];
        for (let j = 0; j < param1; j++) {
            arr.push(multiple);
            multiple++;
        }
        result.push(arr);
    }
    let spiralResult = [];
    const total = param1 * param1;

    let left = 0;
    let right = result[0].length;
    let bottom = result.length;
    let top = 1;
    let down = param1 - 1;
    while (spiralResult.length < total) {
        // Kanan
        for (let i = left; i < right; i++) {
            spiralResult.push(result[left][i]);
        }
        // Bawah
        for (let i = top; i < bottom; i++) {
            spiralResult.push(result[i][down]);
        }
        // Kiri
        for (let i = right - 2; i >= left; i--) {
            spiralResult.push(result[down][i]);
        }
        // Atas 
        for (let i = bottom - 2; i > left; i--) {
            spiralResult.push(result[i][left]);
        }
        top++;
        bottom--;
        left++;
        right--;
        down--;
    }
    return spiralResult;
}
console.log(spiral(5));
// console.log(spiral(6));
// kalau pakai variable global pakai while
// console.log(spiral(7));