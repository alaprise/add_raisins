// This is the worst code I've ever written

ingredients = $('.wprm-recipe-ingredients').first();
raisins = ingredients.children('li').last().clone();

if (raisins.children('.wprm-recipe-ingredient-amount').length === 0) {
	// lololol I'm horrible at everything
    raisins.prepend('<span class="wprm-recipe-ingredient-amount">1/2 </span>');
}
else {
    raisins.children('.wprm-recipe-ingredient-amount').text('1/2');
}

if (raisins.children('.wprm-recipe-ingredient-unit').length === 0) {
	// lololol I'm horrible at everything
    raisins.children('.wprm-recipe-ingredient-amount').after('<span class="wprm-recipe-ingredient-unit">cup </span>');
}
else {
    raisins.children('.wprm-recipe-ingredient-unit').text('cup');
}

raisins.children('.wprm-recipe-ingredient-name').text('raisins');
ingredients.append(raisins);

instructions = $('.wprm-recipe-instructions').first();
nSteps = instructions.children('li').length;
last = instructions.children('li').last();

add_raisins = last.clone();
add_raisins.children('div').children('span').text('Add raisins.');
last.before(add_raisins);

last_id = last.attr("id");
last_id = last_id.slice(0, -1) + (parseInt(last_id.slice(-1)) + 1);
last.attr("id", last_id);



