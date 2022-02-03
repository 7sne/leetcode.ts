import { ListNode, mergeTwoLists } from './021';

describe('it works correctly', () => {
    it('returns empty list if list1 and list2 are null', () => {
        const actual = mergeTwoLists(null, null);
        expect(actual).toBe(new ListNode(0, null));
    });
    it('creates empty merged list', () => {});
});
