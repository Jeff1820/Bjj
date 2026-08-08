/* Meal Plan tab (adults 18+): calorie/macro targets and generated example meals.
 * Calories can be calculated (Mifflin-St Jeor) or set directly; meals can be
 * weighted by percentage; proteins and cuisines are selectable. Educational
 * content, not medical advice. Stored per athlete profile. */

const MEALS_KEY = "bjj-meal";
const MEALS_DAY_KEY = "bjj-mealday";
const MEALS_ADULT_KEY = "bjj-meals-adult";
const CAL_FLOOR = 1400; // safety floor — never plan below this

/* Per-100g macros (protein, fat, carbs). */
const FOODS = {
  chicken: { name: "chicken breast", p: 31, f: 3.6, c: 0 },
  steak: { name: "sirloin steak", p: 27, f: 8, c: 0 },
  groundbeef: { name: "lean ground beef", p: 26, f: 10, c: 0 },
  pork: { name: "pork loin", p: 27, f: 6, c: 0 },
  turkey: { name: "turkey breast", p: 29, f: 1, c: 0 },
  fish: { name: "salmon", p: 20, f: 13, c: 0 },
  whitefish: { name: "cod or tilapia", p: 18, f: 0.7, c: 0 },
  tuna: { name: "tuna", p: 26, f: 1, c: 0 },
  shrimp: { name: "shrimp", p: 24, f: 0.3, c: 0.2 },
  eggs: { name: "eggs", p: 13, f: 11, c: 1 },
  tofu: { name: "firm tofu", p: 14, f: 8, c: 2 },
  yogurt: { name: "nonfat Greek yogurt", p: 10, f: 0.4, c: 4 },
  rice: { name: "cooked rice", p: 2.7, f: 0.3, c: 28 },
  potato: { name: "roasted potatoes", p: 2, f: 0.1, c: 17 },
  pasta: { name: "cooked pasta", p: 5, f: 1.1, c: 25 },
  noodles: { name: "cooked noodles", p: 5, f: 1, c: 25 },
  couscous: { name: "cooked couscous", p: 3.8, f: 0.2, c: 23 },
  tortilla: { name: "corn tortillas", p: 5.7, f: 2.8, c: 44 },
  oats: { name: "dry oats", p: 13, f: 7, c: 68 },
  veg: { name: "mixed vegetables", p: 2, f: 0.2, c: 7 },
  beans: { name: "black beans", p: 6, f: 0.5, c: 16 },
  salsa: { name: "salsa", p: 1, f: 0.2, c: 7 },
  avocado: { name: "avocado", p: 2, f: 15, c: 9 },
  marinara: { name: "marinara sauce", p: 1.5, f: 1.5, c: 7 },
  parmesan: { name: "parmesan", p: 35, f: 28, c: 4 },
  hummus: { name: "hummus", p: 8, f: 10, c: 14 },
  berries: { name: "berries", p: 0.7, f: 0.3, c: 14 },
  teriyaki: { name: "teriyaki sauce", p: 2, f: 0, c: 16 },
  curry: { name: "coconut curry sauce", p: 1, f: 17, c: 6 },
  yogsauce: { name: "yogurt sauce", p: 6, f: 3, c: 5 },
  kimchi: { name: "kimchi", p: 2, f: 0.5, c: 4 },
  gochujang: { name: "gochujang sauce", p: 2, f: 1, c: 25 },
  peanuts: { name: "crushed peanuts", p: 26, f: 49, c: 16 },
  naan: { name: "naan bread", p: 9, f: 10, c: 50 },
  pita: { name: "pita bread", p: 9, f: 1.2, c: 55 },
  bbq: { name: "BBQ sauce", p: 0.8, f: 0.6, c: 40 },
  cornbread: { name: "cornbread", p: 7, f: 10, c: 43 },
};

const PROTEIN_CHOICES = {
  chicken: "Chicken",
  steak: "Steak",
  groundbeef: "Ground beef",
  pork: "Pork",
  turkey: "Turkey",
  fish: "Salmon",
  whitefish: "White fish",
  tuna: "Tuna",
  shrimp: "Shrimp",
  eggs: "Eggs",
  tofu: "Tofu",
};

