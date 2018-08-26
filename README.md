# spacey
a tiny browser extension that toggles a timer on space down

# usage
run spacey in your [favorite](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) [browser](https://developer.chrome.com/extensions/getstarted) using a manifest describing which sites you want to enable it on

# example manifest
```json
{
  "manifest_version": 2,
  "name": "spacey",
  "version": "1.0",
  "description": "toggle a timer on space down",
  "content_scripts": [
    {
      "matches": ["*://*.custom.domain/*"],
      "js": ["spacey.js"]
    }
  ]
}
```