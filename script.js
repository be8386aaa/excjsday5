EX1
function mergearr() {
    var a = [1, 2, 3];
    var b = ['a', 'b', 'c'];
    let c = a.concat(b);
    return c;
}
console.log(mergearr());
EX2
function checknumber() {
    var num = [6, 2, 8];
    num.every((nums) => nums % 2 == 0)
        ? console.log('true')
        : console.log('false');
}
checknumber();
EX3
function checknumber() {
    var num = [2, 3, 5];
    num.some((nums) => nums % 2 == 0)
        ? console.log('true')
        : console.log('false');
}
checknumber();
EX4
function checknumber() {
    var num = [-1, -2, 3, 4, 5];
    console.log(num.filter((nums) => nums > 0));
}
checknumber();



