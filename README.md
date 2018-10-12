# BlackForestHackathon_2018

## ShareTicket

### dev tools
```
npm install -g ethereumjs-testrpc
npm install -g truffle
```


### build
```
truffle compile 
```


### deploy 

#### powershell 1
```
testrpc
```
#### powershell 2
```
truffle migrate --reset
```


### test
```
truffle console
var shareTicket
ShareTicket.deployed().then(function(deployed){shareTicket=deployed;})
shareTicket.AddNewTicket(0x1,"testTicket",1,4,3)
shareTicket.GetTicketName.call()
```


## ShareTicketWithWebApp

### dev tools
like before


### build
```
npm install
truffle compile 
```


### deploy 
like before

### dev
```
npm run dev --watch
```


### test

like before
shareTicket.GetTicketName(1).call()
```
