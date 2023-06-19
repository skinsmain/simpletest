let http = require('http')

function main(args) {
    let name = args.name || 'stranger'
    http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
      resp.on('data', function(ip) {
      console.log("My public IP address is: " + ip);
          return {"body": ip}
      });
    });
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }

exports.main = main
