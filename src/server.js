const koa = require('koa');
const koaJson = require('koa-json');
const koaBodyParser = require('koa-bodyparser');
const Datastore = require('nedb');

const router = require('./router');

const port = 3000;
const app = new koa();
const db = new Datastore();

app.use(koaJson());
app.use(koaBodyParser());
app.use(router.routes());
app.use(ctx => {
    ctx.db = db;
});

app.listen(port, () => {
    console.log('Server listening on port', port);
});