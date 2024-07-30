const frame = frames[0];
const setLocationHref = Object
  .getOwnPropertyDescriptor(frame.location, "href")
  .set
  .bind(frame.location);

frame.onload = () => {
  frame.Promise.resolve("./page-1")
    .then(setLocationHref);
};
