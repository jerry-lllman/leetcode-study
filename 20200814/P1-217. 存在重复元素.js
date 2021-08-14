// https://leetcode-cn.com/problems/contains-duplicate/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate1 = function(nums) {
	if (nums.length < 2) return false
	nums = nums.sort(((a, b) => a - b))
	const length = nums.length - 1
	for (let i = length; i > 0; i--){
			if (nums[i] === nums[i - 1]) {
					return true
			}
	}
	return false
};



/**
 * @param {number[]} nums
 * @return {boolean}
 */
 // 哈希表
 var containsDuplicate2 = function(nums) {
	let length = nums.length
	if (length < 2) return false
	const map = new Set()
	for (let i = 0; i < length; i++) {
			if (map.has(nums[i])) {
					return true
			}
			map.add(nums[i])
	}
	return false
};