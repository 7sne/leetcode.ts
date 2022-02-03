class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function collectBinaryString(head: ListNode): string {
    let binaryString = '';
    let temp: ListNode | null = head;
    while (temp !== null) {
        binaryString += temp.val;
        temp = temp.next;
    }
    return binaryString;
}

function calculateValue(binaryString: string): number {
    let currentValue = 0;
    for (const char of binaryString)
        currentValue = currentValue * 2 + +char;
    return currentValue;
}

function getDecimalValue(head: ListNode | null): number {
    if (head === null) 0;
    const binaryString = collectBinaryString(head as ListNode);
    const value = calculateValue(binaryString);
    return value;
}

export function main1290() {
    const result = getDecimalValue(
        new ListNode(1, new ListNode(0, new ListNode(1)))
    );
    // console.log(result, '✨');
}

main1290();