const CUISINES = {
  american: {
    label: "American",
    dishes: [
      { n: "Grilled {P} plate", c: "potato", x: [["veg", 150]] },
      { n: "{P} rice bowl", c: "rice", x: [["veg", 150]] },
    ],
  },
  mexican: {
    label: "Mexican",
    dishes: [
      { n: "{P} burrito bowl", c: "rice", x: [["beans", 100], ["salsa", 50]] },
      { n: "{P} tacos", c: "tortilla", x: [["salsa", 50], ["avocado", 40]] },
    ],
  },
  italian: {
    label: "Italian",
    dishes: [
      { n: "{P} pasta marinara", c: "pasta", x: [["marinara", 120]] },
      { n: "{P} with risotto-style rice", c: "rice", x: [["parmesan", 15], ["veg", 100]] },
    ],
  },
  chinese: {
    label: "Chinese",
    dishes: [
      { n: "{P} stir-fry with rice", c: "rice", x: [["veg", 150]] },
      { n: "{P} noodle bowl", c: "noodles", x: [["veg", 120]] },
    ],
  },
  mediterranean: {
    label: "Mediterranean",
    dishes: [
      { n: "{P} couscous bowl", c: "couscous", x: [["hummus", 50], ["veg", 120]] },
      { n: "{P} with potatoes & veg", c: "potato", x: [["veg", 150]] },
    ],
  },
  japanese: {
    label: "Japanese",
    dishes: [
      { n: "{P} teriyaki bowl", c: "rice", x: [["teriyaki", 40], ["veg", 100]] },
      { n: "{P} donburi rice bowl", c: "rice", x: [["veg", 120]] },
    ],
  },
  thai: {
    label: "Thai",
    dishes: [
      { n: "Thai {P} coconut curry with jasmine rice", c: "rice", x: [["curry", 100], ["veg", 100]] },
      { n: "Pad-thai-style {P} noodles", c: "noodles", x: [["veg", 100], ["peanuts", 15]] },
    ],
  },
  indian: {
    label: "Indian",
    dishes: [
      { n: "{P} curry with basmati rice", c: "rice", x: [["curry", 100], ["veg", 100]] },
      { n: "Tandoori-style {P} with naan", c: "naan", x: [["yogsauce", 50], ["veg", 100]] },
    ],
  },
  korean: {
    label: "Korean",
    dishes: [
      { n: "{P} bulgogi rice bowl", c: "rice", x: [["kimchi", 60], ["veg", 100]] },
      { n: "Bibimbap-style {P} bowl", c: "rice", x: [["gochujang", 20], ["veg", 150]] },
    ],
  },
  middleeastern: {
    label: "Middle Eastern",
    dishes: [
      { n: "{P} shawarma plate with pita", c: "pita", x: [["hummus", 50], ["veg", 100]] },
      { n: "{P} kebab rice plate", c: "rice", x: [["yogsauce", 50], ["veg", 120]] },
    ],
  },
  bbq: {
    label: "BBQ/Southern",
    dishes: [
      { n: "BBQ {P} plate with cornbread", c: "cornbread", x: [["bbq", 40], ["veg", 120]] },
      { n: "Smoked {P} with potatoes", c: "potato", x: [["bbq", 40], ["veg", 120]] },
    ],
  },
};

function kcalOf(food, grams) {
  return ((food.p * 4 + food.c * 4 + food.f * 9) * grams) / 100;
}

function mealSettings() {
  try {
    return JSON.parse(localStorage.getItem(MEALS_KEY + "::" + ACTIVE_PROFILE.id));
  } catch {
    return null;
  }
}

function saveMealSettings(s) {
  localStorage.setItem(MEALS_KEY + "::" + ACTIVE_PROFILE.id, JSON.stringify(s));
}

function computeTargets(s) {
  const kg = s.unit === "lb" ? s.weight / 2.2046 : s.weight;
  let calories;
  if (s.calMode === "custom" && s.customCal > 0) {
    calories = Math.round(s.customCal);
  } else {
    const cm = s.unit === "lb" ? s.height * 2.54 : s.height;
    const bmr = 10 * kg + 6.25 * cm - 5 * s.age + (s.sex === "m" ? 5 : -161);
    calories = Math.round(bmr * s.activity + s.goal);
  }
  let floored = false;
  if (calories < CAL_FLOOR) {
    calories = CAL_FLOOR;
    floored = true;
  }
  const protein = Math.round(kg * 2);
  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.max(0, Math.round((calories - protein * 4 - fat * 9) / 4));
  return { calories, protein, fat, carbs, floored };
}

