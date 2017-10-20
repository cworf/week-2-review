$(function(){

  $('#lead').submit(function(event){
    event.preventDefault();
    fName = $('#f-name').val;
    email = $('#email').val;
    if (fname && email){
      $('#q1').addClass('slide');
    } else {
      alert("Sorry you must enter a name and email to continue")
    }
  });

  $('#main').submit(function(event){
    event.preventDefault();
    var question1 = $('input:radio[name=q1]:checked').val();
    var question2 = $('input:radio[name=q2]:checked').val();
    var question3 = $('input:radio[name=q3]:checked').val();
    var question4 = $('input:radio[name=q4]:checked').val();
    var question5 = $('input:radio[name=q5]:checked').val();

    var concat = question1 + question2 + question3 + question4 + question5;
    var sorted = concat.split('').sort().join('');

    var match5 = function(){
      if (concat.match(/5/g)) {
        return concat.match(/5/g).length;
      };
    };
    var match4 = function(){
      if (concat.match(/4/g)) {
        return concat.match(/4/g).length;
      };
    };
    var match3 = function(){
      if (concat.match(/3/g)) {
        return concat.match(/3/g).length;
      };
    };
    var match2 = function(){
      if (concat.match(/2/g)) {
        return concat.match(/2/g).length;
      };
    };
    var match1 = function(){
      if (concat.match(/1/g)) {
        return concat.match(/1/g).length;
      };
    };
    if ( match1() >= 3 ) {
      $('#result-title, #class-name').text("Design/CSS");
      $('#info').attr("href", "https://www.epicodus.com/design");
      $('.card').addClass('show');
    } else if ( match2() >= 3 ){
      $('#result-title, #class-name').text("Ruby");
      $('#info').attr("href", "https://www.epicodus.com/ruby");
      $('.card').addClass('show');
    } else if ( match3() >= 3 ){
      $('#result-title, #class-name').text("PHP");
      $('#info').attr("href", "https://www.epicodus.com/php");
      $('.card').addClass('show');
    } else if ( match4() >= 3 ){
      $('#result-title, #class-name').text("Java");
      $('#info').attr("href", "https://www.epicodus.com/java");
      $('.card').addClass('show');
    } else if ( match5() >= 3 ){
      $('#result-title, #class-name').text("C#");
      $('#info').attr("href", "https://www.epicodus.com/c-sharp");
      $('.card').addClass('show');
    } else if ( match1() === 2 ){
      $('#result-title, #class-name').text("Design/CSS");
      $('#info').attr("href", "https://www.epicodus.com/design");
      $('.card').addClass('show');
    } else if ( match2() === 2 ){
      $('#result-title, #class-name').text("Ruby");
      $('#info').attr("href", "https://www.epicodus.com/ruby");
      $('.card').addClass('show');
    } else if ( match3() === 2 ){
      $('#result-title, #class-name').text("PHP");
      $('#info').attr("href", "https://www.epicodus.com/php");
      $('.card').addClass('show');
    } else if ( match4() === 2 ){
      $('#result-title, #class-name').text("Java");
      $('#info').attr("href", "https://www.epicodus.com/java");
      $('.card').addClass('show');
    } else if ( match5() === 2 ){
      $('#result-title, #class-name').text("C#");
      $('#info').attr("href", "https://www.epicodus.com/c-sharp");
      $('.card').addClass('show');
    } else {
      alert("Results inconclusive, please select better choices to enrole, you have 3 more chances");
    };
  });

  $('.question input:radio').click(function () {
        $(this).closest('.question').next().addClass("slide");
    });

});
