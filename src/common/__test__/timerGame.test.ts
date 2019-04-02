// code from https://facebook.github.io/jest/docs/en/timer-mocks.html#content
import { timerGame } from '../timerGame';

jest.useFakeTimers();

test('waits 1 second before ending the game', () => {
    // Given
    const callback = jest.fn();
    timerGame(callback);
    expect(callback).not.toBeCalled();

    // When
    jest.runAllTimers();

    // Then
    expect(callback).toBeCalled();
    expect(callback.mock.calls.length).toBe(1);
});
