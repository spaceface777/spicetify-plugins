# spicetify-plugins
A collection of [spicetify](https://github.com/khanhas/spicetify-cli) plugins

## Installation
The [spicetify Wiki](https://github.com/khanhas/spicetify-cli/wiki/Extensions) has very detailed instructions on how to install extensions.

Basically, you'll need to download the scripts to spicetify's extension directory and load it:
```sh
spicetify config extensions <plugin name>
spicetify apply
```

## Avaliable plugins
#### `fullAppDisplay.js`
A script that adds a fullscreen view of the currently playing song.

![screenshot](img1/s1.png)

Adapted from [here](https://github.com/khanhas/spicetify-cli/blob/367c4afc53dcd38898e7d7344f51cf885e79310a/Extensions/fullAppDisplay.js).

#### `hideAds.js`
A simple script that hides ad banners in Spotify Free. It *does not* disable audio ads.
