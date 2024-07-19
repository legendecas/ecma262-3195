const ele = document.getElementById('js-function');
const frame = frames[1];

frame.onload = () => {
  Promise.resolve("./page-1")
    .then(frame.handler)
    .then(() => {
      const location = frame.location;
      console.log('frame location with JS function:', location.href);

      if (location.pathname === '/page-1') {
        ele.innerText = 'js-function does not propagate active window';
      } else {
        ele.innerText = 'js-function propagates active window';
      }
    });
}
