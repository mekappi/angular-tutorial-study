import { MessageCustomPipe } from './message-custom.pipe';

describe('MessageCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new MessageCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
