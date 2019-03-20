import reducer from '../reducer';

describe('list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual({
      list: [],
      isLoading: true,
    });
  });
});
