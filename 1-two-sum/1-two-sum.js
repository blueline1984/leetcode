/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = {};
    let answer;
    
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let complementPairs = target - value;
        
        map[complementPairs] !== undefined ? answer = [map[complementPairs], i] : map[value] = i;
    }
    
    return answer;
};