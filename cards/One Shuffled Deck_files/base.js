
function make_card(n) {
    var cards = $("#all-cards .card")
    return $(cards[n % 52]).clone();
}
function make_flipped_card() {
    return $("#card-back").clone();
}
function show_card(n, counter, num_cards) {
    var container = $('#display-card');
    $('#counter').html(counter + " / " + num_cards);
    container.html(make_card(n));
};

function resize() {
    var container = $('#display-card');
    var width = container.width();

    var window_height = $(window).height();
    var top = container.position()['top']
    var height  = window_height - top - 50;

    var font_size = Math.min(
	Math.floor(width / 16),
	Math.floor(height / 22)
    );
	
    mycard = $('#display-card .card');
    mycard.css("fontSize", font_size);
}

	    

function Decks(deck_size) {
    var deck = _.range(0, 52 * deck_size);
    function next() {
	if(deck_size == 0){
	    return Math.floor(Math.random() * 52);
	}
	if(deck.length == 0) {
	    return false;
	}
	deck = _.shuffle(deck);
	return deck.pop();
    }
    return next;
}


$(document).ready(function() {
    var num_decks = window.num_decks;
    var total_cards = num_decks * 52;
    var get_card = Decks(num_decks);
    var counter = 0;
    resize();
    $('#display-card').click(function() {
	var random_card = get_card();
	counter++;
	if(random_card !== false) {
	    show_card(random_card, counter, total_cards);
	    resize();

	}
    });
})

