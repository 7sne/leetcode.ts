class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function middleNode(head: ListNode | null): ListNode | null {
    //
}

export function main1290() {
    const result = middleNode(
        new ListNode(1, new ListNode(0, new ListNode(1)))
    );
    console.log(result, '✨');
}

main1290();
