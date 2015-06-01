var messages =
[
	'1. Che tu possa avere sempre il vento in poppa, che il sole ti risplenda in viso e che il vento del destino ti porti in alto a danzare con le stelle.',
	'2. Auguri!',
	'3. Auguri #nomedelfesteggiato',
	'4. Happy Birthday'
];

function getRandomGreetingMessage() {
	return messages[Math.floor(Math.random()*messages.length)];
}
$( "#genera" ).click(function() {
	$( "#greetingsMessageIntro").text("Il messaggio d'auguri generato per te é:");	
	$( "#greetingsMessage").text(getRandomGreetingMessage());
});