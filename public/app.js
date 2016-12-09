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
	console.log(articles);
	$('.newsImg').attr('src',articles[newNum].imgSrc)
  $('.card-title').text(articles[newNum].title)
  $('.card-content').find('p').text(articles[newNum].article)
  $('.pageLink').attr('href', articles[newNum].link)
  $(".pageLink").attr("data-num",newNum)
}