const frame = frames[1];

const setLocationHref = Object
  .getOwnPropertyDescriptor(frame.location, "href")
  .set
  .bind(frame.location);

frame.onload = () => {
  frame.Promise.resolve("./page-1")
    .then(v => setLocationHref(v));
}
