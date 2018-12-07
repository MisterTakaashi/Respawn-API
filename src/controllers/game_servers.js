const ApplicationController = require('./application');

class GameServersController extends ApplicationController {
  
  // GET /gameservers
  async index(ctx) {
    this.render_success(ctx, {
      servers: []
    });
  }
}

module.exports = GameServersController;