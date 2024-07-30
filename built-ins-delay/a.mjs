const frame = frames[2];

const setLocationHref = Object
  .getOwnPropertyDescriptor(frame.location, "href")
  .set
  .bind(frame.location);

frame.onload = () => {
  frame.promise
    .then(setLocationHref);
};
