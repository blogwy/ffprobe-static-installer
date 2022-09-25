'use strict'

const {ok, strictEqual} = require('assert')
const {isAbsolute} = require('path')
const fs = require('fs')
const {spawnSync} = require('child_process')
const shell = require('any-shell-escape')
const ffprobePath = require('.')

console.info('TAP version 12')
console.info('1..4')

ok(isAbsolute(ffprobePath))
console.info('ok 1 - ffprobe path is absolute')

ok(fs.statSync(ffprobePath).isFile(ffprobePath))
console.info(`ok 2 - ${ffprobePath} is a file`)

fs.accessSync(ffprobePath, fs.constants.X_OK)
console.info(`ok 3 - ${ffprobePath} is executable`)

const {status} = spawnSync(ffprobePath, ['--help'], {
	stdio: ['ignore', 'ignore', 'pipe'], // stdin, stdout, stderr
})
strictEqual(status, 0)
console.info(`ok 4 - \`${ffprobePath} --help\` works`)