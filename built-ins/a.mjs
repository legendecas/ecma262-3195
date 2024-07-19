const ele = document.getElementById('built-ins');

const frame = frames[0];
const setLocationHref = Object
  .getOwnPropertyDescriptor(frame.location, "href")
  .set
  .bind(frame.location);

frame.onload = () => {
  Promise.resolve("./page-1")
    .then(setLocationHref)
    .then(() => {
      const location = frame.location;
      console.log('frame location:', location.href);
      if (location.pathname === '/page-1') {
        ele.innerText = 'built-ins does not propagate active window';
      } else {
        ele.innerText = 'built-ins propagates active window';
      }
    })
}
