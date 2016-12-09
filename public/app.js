var articles=[];

$.getJSON("/articles", function(data) {
  articles = data;
  console.log(articles);
  $('.newsImg').attr('src',data[3].imgSrc)
  $('.card-title').text(data[3].title)
  $('.card-content').find('p').text(data[3].article)
  $('.pageLink').find('a').attr('herf', data[3].link)
});