const add = (a, b) => a + b

test('Should add 2 numbers', () => {
  const result = add(3,4)
  expect(result).toBe(7)
})

test('Should add 2 negative numbers', () => {
  const result = add(-3,-4)
  expect(result).toBe(-7)
})

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('Should generate greeting from name', () => {
  const result = generateGreeting('Richard')
  expect(result).toBe('Hello Richard!')
})

test('Should generate greeting for no name', () => {
  const result = generateGreeting()
  expect(result).toBe('Hello Anonymous!')
})