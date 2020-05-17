const xorkey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const utf8decoder = new TextDecoder()
const utf8encoder = new TextEncoder()

function tslbuf(buffer) {
    const i8arr = new Int8Array(buffer)
    return i8arr.map((n, i) => n ^ xorkey[i % 10]).buffer
}

function ab2str(buffer) {
    return utf8decoder.decode(buffer)
}

function str2ab(str) {
    return utf8encoder.encode(str).buffer
}

function decodeReqData(data) {
    const buffer = str2ab(data)
    const tslBuffer = tslbuf(buffer)
    const str = ab2str(tslBuffer)
    return JSON.parse(str)
}

function encodeResData(data) {
    const dataStr = JSON.stringify(data)
    const buffer = str2ab(dataStr)
    const tslBuffer = tslbuf(buffer)
    const result = Buffer.from(tslBuffer)
    return result
}

module.exports = {
    tslbuf,
    ab2str,
    str2ab,
    decodeReqData,
    encodeResData,
}
