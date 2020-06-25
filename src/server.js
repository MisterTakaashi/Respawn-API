const koa = require('koa');
const koaJson = require('koa-json');

const router = require('./router');

const port = 3000;
const app = new koa();

app.use(koaJson());
app.use(router.routes());

app.listen(port, () => {
    console.log('Server listening on port', port);
});