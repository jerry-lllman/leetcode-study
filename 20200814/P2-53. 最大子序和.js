// https://leetcode-cn.com/problems/maximum-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心
 var maxSubArray = function(nums) {
	// 当前值， 当前和， 之前和， 最大和
	// 当前指针所指元素之前的和小于0，则丢弃当前元素之前的数列
	 let pre = 0, maxSum = nums[0]
	 for (let i = 0; i < nums.length; i++) {
			 pre = Math.max(pre + nums[i], nums[i])
			 maxSum = Math.max(pre, maxSum)
	 }
	 return maxSum
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 // 动态规划
 var maxSubArray = function(nums) {
	for (let i = 1; i < nums.length; i++) {
			if (nums[i - 1] > 0) { // 如果前一个值大于0，则将前一个值加在当前值上面
					nums[i] += nums[i - 1]
			}
	}
	return Math.max(...nums) // 最后取最大的一个值
};