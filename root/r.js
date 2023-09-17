/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
   
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carryOver = 0;
    let l3 = l2;
    let prev = l2;
    while(l1 || l2) {
        let sum = 0;
        if(l1 && l2)
        sum = l1.val + l2.val;
        else if(l1) sum = l1.val;
        else if(l2)sum = l2.val;
        if(carryOver) {
            sum+=1;
            carryOver = 0;
        }
        if(sum > 9) {
            carryOver = 1;
            sum -= 10;
        }
        if(l2) l2.val = sum;
        else prev.next = new ListNode(sum);
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
        if(prev.next) prev = prev.next;
    }
    if(carryOver) {
        prev.next = new ListNode(1);
    }
    return l3;
};

l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(JSON.stringify(addTwoNumbers(l1, l2)));