console.log("Hello");

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

type ListSet = { listOne: number[]; listTwo: number[] };

export class FirstSolution {
  _listOne: number[] = [];
  _listTwo: number[] = [];

  #reverseLists(listSet: ListSet) {
    // impl
  }

  #assertExist(listSet: ListSet) {
    // check if both of the lists contain at least one element
    // check if all of the elements in both list are non-negative integers
    // the number of elements (nodes) in each list is n >= 1 & n < 100
    // the element (node) value is n >= 0 & n <= 9
    for (const i in listSet) {
    }
  }

  constructor(listSet: ListSet) {
    this.#assertExist(listSet);
    const { listOne, listTwo } = listSet;
  }
}

export {};
