export const arrayFromTwoNumbers = (num1: number, num2: number) => {
    let result = [];
    
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        result.push(i)
    }

    return result
}