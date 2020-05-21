import WebSocket from 'ws'
// eslint-disable-next-line no-unused-vars
import type http from 'http'

export default function createWS(server: http.Server) {
    const wss = new WebSocket.Server({ server })
    /**
     * WebSocket
     */
    wss.on('connection', ws => {
        ws.on('message', msg => {
            console.log('received: ', msg)
            ws.send(msg)
        })
    })
}
