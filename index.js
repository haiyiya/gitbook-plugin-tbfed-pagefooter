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
        for(var i = 0; i < _urls.length; i++){
          if(_urls[i]){
            _html += '<script type="text/javascript" src="'+_urls[i]+'"></script>'
          }
        }
        page.content = _html + page.content;
        console.log(_html)
      }
      return page;
    }
  }
};
