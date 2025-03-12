import { assertEquals } from "@std/assert";
import { addTwoNumbers, ListNode } from "./main.ts";

Deno.test(function test1() {
  const l1: ListNode = {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 3,
        next: null,
      },
    },
  };
  const l2: ListNode = {
    val: 5,
    next: {
      val: 6,
      next: {
        val: 4,
        next: null,
      },
    },
  };
  const expected: ListNode = {
    val: 7,
    next: {
      val: 0,
      next: {
        val: 8,
        next: null,
      },
    },
  };
  assertEquals(addTwoNumbers(l1, l2), expected);
});

Deno.test(function test2() {
  const l1: ListNode = {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: {
                val: 9,
                next: null,
              },
            },
          },
        },
      },
    },
  };
  const l2: ListNode = {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: null,
        },
      },
    },
  };
  const expected: ListNode = {
    val: 8,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 0,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 1,
                  next: null,
                },
              },
            },
          },
        },
      },
    },
  };
  assertEquals(addTwoNumbers(l1, l2), expected);
});
