// https://leetcode-cn.com/problems/contains-duplicate/


/**
 * @param {number[]} nums
 * @return {boolean}
 * @description 排序
 */
var containsDuplicate1 = function (nums) {
	if (nums.length < 2) return false
	nums = nums.sort(((a, b) => a - b))
	const lastIndex = nums.length - 1
	for (let i = lastIndex; i > 0; i--) {
		if (nums[i] === nums[i - 1]) {
			return true
		}
	}
	return false
};



/**
 * @param {number[]} nums
 * @return {boolean}
 * @description 哈希表
 */
var containsDuplicate2 = function (nums) {
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