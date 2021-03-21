var moment = require('moment');
module.exports = {
  book: {
    assets: './assets'
  },
  hooks: {
    'page:before': function(page) {
      if(this.options.pluginsConfig['add-js']) {
        var _urls = this.options.pluginsConfig['tbfed-pagefooter']['urls'] || [];
        var _html = '';
        for(var i in urls){
          if(urls[i]){
            html += '<script type="text/javascript" src="'+urls[i]+'"></script>'
          }
        }
      }
      page.content = _html + page.content;
      return page;
    }
  }
};
