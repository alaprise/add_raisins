// Start by seeding the RNG
// I wonder if this works consistently. Probably not. ¯\_(ツ)_/¯
seed = $(location).attr('pathname');

Math.seedrandom(seed);

// 10% chance of happening, *should* be consistent on refresh?
if (Math.random() < 0.1) {
	ingredients = $('ul.recipe-division').first();

	nIngredients = ingredients.children('li').length;
	ingredient_number = Math.floor(Math.random()*nIngredients);
	ingredients.children('li').eq(ingredient_number).after('<li><span>½ cup raisins</span></li>');

	instructions = $('ol.recipe-division').first();

	nInstructions = instructions.children('li').length;
	instruction_number = Math.floor(Math.random()*nInstructions);
	instructions.children('li').eq(instruction_number).after('<li>Add raisins.</li>');
}