const WebSocket = require('ws')

module.exports = function createWS(server) {
    const wss = new WebSocket.Server({ server });
    /**
     * WebSocket
     */
    wss.on('connection', ws => {
        ws.on('message', msg => {
            console.log('received: ', msg);
            ws.send(msg)
        });
    });
}
