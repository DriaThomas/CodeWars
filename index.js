

//kyu 8 This code does not execute properly. Try to figure out why.
function multiply(a, b) {
    return a * b
}
//
solve(["abode", "ABc", "xyzD"]) = [4, 3, 1]
function solve(arr) {
    let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let positionArr = [];

    for (let i = 0; i < arr.length; i++) {
        let incr = 0;
        for (let j = 0; j < arr[i].length; j++) {

            for (let n = 0; n < alphabets.length; n++) {
                if (arr[i][j].toUpperCase() === alphabets[j]) {
                    incr++;
                    break;
                }

            }
        }
        positionArr.push(incr);
    }
    console.log(arr[0][1].toUpperCase())
    return positionArr;


};



