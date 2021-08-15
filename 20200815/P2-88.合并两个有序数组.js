// https://leetcode-cn.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * @description 合并排序
 */
var merge1 = function (nums1, m, nums2, n) {
	for (let i = 0; i !== n; i++) {
		nums1[m + i] = nums2[i]
	}
	nums1.sort((a, b) => a - b)
};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * @description 双指针
 */
var merge2 = function (nums1, m, nums2, n) {
	let p1 = p2 = 0, arr = []
	while (p1 < m || p2 < n) {
		if (p1 === m) {
			arr.push(nums2[p2++])
		} else if (p2 === n) {
			arr.push(nums1[p1++])
		} else if (nums1[p1] < nums2[p2]) {
			arr.push(nums1[p1++])
		} else {
			arr.push(nums2[p2++])
		}
	}
	for (let i = 0; i < arr.length; i++) {
		nums1[i] = arr[i]
	}
};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * @description 逆向双指针
 */
var merge3 = function (nums1, m, nums2, n) {
	let p1 = m - 1, p2 = n - 1;
	let tail = m + n - 1;
	let cur;
	while (p1 >= 0 || p2 >= 0) {
		if (p1 === -1) {
			cur = nums2[p2--];
		} else if (p2 === -1) {
			cur = nums1[p1--];
		} else if (nums1[p1] > nums2[p2]) {
			cur = nums1[p1--];
		} else {
			cur = nums2[p2--];
		}
		nums1[tail--] = cur;
	}
};
