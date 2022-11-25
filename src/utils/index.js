export const throttle = (cb, delay = 300) => {
  let shouldWait = false;
  let argsWaiting;

  const timeoutFunc = () => {
    if (argsWaiting == null) {
      shouldWait = false;
    } else {
      cb(...argsWaiting);
      argsWaiting = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      argsWaiting = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
};

export const debounce = (cb, delay = 400) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      cb(...args);
    });
  };
};
