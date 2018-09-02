var cypress = require('cypress')
var Budo = require('budo')
var getPort = require('getport')

getPort(9966, function (err, port) {
    if (err) throw err

    var budo = Budo.cli(process.argv.slice(2), { port })
        .on('connect', function () {
            cypress.run({
                config: {
                    baseUrl: 'http://localhost:' + port
                }
            }).then(res => {
                budo.close()
            })
        })
})

