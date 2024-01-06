// Your code here
export function isPalindrome (word) {
    if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error("Invalid input");
      }
      
    const regWord = word.toLowerCase()
    const reverseWord = word.toLowerCase().split('').reverse().join('')

    const value = regWord === reverseWord

    return value
}