var twoSum = function (nums, target) {
  const indices = new Map()

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index]

    if (indices.has(complement)) {
      return [indices.get(complement), index]
    }

    indices.set(nums[index], index)
  }
}

console.log(twoSum([11, 15, 2, 7], 9))
