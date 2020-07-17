const Docker = require('dockerode');

const ApplicationController = require('./application');

class GameServersController extends ApplicationController {
  
  // GET /gameservers
  async index(ctx) {
    const docker = new Docker();

    const containers = await docker.listContainers();
    const gameContainers = containers.filter(x => /^respawn_\d{1,6}$/.test(x.Image));

    this.render_success(ctx, {
      servers: gameContainers
    });
  }

  // POST /gameservers
  async create(ctx) {
    const docker = new Docker();

    console.log(ctx.request.body);
    // const gameServer = new GameServerModel();

    this.render_success(ctx, {
      servers: []
    });
  }
}

module.exports = GameServersController;