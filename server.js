const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const server = new Koa();
const router = new Router();
const handle = app.getRequestHandler();

router.get('/test/:id', (ctx) => {
    ctx.body = `your id ${ctx.params.id}`
})

server.use(router.routes());

server.listen(3000, () => {
    console.log('3000 🦁');
});