requirejs.config({
	baseUrl: 'js/out'
})

require([ 'circle', 'human', 'superhuman' ], function ( circle, Human, SuperHuman ) {
	console.log('modules are ready!');
	console.log(circle, Human);
	var joe = new Human.Human( 'Joe', 'Doe' )
});
