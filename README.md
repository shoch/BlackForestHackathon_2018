BlackForestHackathon_2018

dev tools
npm install -g ethereumjs-testrpc
npm install -g truffle

build
truffle compile 

deploy 
truffle migrate (run testrpc first second shell)

test
truffle console
var shareTicket
ShareTicket.deployed().then(function(deployed){shareTicket=deployed;})
shareTicket.AddNewTicket(0x1,"testTicket",1,4,3)
shareTicket.GetTicketName.call()
