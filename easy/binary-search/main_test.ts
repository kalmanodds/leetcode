import { assertEquals } from "@std/assert";
import { search } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(search([], 5), -1);
});

Deno.test(function addTest() {
  assertEquals(search([5], 5), 0);
});

Deno.test(function addTest() {
  assertEquals(search([2, 5], 2), 0);
});

Deno.test(function addTest() {
  assertEquals(search([-1, 0, 5], 5), 2);
});

Deno.test(function addTest() {
  assertEquals(search([1, 2, 3], 2), 1);
});

Deno.test(function addTest() {
  assertEquals(search([1, 2, 3, 4, 5], 4), 3);
});

Deno.test(function addTest() {
  assertEquals(search([1, 2, 3, 4, 5, 6, 7], 2), 1);
});

Deno.test(function addTest() {
  assertEquals(search([-1, 0, 3, 5, 9, 12], 2), -1);
});
