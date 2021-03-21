var moment = require('moment');
module.exports = {
  book: {
    assets: './assets'
  },
  hooks: {
    'page:before': function(page) {
      return page;
    }
  }
};
