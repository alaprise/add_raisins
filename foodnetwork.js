// lol what a disaster

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
ingredients.append(ingredient);

instructions = $('.o-Method__m-Body');
instructions.children('ol').children().slice(-2, -1).after('<li class="o-Method__m-Step"> Add raisins. </li>');