$(function(){
  $('#lead').submit(function(event){
    event.preventDefault();
    var firstName = $('#f-name').val();
    var email = $('#email').val();
    $('#q1').addClass('slide');
    $('.form-box').addClass('clicked');
    $('#student').text(firstName);
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
      $('.result').addClass('show');
    } else if ( match2() >= 3 ){
      $('#result-title, #class-name').text("Ruby");
      $('#info').attr("href", "https://www.epicodus.com/ruby");
      $('.result').addClass('show');
    } else if ( match3() >= 3 ){
      $('#result-title, #class-name').text("PHP");
      $('#info').attr("href", "https://www.epicodus.com/php");
      $('.result').addClass('show');
    } else if ( match4() >= 3 ){
      $('#result-title, #class-name').text("Java");
      $('#info').attr("href", "https://www.epicodus.com/java");
      $('.result').addClass('show');
    } else if ( match5() >= 3 ){
      $('#result-title, #class-name').text("C#");
      $('#info').attr("href", "https://www.epicodus.com/c-sharp");
      $('.result').addClass('show');
    } else if ( match1() === 2 ){
      $('#result-title, #class-name').text("Design/CSS");
      $('#info').attr("href", "https://www.epicodus.com/design");
      $('.result').addClass('show');
    } else if ( match2() === 2 ){
      $('#result-title, #class-name').text("Ruby");
      $('#info').attr("href", "https://www.epicodus.com/ruby");
      $('.result').addClass('show');
    } else if ( match3() === 2 ){
      $('#result-title, #class-name').text("PHP");
      $('#info').attr("href", "https://www.epicodus.com/php");
      $('.result').addClass('show');
    } else if ( match4() === 2 ){
      $('#result-title, #class-name').text("Java");
      $('#info').attr("href", "https://www.epicodus.com/java");
      $('.result').addClass('show');
    } else if ( match5() === 2 ){
      $('#result-title, #class-name').text("C#");
      $('#info').attr("href", "https://www.epicodus.com/c-sharp");
      $('.result').addClass('show');
    } else {
      alert("Results inconclusive, please select better choices to enrole, you have 3 more chances");
    };
  });

  $('.question input:radio').click(function () {
    $(this).closest('.question').next().addClass("slide");
    $('html,body').animate({ scrollTop: 9999 }, 'slow');
  });

  $('#q5 input:radio').click(function () {
    $("#main button").addClass("slide-right");
  });

  $('button').click(function () {
    $(this).removeClass("slide-right");
  });

  $('#main label').click(function(){
    $(this).addClass('checked');
    $(this).siblings().removeClass('checked');
  });

  $('.close').click(function() {
    $('.result').removeClass('show');
  })

});
