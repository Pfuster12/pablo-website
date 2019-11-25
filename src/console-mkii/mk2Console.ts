export default class mk2Console {
    constructor() {}

    log(msg: string) {
        const stream = document.querySelector('.console-stream')
        const span = document.createElement('span')
        span.className = 'console-stream'
        span.innerHTML = msg + '\n' + 'newline'
        stream.appendChild(span)
    }
}