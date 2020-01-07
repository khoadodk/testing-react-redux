import { types } from '../../types';
import postReducer from './postReducer';

describe('Post Reducer', () => {
  it('Should return default state', () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Should return new state if receiving type', () => {
    const posts = [{ title: 'test 1' }, { title: 'test 2' }];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
