const caesarCipher = require('./caesarCipher')

describe('cesar cipher', () => {
  test('return abc', () => {
    expect(caesarCipher('xyz', 3)).toMatch('abc');
  });

  test('return KhOOr', () => {
    expect(caesarCipher('HeLLo', 3)).toMatch('KhOOr');
  });

  test('return Khoor, Zruog!', () => {
    expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
  });
});
