let arr = [1, 3, 5, 4, 5, 7];
let arr2 = [];
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2]) {
    arr2.push(1);
  } else if (arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2]) {
    arr2.push(1);
  } else {
    arr2.push(0);
  }
  if (arr.length - i == 3) {
    break;
  }
}
console.log(arr2);

let a = document.getElementById("id");
a.innerText = `Result: [ ${arr2} ]`;
