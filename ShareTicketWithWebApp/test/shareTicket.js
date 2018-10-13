var Products = artifacts.require("./Products.sol");

contract("Products",
    function(accounts) {
        var productstInstance;

        it("it initializes with two offers",
            function () {
                return Products.deployed().then(function (instance) {
                    productstInstance = instance;
                    return productstInstance.GetOffersCount();
                }).then(function (retunValue) {
                    console.log("------");
                    console.log(retunValue);
                    assert.equal(retunValue, 2);
                });
            });



        it("it initializes the offer 0 with the correct", function () {
            return Products.deployed().then(function (instance) {
                productstInstance = instance;
                return productstInstance.GetOfferBy(0);
            }).then(function (retunValue) {
                console.log("------");
                console.log(retunValue);
                //assert.equal(retunValue, "0xce67e2ab70671e5d0b8499c07e2e6cdb6f75ed12");
            });
        });

        /*
        it("it initializes the ticket 0 with the correct TicketName", function () {
            return ShareTicket.deployed().then(function (instance) {
                shareTicketInstance = instance;
                return shareTicketInstance.GetTicketName(0);
            }).then(function (retunValue) {
                assert.equal(retunValue, "KVV Karte 2 Waben Monat");
            });
        });

        
        it("it initializes the ticket 0 with the correct TicketDatesOfValidity", function () {
            return ShareTicket.deployed().then(function (instance) {
                shareTicketInstance = instance;
                return shareTicketInstance.GetTicketDatesOfValidity(0);
            }).then(function (retunValue) {
                assert.equal(retunValue[0].c[0], 1538388654);
                assert.equal(retunValue[1].c[0], 1540980654);
            });
        });
        

        it("it initializes the ticket 0 with the correct GetTicketDateOfReturn", function () {
            return ShareTicket.deployed().then(function (instance) {
                shareTicketInstance = instance;
                return shareTicketInstance.GetTicketDateOfReturn(0);
            }).then(function (retunValue) {
                assert.equal(retunValue.c[0], 1540548654);
            });
        });




        it("it initializes the ticket 1 with the correct TicketOwner", function () {
            return ShareTicket.deployed().then(function (instance) {
                shareTicketInstance = instance;
                return shareTicketInstance.GetTicketOwner(1);
            }).then(function (retunValue) {
                assert.equal(retunValue, "0x1ab79ce0e17faa271990179e85706bf5b2597a16");
            });
        });
       

        it("it initializes the ticket 1 with the correct TicketName", function () {
            return ShareTicket.deployed().then(function (instance) {
                shareTicketInstance = instance;
                return shareTicketInstance.GetTicketName(1);
            }).then(function (retunValue) {
                assert.equal(retunValue, "RVF RegioKarte Monat");
            });
        });

        
        it("it initializes the ticket 1 with the correct TicketDatesOfValidity", function () {
            return ShareTicket.deployed().then(function (instance) {
                shareTicketInstance = instance;
                return shareTicketInstance.GetTicketDatesOfValidity(1);
            }).then(function (retunValue) {
                assert.equal(retunValue[0].c[0], 1538388654);
                assert.equal(retunValue[1].c[0], 1540980654);
            });
        });
        

        it("it initializes the ticket 1 with the correct GetTicketDateOfReturn", function () {
            return ShareTicket.deployed().then(function (instance) {
                shareTicketInstance = instance;
                return shareTicketInstance.GetTicketDateOfReturn(1);
            }).then(function (retunValue) {
                assert.equal(retunValue.c[0], 1539598254);
            });
        });
        */
    });

//AddNewTicket(0xce67e2ab70671e5d0b8499c07e2e6cdb6f75ed12, "KVV Karte 2 Waben Monat", 1538388654, 1540980654, 1540548654);
//AddNewTicket(0x1ab79ce0e17faa271990179e85706bf5b2597a16, "RVF RegioKarte Monat", 1538388654, 1540980654, 1539598254);