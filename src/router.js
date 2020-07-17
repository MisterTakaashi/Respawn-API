const router = require('koa-router')();

const GameServersController = require('./controllers/game_servers');

// Game Servers

router.get('/gameservers', async (ctx, next) => {
  await new GameServersController().index(ctx, next);
});

router.post('/gameservers', async (ctx, next) => {
  await new GameServersController().create(ctx, next);
});

module.exports = router;