function bakeCake() {
  console.log("Starting the cake baking process...");

  prepareBatter().then((batter) => {
    bakeBatter(batter).then((cake) => {
      const frostedCake = frostCake(cake);

      console.log("Cake baking process completed!");
      console.log("Final Cake:", JSON.stringify(frostedCake));
    });
  });
}

function prepareBatter() {
  console.log("Preparing cake batter...");
  const flour = measureIngredients("flour", 2);
  const sugar = measureIngredients("sugar", 1);
  const eggs = measureIngredients("eggs", 3);
  const butter = measureIngredients("butter", 0.5);
  return (batterPromise = mixIngredients([flour, sugar, eggs, butter]).then(
    (batter) => {
      return batter;
    }
  ));
}

function measureIngredients(ingredient, quantity) {
  console.log(`Measuring ${quantity} cups of ${ingredient}`);
  return {
    ingredient,
    quantity,
  };
}

function mixIngredients(ingredients) {
  console.log("Mixing ingredients together...");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mixing complete!");
      const mixedBatter = {
        mixture: ingredients,
        consistency: "smooth",
      };
      resolve(mixedBatter);
    }, 3000);
  });
}

function bakeBatter(batter) {
  console.log("Baking the batter...");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Baking complete!");
      const bakedCake = {
        batter: batter,
        status: "baked",
      };
      resolve(bakedCake);
    }, 5000);
  });
}

function frostCake(cake) {
  if (cake.status != "baked") {
    throw new Error("Cake is not baked!!! Gooey! Mush!");
  }
  console.log("Frosting the cake...");

  (cake["status"] = "frosted"), (cake["decoration"] = "sprinkles");

  const frostedCake = cake;
  return frostedCake;
}

bakeCake();
