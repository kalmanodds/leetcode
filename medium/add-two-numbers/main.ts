export type ListNode = {
  val: number;
  next: ListNode | null;
};

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null && l2 === null) return null;

  let val = (l1?.val ?? 0) + (l2?.val ?? 0);

  // "Carry-the-one" if sum >= 10
  if (val >= 10) {
    val %= 10;
    if (l1?.next?.val !== undefined) l1.next.val++;
    else if (l2?.next?.val !== undefined) l2.next.val++;
    else return { val, next: { val: 1, next: null } };
  }

  return {
    val,
    next: addTwoNumbers(l1?.next ?? null, l2?.next ?? null),
  };
}
