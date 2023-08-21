import lodash from "lodash";

const arr = [1,22,1,2,3,4,5,6,8,4]
const uniqueArr = lodash.uniqBy(arr);

console.log(arr);
console.log(uniqueArr);