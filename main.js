var quotes = ["A mother’s love for her child is like nothing else in the world. It knows no aw, no pity, it dares all things and crushes down remorselessly all that stands in its path.",
 			  "Family quarrels are bitter things. They don’t go according to any rules. They’re not like aches or wounds, they’re more like splits in the skin that won’t heal because there’s not enough material.",
 			  "The best preparation for tomorrow is doing your best today.",
 			  "Always do your best. What you plant now, you will harvest later.",
 			  "The best thing to hold onto in life is each other." 
]


var author = ["Agatha Christie",
			  "F. Scott Fitzgerald",
			  "H. Jackson Brown, Jr.",
			  "Og Mandino",
			  "Audrey Hepburn"
]


function getRandomQuotes(){

	var newQuotes = Math.floor(Math.random() * quotes.length);
	var authors = newQuotes;

	var newerQuotes = $("#quote").text(quotes[newQuotes]);
	var newerAuthors = $("#author").text(dash + author[authors]);

}

$("#new").on("click", function(){
	getRandomQuotes()
	$(this).css('background-image', 'url(https://source.unsplash.com/random)');

});

$("#quote").fadeIn(1000);
