/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  let currentValue = new ListNode();
  const copyOfCurrentValue = currentValue;
  
  while (list1 && list2) {
    if (list1.val < list2.val) {
      currentValue.next = list1;
      list1 = list1.next;
    } else {
      currentValue.next = list2;
      list2 = list2.next;
    }
    
    currentValue = currentValue.next;
  }
  
  if (list1) {
    currentValue.next = list1;
  }
  
  if (list2) {
    currentValue.next = list2;
  }
  
  
  return copyOfCurrentValue.next;
};