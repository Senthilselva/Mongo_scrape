var articles=[];

$.getJSON("/articles", function(data) {
  articles = data;
  console.log(articles);
  populateCard(2);
});

$('.nextArticle').on("click", function(){
	var currentNum = $(".pageLink").attr("data-num");
	populateCard(parseInt(currentNum)+1);
})

var populateCard = function(newNum){
	//console.log(articles);
  $('.newsImg').attr('src',articles[newNum].imgSrc);
  $('.card-title').text(articles[newNum].title);
  $('.card-content').find('p').text(articles[newNum].article);
  $('.pageLink').attr('href', articles[newNum].link);
  $(".pageLink").attr("data-num",newNum);
  $('.saveNotes').attr("data-id",articles[newNum]._id);
}

$('.saveNotes').on('click',function(){
	//console.log($('.saveNotes').attr("data-id"));
	var artId = $('.saveNotes').attr("data-id");
// Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + artId,
    data: {
      // Value taken from title input
      note: $("#noteInput").val()
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#notes").empty();
    });	
})