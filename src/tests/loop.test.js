const loop = require('../loop') 
describe('loop', () => {
    it('should return an array with expected values', () => {
      const result = loop(15);
      const expected = [
        1,
        2,
        'Tiga',
        4,
        'Lima',
        'Tiga',
        7,
        8,
        'Tiga',
        'Lima',
        11,
        'Tiga',
        13,
        14,
        'TigaLima',
      ];
      expect(result).toEqual(expected);
    });
  });
  