/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let output = []

  for (let i = 0; i < nums.length; i++) {
    const ans = target - nums[i]

    for (let j = i + 1; j < nums.length; j++) {
      if (ans === nums[j]) output.push(i, j)
    }
  }
  return output
}

console.log(twoSum([11, 15, 2, 7], 9))