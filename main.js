function getNewQuote(){

	var request = $.ajax({
   	url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?",
   	dataType: "jsonp"
 });
 	request.done(function(result) {
 		// console.log(result[0].content.length);

 		if (result[0].content.length < 600){
 			$("#quote").html(result[0].content);
 			$("#author").text("- " + result[0].title);
 		}else{
 			$("#quote").text("If you can't make it good, at least make it look good");
 			$("#author").text("- " + "Bill Gates");
 		}
 		
 		
	});

}

$("#new").on("click", function(){
	getNewQuote();
});

getNewQuote();

