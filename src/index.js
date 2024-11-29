/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    let response;

    switch (pathname) {
      case '/':
        response = new Response('Hello World!');
        break;
      case '/env':
		const var1 = env.MY_VARIABLE;
        response = Response.json({ var1 });
        break;
      case '/contact':
        response = new Response('This is the contact page.');
        break;
      default:
        response = new Response('Page not found', { status: 404 });
        break;
    }

    return response;
  },
};
