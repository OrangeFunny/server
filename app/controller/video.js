const Controller = require('egg').Controller
const mock =  require('../data/mock.js')

class VideoController extends Controller {
  async index() {
    const ctx = this.ctx
    ctx.body = mock
    ctx.status = 201
  }
}
module.exports = VideoController