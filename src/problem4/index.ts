function sum_to_n_a(n: number): number {
    // The time complexity: O(1)
    // Calcuation: ((last number + first number) * number of numbers) / 2
    // Because the space of numbers equals one, number of numbers equals n.
    return ((n + 1) * n) / 2
}

function sum_to_n_b(n: number): number {
    // The time complexity: O(n)
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

function sum_to_n_c(n: number): number {
    // The time complexity: O(n)
    let sum = 0;
    let mid = 0;
    let lastNum = 0;
    if (n % 2 > 0 ){
        mid = (n - 1) / 2;
        lastNum = n;
    }else {
        mid = n / 2;
    }
    for (let i =1; i <= mid; i++) {
        sum += (i + (i+mid))
    }
    return sum + lastNum;
}

// Testing part
// Uncomment these below code lines to test the above functions
// const n = 99;
// console.log(sum_to_n_a(n))
// console.log(sum_to_n_b(n))
// console.log(sum_to_n_c(n))