/* Scale one dish to a meal's calorie/protein share. */
function buildDish(dish, proteinKey, mealKcal, mealProtein) {
  const pFood = FOODS[proteinKey];
  const cFood = FOODS[dish.c];
  const pGrams = Math.max(0, Math.round(((mealProtein / pFood.p) * 100) / 10) * 10);
  let used = kcalOf(pFood, pGrams);
  const parts = [`${pGrams}g ${pFood.name}`];
  for (const [xKey, xGrams] of dish.x) {
    used += kcalOf(FOODS[xKey], xGrams);
    parts.push(`${xGrams}g ${FOODS[xKey].name}`);
  }
  const cGrams = Math.max(0, Math.round(((mealKcal - used) / kcalOf(cFood, 100)) * 100 / 10) * 10);
  parts.splice(1, 0, `${cGrams}g ${cFood.name}`);
  return `${dish.n.replace("{P}", pFood.name)}: ${parts.join(" + ")}`;
}

function mealDayState(mealCount) {
  const today = new Date().toISOString().slice(0, 10);
  let day;
  try {
    day = JSON.parse(localStorage.getItem(MEALS_DAY_KEY + "::" + ACTIVE_PROFILE.id));
  } catch {}
  if (!day || day.date !== today || day.checks.length !== mealCount) {
    day = { date: today, checks: new Array(mealCount).fill(false) };
  }
  return day;
}

function saveMealDay(day) {
  localStorage.setItem(MEALS_DAY_KEY + "::" + ACTIVE_PROFILE.id, JSON.stringify(day));
}

function mealLabel(i, count) {
  if (count === 3) return ["Breakfast", "Lunch", "Dinner"][i];
  if (count === 4) return ["Breakfast", "Lunch", "Dinner", "Snack"][i];
  if (count === 5) return ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"][i] + (i === 1 ? " 1" : i === 3 ? " 2" : "");
  return "Meal " + (i + 1);
}

