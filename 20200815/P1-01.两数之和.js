// https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const hashTable = {}
	for (let i = 0; i < nums.length; i++) {
		// 判断 hashTable 的 key 的 value 是不是 undefined，不是就是说找到了下标
		if (hashTable[target - nums[i]] !== undefined) {
			return [hashTable[target - nums[i]], i]
		} else {
			// 否则就存进 hashTable
			hashTable[nums[i]] = i
		}
	}
};