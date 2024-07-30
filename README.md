Example of https://github.com/tc39/ecma262/pull/3195

HTML [HostMakeJobCallback](https://html.spec.whatwg.org/multipage/webappapis.html#hostmakejobcallback)
captures the active script and [HostCallJobCallback](https://html.spec.whatwg.org/multipage/webappapis.html#hostcalljobcallback)
restores it when the job is invoked.

However, only Safari 17.5 implemented this. Neither Chrome 127, Firefox 129 implemented this yet.

See [./index.html](./index.html) for an example.