function renderMeals() {
  const host = document.getElementById("belt-panel");
  if (!host || state.view !== "meals") return;

  if (!localStorage.getItem(MEALS_ADULT_KEY)) {
    host.innerHTML = `
      <div class="panel-body meals-body">
        <div class="meals-agegate">
          <h2>🍎 Meal Plan</h2>
          <p>This section builds calorie targets and example meals around your training.
             It is for <strong>adults 18+</strong> and is educational only — not medical or
             dietetic advice. Athletes under 18 should talk to a parent, coach, and
             healthcare professional about nutrition.</p>
          <button class="signup-btn" id="meals-confirm-age">I'm 18 or older — continue</button>
        </div>
      </div>`;
    document.getElementById("meals-confirm-age").onclick = () => {
      localStorage.setItem(MEALS_ADULT_KEY, "1");
      render();
    };
    return;
  }

  const s = mealSettings();
  const imperial = !s || s.unit === "lb";
  const mealsCount = s?.meals || 3;
  const proteins = s?.proteins || Object.keys(PROTEIN_CHOICES);
  const cuisines = s?.cuisines || Object.keys(CUISINES);

  host.innerHTML = `
    <div class="panel-body meals-body">
      <div class="meals-head">
        <h2>🍎 Meal Plan${s ? "" : " — set up your plan"}</h2>
        <button type="button" class="lift-unit" id="meals-unit">${imperial ? "lb/in" : "kg/cm"}</button>
      </div>
      <form id="meals-form" class="meals-form" data-unit="${imperial ? "lb" : "kg"}">
        <label>Calories
          <select name="calMode">
            <option value="auto">Calculate for me</option>
            <option value="custom">I'll set them</option>
          </select></label>
        <label id="customcal-wrap">Daily kcal target
          <input name="customCal" type="number" min="0" max="10000" step="50" placeholder="e.g. 2300" /></label>
        <label>Sex
          <select name="sex"><option value="m">Male</option><option value="f">Female</option></select></label>
        <label>Age <input name="age" type="number" min="18" max="99" required /></label>
        <label>Weight (<span id="unit-w">${imperial ? "lb" : "kg"}</span>) <input name="weight" type="number" min="1" step="any" required /></label>
        <label>Height (<span id="unit-h">${imperial ? "in" : "cm"}</span>) <input name="height" type="number" min="1" step="any" required /></label>
        <label>Activity
          <select name="activity">
            <option value="1.2">Mostly sitting</option>
            <option value="1.375">Train 1-3x/week</option>
            <option value="1.55" selected>Train 3-5x/week</option>
            <option value="1.725">Train 6-7x/week</option>
          </select></label>
        <label>Goal
          <select name="goal">
            <option value="-500">Lean out (moderate)</option>
            <option value="0" selected>Maintain</option>
            <option value="300">Build (lean gain)</option>
          </select></label>
        <label>Meals/day
          <select name="meals">${[1, 2, 3, 4, 5].map((n) => `<option ${n === mealsCount ? "selected" : ""}>${n}</option>`).join("")}</select></label>
      </form>
      <div class="meals-split" id="meals-split"></div>
      <div class="meals-prefs">
        <fieldset><legend>Proteins</legend>
          ${Object.entries(PROTEIN_CHOICES).map(([k, label]) => `
            <label><input type="checkbox" name="protein" value="${k}" ${proteins.includes(k) ? "checked" : ""}/> ${label}</label>`).join("")}
        </fieldset>
        <fieldset><legend>Cuisines</legend>
          ${Object.entries(CUISINES).map(([k, c]) => `
            <label><input type="checkbox" name="cuisine" value="${k}" ${cuisines.includes(k) ? "checked" : ""}/> ${c.label}</label>`).join("")}
        </fieldset>
      </div>
      <button class="signup-btn" id="meals-generate">Generate my meal plan</button>
      <div id="meals-plan"></div>
      <p class="meals-disclaimer">Educational estimates only (Mifflin-St Jeor formula; portions are
         cooked-weight approximations). Not medical, dietetic, or supplement advice — consult a
         qualified professional for individual guidance, and never plan aggressive deficits.</p>
    </div>`;

  const form = document.getElementById("meals-form");
  const splitHost = document.getElementById("meals-split");

  const renderSplits = (count, values) => {
    const even = Math.round(100 / count);
    const vals = values && values.length === count ? values : new Array(count).fill(even);
    splitHost.innerHTML = `<span class="split-label">Meal split (%)</span>` +
      vals.map((v, i) => `
        <label class="split-input">${mealLabel(i, count)}
          <input type="number" min="0" max="100" value="${v}" data-split="${i}" /></label>`).join("");
  };
  renderSplits(mealsCount, s?.splits);

  form.meals.onchange = () => renderSplits(parseInt(form.meals.value, 10), null);
  const syncCalMode = () => {
    document.getElementById("customcal-wrap").style.display = form.calMode.value === "custom" ? "" : "none";
  };
  form.calMode.onchange = syncCalMode;

  if (s) {
    form.calMode.value = s.calMode || "auto";
    if (s.customCal) form.customCal.value = s.customCal;
    form.sex.value = s.sex;
    form.age.value = s.age;
    form.weight.value = s.weight;
    form.height.value = s.height;
    form.activity.value = String(s.activity);
    form.goal.value = String(s.goal);
  }
  syncCalMode();

  document.getElementById("meals-unit").onclick = () => {
    const toMetric = form.dataset.unit === "lb";
    const w = parseFloat(form.weight.value);
    const h = parseFloat(form.height.value);
    if (w > 0) form.weight.value = toMetric ? Math.round(w / 2.2046 * 10) / 10 : Math.round(w * 2.2046 * 10) / 10;
    if (h > 0) form.height.value = toMetric ? Math.round(h * 2.54 * 10) / 10 : Math.round(h / 2.54 * 10) / 10;
    form.dataset.unit = toMetric ? "kg" : "lb";
    document.getElementById("unit-w").textContent = toMetric ? "kg" : "lb";
    document.getElementById("unit-h").textContent = toMetric ? "cm" : "in";
    document.getElementById("meals-unit").textContent = toMetric ? "kg/cm" : "lb/in";
    const saved = mealSettings();
    if (saved && !saved.incomplete) {
      saved.weight = toMetric ? Math.round(saved.weight / 2.2046 * 10) / 10 : Math.round(saved.weight * 2.2046 * 10) / 10;
      saved.height = toMetric ? Math.round(saved.height * 2.54 * 10) / 10 : Math.round(saved.height / 2.54 * 10) / 10;
      saved.unit = toMetric ? "kg" : "lb";
      saveMealSettings(saved);
    }
  };

  document.getElementById("meals-generate").onclick = () => {
    if (!form.reportValidity()) return;
    let splits = [...splitHost.querySelectorAll("[data-split]")].map((el) => Math.max(0, parseFloat(el.value) || 0));
    const sum = splits.reduce((a, b) => a + b, 0) || 1;
    splits = splits.map((v) => v / sum);
    const chosenProteins = [...document.querySelectorAll('[name="protein"]:checked')].map((el) => el.value);
    const chosenCuisines = [...document.querySelectorAll('[name="cuisine"]:checked')].map((el) => el.value);
    const settings = {
      unit: form.dataset.unit,
      calMode: form.calMode.value,
      customCal: parseInt(form.customCal.value, 10) || 0,
      sex: form.sex.value,
      age: parseInt(form.age.value, 10),
      weight: parseFloat(form.weight.value),
      height: parseFloat(form.height.value),
      activity: parseFloat(form.activity.value),
      goal: parseInt(form.goal.value, 10),
      meals: parseInt(form.meals.value, 10),
      splits: splits.map((v) => Math.round(v * 100)),
      proteins: chosenProteins.length ? chosenProteins : Object.keys(PROTEIN_CHOICES),
      cuisines: chosenCuisines.length ? chosenCuisines : Object.keys(CUISINES),
    };
    saveMealSettings(settings);
    render();
  };

  if (s && !s.incomplete && s.weight > 0) renderMealPlan(s);
}

