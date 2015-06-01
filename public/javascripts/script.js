var messages =
[
	'1. Che tu possa avere sempre il vento in poppa, che il sole ti risplenda in viso e che il vento del destino ti porti in alto a danzare con le stelle.',
	'2. Auguri!',
	'3. Auguri #nomedelfesteggiato',
	'4. Happy Birthday',
	'5. Tanti auguri',
	'6. Un milione di questi giorni!',
	'7. Milioni di auguri!',
	'8. Che tu possa avere sempre il vento in poppa, che il sole ti risplenda in viso e che il vento del destino ti porti in alto a danzare con le stelle.',
	'9. Tanti tanti auguri!'
];

function getRandomGreetingMessage() {
	return messages[Math.floor(Math.random()*messages.length)];
}
$( "#genera" ).click(function() {
	$( "#greetingsMessageIntro").text("Il messaggio d'auguri generato per te é:");	
	$( "#greetingsMessage").text(getRandomGreetingMessage());
});