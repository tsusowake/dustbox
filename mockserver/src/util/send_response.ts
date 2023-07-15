export function sendResponse(res: any, content: Uint8Array): void {
  res.setHeader('Content-Type', 'application/octet-stream')
  res.send(Buffer.from(content))
}
