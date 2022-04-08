// Get the current date.
var today = moment().format('dddd, MMMM Do')

//JQuery to append current date.
$('#currentDay').append(today);

// var $table = $('<table/>');
// for(var i=9; i<18; i++){
//     $table.append( '<tr><td>' + 'Hour ' +  i + '</td></tr>' );
// }
// $('.container').append($table);