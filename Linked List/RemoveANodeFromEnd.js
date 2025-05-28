function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    let temp = new ListNode(0, head);
    let start = temp;
    let end = temp;

    for (let i = 0; i < n; i++) {
        start = start.next;
    }


    while (start !== null) {
        start = start.next;
        end = end.next;
    }

    end.next = end.next.next;

    return temp.next;
}