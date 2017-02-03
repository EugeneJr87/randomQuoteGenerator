function getNewQuote(){

	var request = $.ajax({
   	url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?",
   	dataType: "jsonp"
 });
 	request.done(function(result) {
 		$("#quote").html(result[0].content);
 		$("#author").text(result[0].title);
	});

}

$("#new").on("click", function(){
	getNewQuote();
});

getNewQuote();
