$(function(){
  $('#main').submit(function(event){
    event.preventDefault();
    var question1 = $('input:radio[name=q1]:checked').val();
    var question2 = $('input:radio[name=q2]:checked').val();
    var question3 = $('input:radio[name=q3]:checked').val();
    var question4 = $('input:radio[name=q4]:checked').val();
    var question5 = $('input:radio[name=q5]:checked').val();
    var concat = question1 + question2 + question3 + question4 + question5;
    var sorted = concat.split('').sort().join('');
    var match5 = concat.match(/5/g).length;
    var match4 = concat.match(/4/g).length;
    var match3 = concat.match(/3/g).length;
    var match2 = concat.match(/2/g).length;
    var match1 = concat.match(/1/g).length;

    if ( match1 >= 3 ) {

    } else if ( match2 >= 3 ){

    } else if ( match3 >= 3 ){

    } else if ( match4 >= 3 ){

    } else if ( match5 >= 3 ){

    } else if ( match1 = 2 ){

    } else if ( match2 = 2 ){

    } else if ( match3 = 2 ){

    } else if ( match4 = 2 ){

    } else if ( match5 = 2 ){

    };


  });
});
