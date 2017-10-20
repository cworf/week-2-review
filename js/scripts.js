$(function(){
  $('#main').submit(function(event){
    event.preventDefault();
    val f-name = $('#f-name').val
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

    $('#student').text(name);

    if ( match1 >= 3 ) {
      $('#result-title, #class-name').text("Design/CSS");
      $('#info').attr("href", "https://www.epicodus.com/design");
    } else if ( match2 >= 3 ){
      $('#result-title, #class-name').text("Ruby");
      $('#info').attr("href", "https://www.epicodus.com/ruby");
    } else if ( match3 >= 3 ){
      $('#result-title, #class-name').text("PHP");
      $('#info').attr("href", "https://www.epicodus.com/php");
    } else if ( match4 >= 3 ){
      $('#result-title, #class-name').text("Java");
      $('#info').attr("href", "https://www.epicodus.com/java");
    } else if ( match5 >= 3 ){
      $('#result-title, #class-name').text("C#");
      $('#info').attr("href", "https://www.epicodus.com/c-sharp");
    } else if ( match1 = 2 ){
      $('#result-title, #class-name').text("Design/CSS");
      $('#info').attr("href", "https://www.epicodus.com/design");
    } else if ( match2 = 2 ){
      $('#result-title, #class-name').text("Ruby");
      $('#info').attr("href", "https://www.epicodus.com/ruby");
    } else if ( match3 = 2 ){
      $('#result-title, #class-name').text("PHP");
      $('#info').attr("href", "https://www.epicodus.com/php");
    } else if ( match4 = 2 ){
      $('#result-title, #class-name').text("Java");
      $('#info').attr("href", "https://www.epicodus.com/java");
    } else if ( match5 = 2 ){
      $('#result-title, #class-name').text("C#");
      $('#info').attr("href", "https://www.epicodus.com/c-sharp");
    } else {
      alert("Results inconclusive, please select better choices to enrole, you have 3 more chances")
    };


  });
});
