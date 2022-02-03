export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    const mergedList = new ListNode(0);

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            mergedList.next = list1;
            list1 = list1.next;
        } else {
            mergedList.next = list2;
            list2 = list2.next;
        }
        // mergedList = mergedList.next;
    }
    return mergedList;
}

export const main021 = (async function main014() {
    const result = mergeTwoLists(
        new ListNode(1, new ListNode(2, new ListNode(4))),
        new ListNode(1, new ListNode(3, new ListNode(4)))
    );
    // new ListNode(0, new ListNode(1))
    // console.log(result);
})().catch(e => console.error(e));
