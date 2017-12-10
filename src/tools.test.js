const calc = require('./tools');

describe('calc', () => {
  it('calc0', () => {
    expect(calc([], 1)).toEqual([]);
  });
  it('calc1', () => {
    expect(calc([1,2,3,4,5], 1)).toEqual([[1],[1,2],[2,3],[3,4],[4,5]]);
  });
  it('calc2', () => {
    expect(calc([1,2,3,4,5], 2)).toEqual([[1,2],[2,3,4],[4,5]]);
  });
  it('calc3', () => {
    expect(calc([1,2,3,4,5], 3)).toEqual([[1,2,3],[3,4,5]]);
  });
  it('calc4', () => {
    expect(calc([1,2,3,4,5], 4)).toEqual([[1,2,3,4],[4,5]]);
  });
  it('calc5', () => {
    const from = [
      {a: 1, b:1},
      {a: 2, b:1},
      {a: 3, b:1},
      {a: 4, b:1},
      {a: 5, b:1},
      {a: 6, b:1},
    ];
    const to = [
      [ {a: 1, b:1}, {a: 2, b:1} ],
      [ {a: 2, b:1}, {a: 3, b:1}, {a: 4, b:1} ],
      [ {a: 4, b:1}, {a: 5, b:1}, {a: 6, b:1} ],
    ];
    expect(calc(from, 2)).toEqual(to);
  });
  it('calc23', () => {
    const from = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    const to = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],[23,24,25]];
    expect(calc(from, 23)).toEqual(to);
  });
});
