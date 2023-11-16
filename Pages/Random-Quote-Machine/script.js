// I copied the quotes from https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json
const QUOTES = [
	{ text: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse"},
	{ text: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill"},
	{ text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
	{ text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale"},
	{ text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky"},
	{ text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart"},
	{ text: "Every strike brings me closer to the next home run.", author: "Babe Ruth"},
	{ text: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone"},
	{ text: "We must balance conspicuous consumption with conscious capitalism.", author: "Kevin Kruse"},
	{ text: "Life is what happens to you while you’re busy making other plans.", author: "John Lennon"},
	{ text: "We become what we think about.", author: "Earl Nightingale" },
];

function getNewQuote() {
	return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}
	
function getTwitterLink(quote) {
	return 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote.text + '" ' + quote.author);
}

function setNewQuote(){
	const quote = getNewQuote();
	$('#text').html(quote.text);
	$('#author').html(quote.author);
	$('#tweet-quote').attr('href', getTwitterLink(quote));
}

$(document).ready(function() {
	setNewQuote();
	$('#new-quote').on('click', setNewQuote);
});
