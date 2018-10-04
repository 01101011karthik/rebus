import { getRebus, getRebuses } from '../src/js/rebuses';

describe('Tests for rebuses', () => {
  it('generates a correct array of rebuses', () => {
    getRebuses().forEach(rebus => {
      expect(typeof rebus.id).toEqual('number');
      expect(typeof rebus.symbols[0]).toEqual('string');
      expect(typeof rebus.words[0]).toEqual('string');
      expect(rebus.input.length).toEqual(rebus.words.join('').length);
      expect(rebus.isAnswered).toEqual(false);
    });
  });
  test('rebus: 1', () => {
    const rebus = getRebus(1);
    expect(rebus.symbols).toEqual(['😍', '👍', '😍']);
    expect(rebus.words).toEqual(['one', 'two']);
  });
});
