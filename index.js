var bitcoin=require("bitcoin");

var client = new bitcoin.Client({
  host: '0.0.0.1',
  port: '8332',
  user: 'user',
  pass: 'pass',
  network: 'regtest', 
  timeout: 30000
});

client.getBlockchainInfo();
