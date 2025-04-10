addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  // 动态替换目标协议和路径
  const targetUrl = 'line://ti/p/kk@works-558158';
  return Response.redirect(targetUrl, 301);
}