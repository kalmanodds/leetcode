import { assertEquals } from "@std/assert";
import { minSwaps } from "./main.ts";

Deno.test(function swapTest() {
  assertEquals(minSwaps("1010"), 0);
});

Deno.test(function swapTest() {
  assertEquals(minSwaps("1011"), -1);
});

Deno.test(function swapTest() {
  assertEquals(minSwaps("1100"), 1);
});
