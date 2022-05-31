// lol what a disaster

// Start by seeding the RNG
recipe_id_regex = /\/recipe\/(\d+)/;

// I wonder if this works consistently. Probably not. ¯\_(ツ)_/¯
seed = $(location).attr('pathname').match(recipe_id_regex)[1];

Math.seedrandom(seed);

// 10% chance of happening, *should* be consistent on refresh?
if (Math.random() < 0.1) {
	// Ingredients
	ingredients = $('.ingredients-section');
	nIngredients = ingredients.children('.ingredients-item').length;

	raisins = ingredients.children('.ingredients-item').last().clone();


	raisins_checkbox = raisins.children("label").children("input");
	raisins_checkbox.attr("data-quantity", "½");
	raisins_checkbox.attr("data-init-quantity", "0.5");
	raisins_checkbox.attr("data-unit", "cup");
	raisins_checkbox.attr("data-ingredient", "raisins");
	raisins_checkbox.attr("data-unit_family", "volumetric");
	raisins_checkbox.attr("data-store_location", "Baking Supplies");
	raisins_checkbox.attr("value", "(15 ounce) package raisins");

	raisins.children("label").children("span").children("span").text("½ cup raisins ");
	raisins.attr("data-id", "5219");

	// Get random index for ingredient
	ingredient_number = Math.floor(Math.random()*nIngredients);
	// Stick it in there
	ingredients.children('.ingredients-item').eq(ingredient_number).after(raisins);

	// Snag the id from an ingredient so we can replicate it for our new ingredient
	ingredient_id_template = ingredients.children().first().children("label").children("input").attr("id").slice(0, -1);

	// AllRecipes uses ids with indices to control the check boxes and update the shopping list
	// Iterate through all ingredients now that the raisins are added and change those indices so that they increment down the list
	ingredients.children().each(function(i, e) {
		$(e).children("label").children("input").attr("id", `${ingredient_id_template}${i}`);
		$(e).children("label").attr("for", `${ingredient_id_template}${i}`);
	});

	// Instructions
	instructions = $('.instructions-section');
	nSteps = instructions.children().length;

	add_raisins = $('.instructions-section-item').last().clone();

	// Random index for adding raisins
	raisins_step = Math.floor(Math.random()*nSteps);

	add_raisins.children("div").children("div").children("p").text("Add raisins.");

	instructions.children().eq(raisins_step).after(add_raisins);

	// Same as above – update the indicies of the ids
	instructions.children().each(function(i, e) {
		$(e).children("label").children("span").children("span").text(`Step ${i+1}`); 
		$(e).children("label").attr("for", `recipe-instructions-label-0-${i}`);
		$(e).children("label").children("input").attr("id", `recipe-instructions-label-0-${i}`);
	});

}