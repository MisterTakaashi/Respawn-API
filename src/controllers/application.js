class ApplicationController {
  render_success(ctx, data) {
    ctx.body = {
      error: false,
      data: data
    };
  }

  render_error(ctx, code, message) {
    ctx.status = code;
    
    ctx.body = {
      error: true,
      message: message
    };
  }
}

module.exports = ApplicationController;