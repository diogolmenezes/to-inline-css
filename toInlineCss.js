ToInlineCss = function() {
    this.juice = require('juice');
    this.fs    = require('fs');
    this.beforePath = __dirname + '/to_convert/';
    this.afterPath  = __dirname + '/converted/';
};

ToInlineCss.prototype.run = function() {
    var base = this;

    this.fs.readdir(this.beforePath, (err, files) => {
        files.forEach(file => {
            console.log('Reading file => ', file);
            base.convert(file);
        });
    });
};

ToInlineCss.prototype.convert = function(file) {
    base = this;
    this.fs.readFile(this.beforePath + file, 'utf8', function (err, html) {
        if (err) { return console.log(err); }
        
        var result = base.juice(html);
        
        base.saveFile(base.afterPath + file, result);
    });
};


ToInlineCss.prototype.saveFile = function(path, data) {
    this.fs.writeFile(path, data, function(err) {
        if(err) { return console.log(err); }
        console.log("The file was saved!");
    }); 
};


new ToInlineCss().run();

