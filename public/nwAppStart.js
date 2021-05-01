const startUrl = process.env.NWJS_START_URL || './index.html';
console.log("🚀 ~ file: nwAppStart.js ~ line 2 ~ startUrl", startUrl)

nw.Window.open(startUrl, {}, function(win) {});