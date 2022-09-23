# ffprobe-static-installer

**[ffmpeg](https://ffmpeg.org) static binaries for Mac OSX, Linux, Windows.**

Supports macOS (64-bit and arm64), Linux (32 and 64-bit, armhf, arm64), Windows (32 and 64-bit). [The ffmpeg version currently used is `5.0.1`.](https://github.com/blogwy/ffprobe-static-installer/releases/tag/b5.0.1)

**This project is a fork of [ffmpeg-static](https://github.com/eugeneware/ffmpeg-static)**

**Binaries from [node-ffprobe-installer](https://github.com/SavageCore/node-ffprobe-installer)**

## Installation

This module is installed via npm:

``` bash
$ npm install ffprobe-static-installer
```

### Custom binaries url

By default, the `ffprobe` binary will get downloaded from `https://github.com/blogwy/ffprobe-static-installer/releases/download/`. To customise this, e.g. when using a mirror, set the `FFPROBE_BINARIES_URL` environment variable.

```shell
export FFPROBE_BINARIES_URL=https://ghproxy.com/https://github.com/blogwy/ffprobe-static-installer/releases/download/
npm install ffmpeg-static
```

### Electron & other cross-platform packaging tools

Because `ffmpeg-static` will download a binary specific to the OS/platform, you need to purge `node_modules` before (re-)packaging your app *for a different OS/platform* ([read more in #35](https://github.com/eugeneware/ffmpeg-static/issues/35#issuecomment-630225392)).

## Example Usage

Returns the path of a statically linked ffmpeg binary on the local filesystem.

``` js
var pathToFFprobe = require('ffprobe-static-installer');
console.log(pathToFFprobe);
```

```
/Users/j/playground/node_modules/ffprobe-static-installer/ffprobe
```

Check the [example script](example.js) for a more thorough example.

## Thanks

- [ffmpeg-static](https://github.com/eugeneware/ffmpeg-static)
- [node-ffprobe-installer](https://github.com/SavageCore/node-ffprobe-installer)