function renderMealPlan(s) {
  const t = computeTargets(s);
  const splits = (s.splits && s.splits.length === s.meals ? s.splits : new Array(s.meals).fill(100 / s.meals))
    .map((v) => v / (s.splits ? s.splits.reduce((a, b) => a + b, 0) : 100));
  const day = mealDayState(s.meals);

  // Rotate through every cuisine x protein combination for variety.
  const combos = [];
  for (const c of s.cuisines) for (const p of s.proteins) combos.push([c, p]);

  const el = document.getElementById("meals-plan");
  el.innerHTML = `
    ${t.floored ? '<p class="meals-floor">Your target came out very low, so the plan uses a 1,400 kcal safety floor. Consider professional guidance before dieting harder than this.</p>' : ""}
    <div class="meals-stats">
      <div><strong>${t.calories.toLocaleString()}</strong><span>kcal/day${s.calMode === "custom" ? " (your target)" : ""}</span></div>
      <div><strong>${t.protein}g</strong><span>protein</span></div>
      <div><strong>${t.carbs}g</strong><span>carbs</span></div>
      <div><strong>${t.fat}g</strong><span>fat</span></div>
    </div>
    <div class="meals-grid">
      ${Array.from({ length: s.meals }, (_, i) => {
        const mealKcal = Math.round(t.calories * splits[i]);
        const mealProtein = Math.round(t.protein * splits[i]);
        const options = [0, 1].map((k) => {
          const [cKey, pKey] = combos[(i * 2 + k) % combos.length];
          const dish = CUISINES[cKey].dishes[(i + k) % CUISINES[cKey].dishes.length];
          return `<li><em>${CUISINES[cKey].label}:</em> ${buildDish(dish, pKey, mealKcal, mealProtein)}</li>`;
        });
        if (i === 0 && s.meals >= 3) {
          const pG = Math.round(((mealProtein * 0.6) / FOODS.yogurt.p) * 100 / 10) * 10;
          options.push(`<li><em>Breakfast classic:</em> ${pG}g Greek yogurt + 80g dry oats + 100g berries</li>`);
        }
        return `
          <div class="meal-card ${day.checks[i] ? "done" : ""}">
            <label class="meal-check"><input type="checkbox" data-i="${i}" ${day.checks[i] ? "checked" : ""}/>
              <strong>${mealLabel(i, s.meals)}</strong> · ${Math.round(splits[i] * 100)}% · ~${mealKcal} kcal · ${mealProtein}g protein</label>
            <ul>${options.join("")}</ul>
          </div>`;
      }).join("")}
    </div>
    <p class="meals-note">Pick either option per meal — portions are scaled to that meal's calorie and
       protein share. Swap equivalent proteins/carbs freely; add sauces and cooking oil mindfully
       (each tablespoon of oil is ~120 kcal).</p>`;

  el.querySelectorAll(".meal-check input").forEach((box) => {
    box.onchange = () => {
      const d = mealDayState(s.meals);
      d.checks[parseInt(box.dataset.i, 10)] = box.checked;
      saveMealDay(d);
      box.closest(".meal-card").classList.toggle("done", box.checked);
    };
  });
}
