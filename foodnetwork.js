// lol what a disaster

// Start by seeding the RNG
// I wonder if this works consistently. Probably not. ¯\_(ツ)_/¯
seed = $(location).attr('pathname');

Math.seedrandom(seed);

// 10% chance of happening, *should* be consistent on refresh?
if (Math.random() < 0.1) {
	ingredient = `
		<p class="o-Ingredients__a-Ingredient">
			<label class="checkbox-text">
			  
			    <input type="checkbox" class="o-Ingredients__a-Ingredient--Checkbox" checked="" value="1/2 cup raisins">
			    <span class="o-Ingredients__a-Ingredient--CheckboxMock"></span>
				<span class="o-Ingredients__a-Ingredient--CheckboxLabel">1/2 cup raisins</span>
			</label>
		</p>
	`
	ingredients = $('.o-Ingredients__m-Body');

	nIngredients = ingredients.children('p').length;
	ingredient_number = Math.floor(Math.random()*nIngredients);
	ingredients.children().eq(ingredient_number).after(ingredient);

	
	instructions = $('.o-Method__m-Body');

	nInstructions = instructions.children('ol').children('li').length;
	instruction_number = Math.floor(Math.random()*nInstructions);
	instructions.children('ol').children('li').eq(instruction_number).after('<li class="o-Method__m-Step"> Add raisins. </li>');
}