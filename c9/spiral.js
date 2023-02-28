function spiral(param1) {
    let multiple = 0;
    const result = [];
    for (let i = 0; i < param1; i++) {
        const arr = [];
        for (let j = 0; j < param1; j++) {
            arr.push(multiple);
            multiple++;
            // console.log(multiple)
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
console.log(spiral(6));
console.log(spiral(7));

// var spiralOrder = function (matrix) {
//     const result = [];
//     let left = 0;
//     let top = 0;
//     let right = matrix[0].length - 1;
//     let bottom = matrix.length - 1;
//     let direction = 'right';
//     while (left <= right && top <= bottom) {
//         if (direction === 'right') {
//             for (let i = left; i <= right; i += 1) {
//                 result.push(matrix[top][i]);
//             }
//             top += 1;
//             direction = 'down';
//         } else if (direction === 'down') {
//             for (let i = top; i <= bottom; i += 1) {
//                 result.push(matrix[i][right]);
//             }
//             right -= 1;
//             direction = 'left';
//         } else if (direction === 'left') {
//             for (let i = right; i >= left; i -= 1) {
//                 result.push(matrix[bottom][i]);
//             }
//             bottom -= 1;
//             direction = 'up';
//         } else if (direction === 'up') {
//             for (let i = bottom; i >= top; i -= 1) {
//                 result.push(matrix[i][left]);
//             }
//             left += 1;
//             direction = 'right'
//         }
//     }
//     return result
// }
// console.log(spiralOrder([[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24]]));