Promise.resolve(`import('./b.mjs')`).then(eval)
  .then(() => {
    document.getElementById('content').innerText = './b.mjs is resolved relative to the url of a.mjs';
  }, () => {
    document.getElementById('content').innerText = './b.mjs is resolved relative to the url of the document.';
  });
