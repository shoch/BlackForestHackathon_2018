App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    // Load tickets.
    $.getJSON('../tickets.json', function(data) {
      var ticketsRow = $('#ticketsRow');
      var ticketTemplate = $('#ticketTemplate');

      for (i = 0; i < data.length; i ++) {
        ticketTemplate.find('.panel-title').text(data[i].name);
        ticketTemplate.find('img').attr('src', data[i].picture);
        ticketTemplate.find('.ticket-startDate').text(data[i].startDate);
        ticketTemplate.find('.ticket-endDate').text(data[i].endDate);
        ticketTemplate.find('.ticket-returnDate').text(data[i].returnDate);
        ticketTemplate.find('.btn-get').attr('data-id', data[i].id);

        ticketsRow.append(ticketTemplate.html());
      }
    });

    return App.initWeb3();
  },

  initWeb3: function() {
    /*
     * Replace me...
     */

    return App.initContract();
  },

  initContract: function() {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-get', App.handleAdopt);
  },

  markAdopted: function(adopters, account) {
    /*
     * Replace me...
     */
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var ticketId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
