$(document).ready(function(){
  $("form#info").submit(function(event){
    event.preventDefault()
    var firstName=$("#firstName").val();
    var lastName=$("#lastName").val();
    var description=$("#description").val();
    var date=$("#date").val();
    var start=$("#start").val();
    var end=$("#end").val();

    $("#show").show();
    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".description").text(description);
    $(".date").text(date);
    $(".start").text(start);
    $(".end").text(end);

  });
});
