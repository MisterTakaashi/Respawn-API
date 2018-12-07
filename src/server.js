const koa = require('koa');
const koaJson = require('koa-json');

const router = require('./router');

const app = new koa();

app.use(koaJson());
app.use(router.routes());

app.listen(3000);