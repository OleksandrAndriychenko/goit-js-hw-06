function calculateTotal(number) {
    let count = 0;
    let numb = 0;
    while (numb < number) {
        numb += 1;
        count += numb;
    }
    return count
}

console.log(calculateTotal(24))