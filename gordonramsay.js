ingredients = $('ul.recipe-division').first();
ingredients.append('<li><span>½ cup raisins</span></li>');

instructions = $('ol.recipe-division').first();
instructions.children('li').last().before('<li>Add raisins.</li>');