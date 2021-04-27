const startUrl = process.env.NWJS_START_URL || './index.html';

nw.Window.open(startUrl, {}, function(win) {});