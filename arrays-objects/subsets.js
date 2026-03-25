// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 // 2^nums.length

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

function subsets(nums) {
  let result = [[]]

  for(const num of nums) {
    let size = result.length
    for(let i = 0; i < size; i++) {
      result.push([...result[i], num])
    }
  }

  return result
}

console.log(subsets([1,2,3]))