import { StringPiPipe } from './string-pi.pipe';

describe('StringPiPipe', () => {
  it('create an instance', () => {
    const pipe = new StringPiPipe();
    expect(pipe).toBeTruthy();
  });
});
