//solium-disable linebreak-style
//solium-disable max-len

pragma solidity ^0.4.4;

contract ShareTicket{

    struct TicketUser{
        address TicketUserCurrentUser;		
        uint TicketUserTimestampRecived;
        uint TicketUserTimestampPassed;
        uint GeoLocationLatRecived;
        uint GeoLocationLongRecived;    
        uint GeoLocationLatPassed;
        uint GeoLocationLongPassed;    
    }

    struct Ticket{	
        address TicketOwner;	
        string TicketName;
        uint TickeTimeStampSarting;
        uint TickeTimeStampEnding;
        uint TickeTimeStampReturn;
        mapping (uint => TicketUser) TicketUsers;
        uint TicketUserCount;
    }

    mapping (uint => Ticket) private m_Tickets;  
    uint[] private m_TicketIds ; 
    uint private m_TicketCount ;
	
    constructor() public{        
        
        //remove * comment for dummy data
         
        // cretat dummy entrys for intial data
        AddNewTicket(0xce67e2ab70671e5d0b8499c07e2e6cdb6f75ed12,"KVV Karte 2 Waben Monat",1538388654,1540980654,1540548654);
        AddNewTicket(0x1ab79ce0e17faa271990179e85706bf5b2597a16,"RVF RegioKarte Monat",1538388654,1540980654,1539598254);
        
    }

    function AddNewTicket(address TicketOwner, string TicketName, uint TickeTimeStampSarting, uint TickeTimeStampEnding,uint TickeTimeStampReturn) public{
          
        // init new ticket
        Ticket memory newTicket;

        newTicket.TicketOwner = TicketOwner;
        newTicket.TicketName = TicketName;
        newTicket.TickeTimeStampSarting = TickeTimeStampSarting;
        newTicket.TickeTimeStampEnding = TickeTimeStampEnding;
        newTicket.TickeTimeStampReturn = TickeTimeStampReturn;

        // Store new ticket       
        m_TicketIds.push(m_TicketCount);
        m_Tickets[m_TicketCount] = newTicket;
        m_TicketCount++;
    }

    function PassOnTicket(uint TicketId, address TicketUserCurrentUser, uint TicketUserTimestampPassed, uint GeoLocationLatPassed, uint GeoLocationLongPassed) public{   

        if(m_Tickets[TicketId].TicketOwner == address(0))
        {
            revert("no Ticket was added");
        }

        TicketUser memory newTicketUser;
        
        // billing current ticket user
        if(m_Tickets[TicketId].TicketUserCount > 0)
        {
            m_Tickets[TicketId].TicketUsers[m_Tickets[TicketId].TicketUserCount-1].TicketUserTimestampPassed = TicketUserTimestampPassed;
            m_Tickets[TicketId].TicketUsers[m_Tickets[TicketId].TicketUserCount-1].GeoLocationLatPassed = GeoLocationLatPassed;
            m_Tickets[TicketId].TicketUsers[m_Tickets[TicketId].TicketUserCount-1].GeoLocationLongPassed = GeoLocationLongPassed;

            // add billing
        }

        // check if owner got it back
        if(m_Tickets[TicketId].TicketOwner == TicketUserCurrentUser)
        {
            // add destruct code

            return;
        }

        // pass on ticket
        newTicketUser.TicketUserCurrentUser = TicketUserCurrentUser;
        newTicketUser.TicketUserTimestampRecived = TicketUserTimestampPassed;
        newTicketUser.GeoLocationLatRecived = GeoLocationLatPassed;
        newTicketUser.GeoLocationLongRecived = GeoLocationLongPassed;  

        // store new user        
        m_Tickets[TicketId].TicketUsers[m_Tickets[TicketId].TicketUserCount] = newTicketUser;     
        m_Tickets[TicketId].TicketUserCount++;
    }

    function GetTicketOwner(uint TicketId) public view returns(address){

        if(m_Tickets[TicketId].TicketOwner == address(0))
        {
            revert("no Ticket was added");
        }

        return m_Tickets[TicketId].TicketOwner;
    }

	
    function GetTicketCount() public view returns(uint){

       return m_TicketCount;
    }

    function GetTicketName(uint TicketId) public view returns(string){

        if(m_Tickets[TicketId].TicketOwner == address(0))
        {
            revert("no Ticket was added");
        }

        return m_Tickets[TicketId].TicketName;
    }

    function GetTicketDatesOfValidity(uint TicketId) public view returns(uint,uint){

        if(m_Tickets[TicketId].TicketOwner == address(0))
        {
            revert("no Ticket was added");
        }

        return (m_Tickets[TicketId].TickeTimeStampSarting,m_Tickets[TicketId].TickeTimeStampEnding);
    }

    function GetTicketDateOfReturn(uint TicketId) public view returns(uint){

        if(m_Tickets[TicketId].TicketOwner == address(0))
        {
            revert("no Ticket was added");
        }		

        return m_Tickets[TicketId].TickeTimeStampReturn;
    }

    function GetTicketCurrentUser(uint TicketId) public view returns(address){

        if(m_Tickets[TicketId].TicketOwner == address(0))
        {
            revert("no Ticket was added");
        }

        if(m_Tickets[TicketId].TicketUserCount == 0)
        {
            revert("no Ticket user");
        }

        return m_Tickets[TicketId].TicketUsers[m_Tickets[TicketId].TicketUserCount-1].TicketUserCurrentUser;
    }

    function GetTicketLastGeoLocation(uint TicketId) public view returns(uint,uint){

        if(m_Tickets[TicketId].TicketOwner == address(0))
        {
            revert("no Ticket was added");
        }

        if(m_Tickets[TicketId].TicketUserCount == 0)
        {
            revert("no Ticket user");
        }

        return (m_Tickets[TicketId].TicketUsers[m_Tickets[TicketId].TicketUserCount-1].GeoLocationLatRecived, m_Tickets[TicketId].TicketUsers[m_Tickets[TicketId].TicketUserCount-1].GeoLocationLongRecived);
    }
        
	

}