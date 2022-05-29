// lol what a disaster

// Start by seeding the RNG
recipe_id_regex = /\/recipe\/(\d+)/;

// I wonder if this works consistently. Probably not. ¯\_(ツ)_/¯
seed = $(location).attr('pathname').match(recipe_id_regex)[1];

Math.seedrandom(seed);

// 10% chance of happening, *should* be consistent on refresh?
if (Math.random() < 0.1) {
	ingredients = $('.ingredients-section');
	ingredients.append($('.ingredients-item').last().clone());
	raisins = ingredients.children().last();

	raisins_id = raisins.children("label").children("input").attr("id");
	raisins_id = raisins_id.slice(0, -1) + (parseInt(raisins_id.slice(-1)) + 1);
	raisins.children("label").children("input").attr("id", raisins_id);
	raisins.children("label").attr("for", raisins_id);

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


	instructions = $('.instructions-section');
	nSteps = instructions.children().length;

	add_raisins = $('.instructions-section-item').last();

	copy = add_raisins.clone();

	copy_id = copy.children("label").children("input").attr("id");
	copy_id = copy_id.slice(0, -1) + (parseInt(copy_id.slice(-1)) + 1);

	copy.children("label").children("input").attr("id", copy_id);
	copy.children("label").attr("for", copy_id);

	number_regex = /\d+/;
	copy_text = copy.children("label").children("span").children("span").text();
	copy_text_step = parseInt(copy_text.match(number_regex)) + 1;
	copy_text = copy_text.replace(number_regex, copy_text_step);
	copy.children("label").children("span").children("span").text(copy_text);

	instructions.append(copy);

	add_raisins.children("div").children("div").children("p").text("Add raisins.")

}