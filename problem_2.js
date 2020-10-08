function flattenTest(flattenArray) {
  const arrayStack = [...flattenArray];
  //define empty array to store output
  const response = [];
  //while loop to flatten the array no matter the depth
  while(arrayStack.length) {
    // pop value from the arrayStack
    const nextValue = arrayStack.pop();
    if(Array.isArray(nextValue)) {
      // push back array items, won't modify the original input
      arrayStack.push(...nextValue);
    } else {
      response.push(nextValue);
    }
  }
  // reverse the order to restore flattenArray order
  return response.reverse();
}
const testArray = [1,2,[3,4,[5,6],7,[8,9]]];
const flattenedArray = flattenTest(testArray);
console.log(flattenedArray)
