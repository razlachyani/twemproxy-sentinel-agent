var cli = require('cli'),
    Agent = require('./agent');

cli.parse({
  host:    ['h', 'Redis sentinel hostname', 'string', '192.168.33.12'],
  port:    ['p', 'Redis sentinel port number', 'number', 26379],
  config:  ['f', 'Path to twemproxy config', 'path', '/etc/nutcracker/nutcracker.yml'],
  command: ['c', 'Command to restart twemproxy', 'string', 'sudo restart twemproxy-sentinel-agent'],
  log:	   ['l', 'The log file location', 'string', '/var/log/twemproxy/twemproxy_sentinel.log']
});

cli.main(function (args, options) {
  var config = { nutcracker_config_file: options.config,
                 redis_sentinel_ip:      options.host,
                 redis_sentinel_port:    options.port,
                 restart_command:        options.command, 
		 log_file:		 options.log };

  Agent.bootstrap(config);
});
