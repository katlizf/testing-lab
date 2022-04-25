const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions')

test('returnTwo test', () => {
    expect(returnTwo()).toEqual(2)
})

test('greeting test', () => {
    expect(greeting('James')).toBe('Hello, James')
})

// test('add test', () => {
//     expect(add(1,4)).toEqual(5)
// })

describe('math tests', () => {
    test('add test', () => {
        expect(add(1,4)).toEqual(5)
    })
    test('multiply test', () => {
        expect(multiply(2,5)).toEqual(10)
    })
    test('divide test', () => {
        expect(divide(6,2)).toEqual(3)
    })
    test('subtract test', () => {
        expect(subtract(4,1)).toEqual(3)
    })
})

