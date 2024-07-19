const ele = document.getElementById('eval');

Promise.resolve(`import('./b.mjs')`).then(eval)
  .then(() => {
    ele.innerText = `eval propagates active ScriptOrModule`;
  }, () => {
    ele.innerText = 'eval does not propagate active ScriptOrModule';
  });
