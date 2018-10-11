//solium-disable linebreak-style
//solium-disable max-len

pragma solidity ^0.4.24;

contract TicketShare{

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
        uint TicketTimeStampSarting;
        uint TicketTimestampEnding;
        uint TicketTimeStampReturn;
        mapping (uint => TicketUser) TicketUsers;
        uint TickertUserCount;
    }

    Ticket m_Ticket;   
	
    function AddNewTicket(address TicketOwner, string TicketName, uint TicketTimeStampSarting, uint TicketTimestampEnding,uint TicketTimeStampReturn) public{
        
        if(m_Ticket.TicketOwner != address(0))
        {
            revert("Ticket already added");
        }
        
        m_Ticket.TicketOwner = TicketOwner;
        m_Ticket.TicketName = TicketName;
        m_Ticket.TicketTimeStampSarting = TicketTimeStampSarting;
        m_Ticket.TicketTimestampEnding = TicketTimestampEnding;
        m_Ticket.TicketTimeStampReturn = TicketTimeStampReturn;
    }

    function PassOnTicket(address TicketUserCurrentUser, uint TicketUserTimestampPassed, uint GeoLocationLatPassed, uint GeoLocationLongPassed) public{
        
        if(m_Ticket.TicketOwner != address(0))
        {
            revert("no Ticket was added");
        }

        TicketUser memory newTicketUser;
        
        // billing current ticket user
        if(m_Ticket.TickertUserCount > 0)
        {
            m_Ticket.TicketUsers[m_Ticket.TickertUserCount].TicketUserTimestampPassed = TicketUserTimestampPassed;
            m_Ticket.TicketUsers[m_Ticket.TickertUserCount].GeoLocationLatPassed = GeoLocationLatPassed;
            m_Ticket.TicketUsers[m_Ticket.TickertUserCount].GeoLocationLongPassed = GeoLocationLongPassed;

            // add billing
        }

        // check if owner got it back
        if(m_Ticket.TicketOwner == TicketUserCurrentUser)
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
        m_Ticket.TickertUserCount++;
        m_Ticket.TicketUsers[m_Ticket.TickertUserCount] = newTicketUser;     
    }

    function GetTicketOwner() public view returns(address){

        if(m_Ticket.TicketOwner != address(0))
        {
            revert("no Ticket was added");
        }

        return m_Ticket.TicketOwner;
    }

    function GetTicketName() public view returns(string){

        if(m_Ticket.TicketOwner != address(0))
        {
            revert("no Ticket was added");
        }

        return m_Ticket.TicketName;
    }

    function GetTicketDatesOfValidity() public view returns(uint,uint){

        if(m_Ticket.TicketOwner != address(0))
        {
            revert("no Ticket was added");
        }

        return (m_Ticket.TicketTimeStampSarting,m_Ticket.TicketTimeStampSarting);
    }

    function GetTicketDateOfReturn() public view returns(uint){

        if(m_Ticket.TicketOwner != address(0))
        {
            revert("no Ticket was added");
        }

        return (m_Ticket.TicketTimeStampReturn);
    }

    function GetTicketCurrentUser() public view returns(address){

        if(m_Ticket.TicketOwner != address(0))
        {
            revert("no Ticket was added");
        }

        return m_Ticket.TicketUsers[m_Ticket.TickertUserCount].TicketUserCurrentUser;
    }

    function GetTicketLastGeoLocation() public view returns(uint,uint){

        if(m_Ticket.TicketOwner != address(0))
        {
            revert("no Ticket was added");
        }

        return (m_Ticket.TicketUsers[m_Ticket.TickertUserCount].GeoLocationLatRecived, m_Ticket.TicketUsers[m_Ticket.TickertUserCount].GeoLocationLongRecived);
    }
        
	

}