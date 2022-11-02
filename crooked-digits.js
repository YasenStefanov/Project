let input = ['1020340567.89'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let input1 = gets().split('');

let sum = 0;

for (let i = 0; i < input1.length; i++) {
    if (isNaN(input1[i])) {
        continue;
    }

    sum += +input1[i];
    if (sum > 9 && i === input1.length - 1) {
        i = -1;
        input1 = sum.toString().split('');
        sum = 0;

    }

}

console.log(sum);