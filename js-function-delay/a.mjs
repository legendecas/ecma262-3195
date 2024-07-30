const frame = frames[3];

const setLocationHref = Object
  .getOwnPropertyDescriptor(frame.location, "href")
  .set
  .bind(frame.location);

frame.onload = () => {
  frame.promise
    .then(v => setLocationHref(v));
}
