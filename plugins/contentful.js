const contentful = require('contentful')

module.exports = {
  createClient() {
    return contentful.createClient({
      space: 'v5qyhddrzs2r',
      accessToken: 'AL7KVHtHLIjlroDoAD6WO0_jNf4Zhgmg7YF6FZwDkmU'
    })
  }
}