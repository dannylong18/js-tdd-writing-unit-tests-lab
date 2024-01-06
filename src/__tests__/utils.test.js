// Your tests here
import { isPalindrome } from '../utils'

describe ('isPalindrome', () => {
    it ('returns true if word is a palindrome', () => {
        const word = 'mom';

        const value = isPalindrome(word);

        expect(value).toBe(true)
    })

    it ('returns false if word is not a palindrome', () => {
        const word = 'hello';

        const value = isPalindrome(word);

        expect(value).toBe(false)
    })

    it ('returns true for combination of uppercase and lowercase letters', () => {
        const word = 'RaCEcaR'

        const value = isPalindrome(word)

        expect(value).toBe(true)
    })

    it ('throws an error if the word is an empty string', () => {
        const word = '';

        expect(() => isPalindrome(word)).toThrow()
    })
})