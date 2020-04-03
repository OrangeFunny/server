const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = '橘子搞笑 api'
  }
}

module.exports = HomeController
