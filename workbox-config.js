module.exports = {
  "globDirectory": "web/",
  "globPatterns": [
    "**/*.{php,js,png,css,html,ico,ttf}"
  ],
  "swDest": "web\\sw.js",
   "skipWaiting": true,
   "templatedURLs": { '/': ['index.php']
}
};
