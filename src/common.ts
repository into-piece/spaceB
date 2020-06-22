function throttle(func: (...args: Array<any>) => void, delay: number) {
  let open = false;
  return (...args: Array<any>) => {
    if (open) return;
    open = true;
    setTimeout(() => {
      func(...args);
      open = false;
    }, delay);
  };
}

type T = number | undefined;
function debounce(func: (...args: Array<any>) => void, delay: number) {
  let timer: T = undefined;
  return (...args: Array<any>) => {
    timer && clearTimeout(timer);
    timer = window.setTimeout(() => {
      func(...args);
      timer = undefined;
    }, delay);
  };
}

export {};
