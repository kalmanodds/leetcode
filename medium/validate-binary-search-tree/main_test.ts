import { assertEquals } from "@std/assert";
import { isValidBST, TreeNode } from "./main.ts";

Deno.test(function test_1() {
  const validTree: TreeNode = {
    val: 1,
    left: { val: 0 },
    right: { val: 2 },
  };
  assertEquals(isValidBST(validTree), true);
});

Deno.test(function test_2() {
  const invalidTree: TreeNode = {
    val: 1,
    left: { val: 3 },
    right: { val: 2 },
  };
  assertEquals(isValidBST(invalidTree), false);
});

Deno.test(function test_3() {
  const invalidTree: TreeNode = {
    val: 1,
    left: {
      val: 0,
      left: { val: 3 },
    },
    right: { val: 2 },
  };
  assertEquals(isValidBST(invalidTree), false);
});

Deno.test(function test_4() {
  const invalidTree: TreeNode = {
    val: 3,
    left: {
      val: 1,
      left: { val: 0 },
      right: { val: 4 },
    },
    right: { val: 4 },
  };
  assertEquals(isValidBST(invalidTree), false);
});
