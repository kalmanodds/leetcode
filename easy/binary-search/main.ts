export function search(nums: number[], target: number): number {
  try {
    return (function search(nums: number[], target: number): number {
      if (nums.length === 0) throw -1;

      const index = Math.floor(nums.length / 2);

      if (target < nums[index]) {
        const bottomNums = nums.slice(0, index);
        return search(bottomNums, target);
      }

      if (target > nums[index]) {
        const topNums = nums.slice(index + 1, nums.length);
        return index + 1 + search(topNums, target);
      }

      return index;
    })(nums, target);
  } catch {
    return -1;
  }
}
