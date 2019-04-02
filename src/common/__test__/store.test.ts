
import { initStore } from "../store";

describe('store', () => {
  it('add', () => {
    // Given
    const store = initStore(false);
    // When
    store.addAge();
    store.addAge();
    // Then
    expect(store.age).toBe(2);
  })
});
