// code from https://facebook.github.io/jest/docs/en/timer-mocks.html#content
export function timerGame(callback: Function) {
    console.log('Ready....go!');

    setTimeout(() => {
        console.log('Times up -- stop!');
        callback && callback();
    }, 1000);
}
