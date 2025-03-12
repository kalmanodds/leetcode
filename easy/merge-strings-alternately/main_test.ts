import { assertEquals } from "@std/assert";
import { mergeAlternately } from "./main.ts";

Deno.test(function test1() {
  assertEquals(mergeAlternately("abc", "pqr"), "apbqcr");
});

Deno.test(function test1() {
  assertEquals(mergeAlternately("abc123", "pqr"), "apbqcr123");
});

Deno.test(function test1() {
  assertEquals(mergeAlternately("abc", "pqr123"), "apbqcr123");
});
