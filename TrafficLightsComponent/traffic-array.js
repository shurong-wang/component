const lights = document.querySelector('#lights');

function start(lights, stateList) {
    const len = stateList.length;
    let currIndex = 0;

    setInterval(() => {
        lights.className = stateList[currIndex];;
        currIndex = (currIndex + 1) % len;
    }, 1000);
}

start(lights, ['stop', 'wait', 'pass']);