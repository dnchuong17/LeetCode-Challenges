var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    return prev;
}