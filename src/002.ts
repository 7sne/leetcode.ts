class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// current [7, ]

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const merged = new ListNode();
  let overflow = 0;
  let current = merged;
  while (l1 || l2 || overflow) {
    const valueToAppend = (l1?.val || 0) + (l2?.val || 0) + overflow;
    overflow = Math.floor(valueToAppend / 10);

    merged.next = new ListNode(valueToAppend % 10);

    if (current) current = current.next!;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return merged;
}

export function main02() {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  const result = addTwoNumbers(l1, l2);
  //   console.log(result);
}

main02();
