'use strict'

if (process.env.FFMPEG_BIN) {
  module.exports = process.env.FFMPEG_BIN
} else {
  var os = require('os')
  var path = require('path')

  var binaries = Object.assign(Object.create(null), {
    darwin: ['x64', 'arm64'],
    linux: ['x64', 'ia32', 'arm64', 'arm'],
    win32: ['x64', 'ia32']
  })

  var platform = process.env.npm_config_platform || os.platform()
  var arch = process.env.npm_config_arch || os.arch()

  var ffprobePath = path.join(
    __dirname,
    platform === 'win32' ? 'ffprobe.exe' : 'ffprobe'
  )

  if (!binaries[platform] || binaries[platform].indexOf(arch) === -1) {
    ffprobePath = null
  }

  module.exports = ffprobePath
}
