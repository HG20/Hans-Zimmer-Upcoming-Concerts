var url = 'https://api.songkick.com/api/3.0/artists/251898/calendar.json?apikey=PZiD55EmZZaO4Uid';

$.getJSON(url, function(data) {
  var events = data.resultsPage.results.event;
  console.log(events);
  
  events.forEach(function(item, index, array) {
    var event_month = moment(array[index].start.datetime).format('MMM');
    var event_day = moment(array[index].start.datetime).format('D');
    var event_date = '<span class="month">'+ event_month +'</span><span class="day">'+ event_day +'</span>';
    
    var event_performer = array[index].performance[0].artist.displayName;
    var event_venue = array[index].venue.displayName;
    var event_city = array[index].location.city;
    var event_link = array[index].uri;
    var event_details = '<p>' + event_performer + ' @ ' + event_venue + '</p><p>' + event_city + '</p><p><a href="' + event_link + '">More details</a></p>';
    
    if(event_month != 'Invalid date' && event_day != 'Invalid date') {
      $('.events').append('<li><div class="date">' + event_date + '</div>' + event_details + '</li>');
    }
  });
});
