/* Meal Plan tab (adults 18+): calorie/macro calculator and portioned example
 * meals based on caloric needs. Educational content, not medical advice.
 * Settings and daily checks are stored per athlete profile. */

const MEALS_KEY = "bjj-meal";
const MEALS_DAY_KEY = "bjj-mealday";
const MEALS_ADULT_KEY = "bjj-meals-adult";
const CAL_FLOOR = 1400; // safety floor — never plan below this

/* Per-100g macros (protein, fat, carbs) for portion math. */
const FOODS = {
  chicken: { name: "chicken breast", p: 31, f: 3.6, c: 0 },
  beef: { name: "lean ground beef", p: 26, f: 10, c: 0 },
  salmon: { name: "salmon", p: 20, f: 13, c: 0 },
  yogurt: { name: "nonfat Greek yogurt", p: 10, f: 0.4, c: 4 },
  rice: { name: "cooked white rice", p: 2.7, f: 0.3, c: 28 },
  potato: { name: "potato", p: 2, f: 0.1, c: 17 },
  pasta: { name: "cooked pasta", p: 5, f: 1.1, c: 25 },
  oats: { name: "dry oats", p: 13, f: 7, c: 68 },
  veg: { name: "mixed vegetables", p: 2, f: 0.2, c: 7 },
  berries: { name: "berries", p: 0.7, f: 0.3, c: 14 },
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
  const cm = s.unit === "lb" ? s.height * 2.54 : s.height;
  const bmr = 10 * kg + 6.25 * cm - 5 * s.age + (s.sex === "m" ? 5 : -161);
  const tdee = bmr * s.activity;
  let calories = Math.round(tdee + s.goal);
  let floored = false;
  if (calories < CAL_FLOOR) {
    calories = CAL_FLOOR;
    floored = true;
  }
  const protein = Math.round(kg * 2); // ~2 g/kg — standard for training adults
  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.max(0, Math.round((calories - protein * 4 - fat * 9) / 4));
  return { calories, protein, fat, carbs, floored };
}

/* Build one example meal: scale a protein food to hit the meal's protein
 * target, fill remaining calories with the carb food, fixed veg/extra. */
function exampleMeal(proteinFood, carbFood, extraFood, extraGrams, mealKcal, mealProtein) {
  const pGrams = Math.round(((mealProtein / proteinFood.p) * 100) / 10) * 10;
  let used = kcalOf(proteinFood, pGrams) + kcalOf(extraFood, extraGrams);
  const cGrams = Math.max(0, Math.round(((mealKcal - used) / kcalOf(carbFood, 100)) * 100 / 10) * 10);
  return `${pGrams}g ${proteinFood.name} + ${cGrams}g ${carbFood.name} + ${extraGrams}g ${extraFood.name}`;
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
  host.innerHTML = `
    <div class="panel-body meals-body">
      <h2>🍎 Meal Plan${s ? "" : " — set up your numbers"}</h2>
      <form id="meals-form" class="meals-form ${s ? "meals-form-saved" : ""}">
        <label>Sex
          <select name="sex"><option value="m">Male</option><option value="f">Female</option></select></label>
        <label>Age <input name="age" type="number" min="18" max="99" required /></label>
        <label>Weight (<span class="unit-w">${imperial ? "lb" : "kg"}</span>)
          <input name="weight" type="number" min="1" step="0.5" required /></label>
        <label>Height (<span class="unit-h">${imperial ? "inches" : "cm"}</span>)
          <input name="height" type="number" min="1" step="0.5" required /></label>
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
          <select name="meals"><option>3</option><option selected>4</option><option>5</option></select></label>
        <button type="button" class="lift-unit" id="meals-unit">${imperial ? "lb/in" : "kg/cm"}</button>
        <button type="submit" class="signup-btn">Calculate my plan</button>
      </form>
      <div id="meals-plan"></div>
      <p class="meals-disclaimer">Educational estimates only, using standard formulas (Mifflin-St Jeor).
         Not medical, dietetic, or supplement advice — consult a qualified professional for
         individual guidance, and never plan aggressive deficits.</p>
    </div>`;

  const form = document.getElementById("meals-form");
  if (s) {
    form.sex.value = s.sex;
    form.age.value = s.age;
    form.weight.value = s.weight;
    form.height.value = s.height;
    form.activity.value = String(s.activity);
    form.goal.value = String(s.goal);
    form.meals.value = String(s.meals);
  }

  document.getElementById("meals-unit").onclick = () => {
    const next = imperial ? "kg" : "lb";
    if (s) {
      // convert stored values so the plan doesn't change
      s.weight = next === "kg" ? Math.round(s.weight / 2.2046) : Math.round(s.weight * 2.2046);
      s.height = next === "kg" ? Math.round(s.height * 2.54) : Math.round(s.height / 2.54);
      s.unit = next;
      saveMealSettings(s);
    } else {
      saveMealSettings({ unit: next, sex: "m", age: 30, weight: 0, height: 0, activity: 1.55, goal: 0, meals: 4, incomplete: true });
    }
    render();
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    const settings = {
      unit: imperial ? "lb" : "kg",
      sex: form.sex.value,
      age: parseInt(form.age.value, 10),
      weight: parseFloat(form.weight.value),
      height: parseFloat(form.height.value),
      activity: parseFloat(form.activity.value),
      goal: parseInt(form.goal.value, 10),
      meals: parseInt(form.meals.value, 10),
    };
    saveMealSettings(settings);
    render();
  };

  if (s && !s.incomplete && s.weight > 0 && s.height > 0) renderMealPlan(s);
}

function renderMealPlan(s) {
  const t = computeTargets(s);
  const mealKcal = Math.round(t.calories / s.meals);
  const mealProtein = Math.round(t.protein / s.meals);
  const day = mealDayState(s.meals);

  const templates = [
    () => exampleMeal(FOODS.chicken, FOODS.rice, FOODS.veg, 150, mealKcal, mealProtein),
    () => exampleMeal(FOODS.beef, FOODS.pasta, FOODS.veg, 150, mealKcal, mealProtein),
    () => exampleMeal(FOODS.salmon, FOODS.potato, FOODS.veg, 150, mealKcal, mealProtein),
    () => exampleMeal(FOODS.yogurt, FOODS.oats, FOODS.berries, 100, mealKcal, mealProtein),
  ];

  const el = document.getElementById("meals-plan");
  el.innerHTML = `
    ${t.floored ? '<p class="meals-floor">Your inputs produced a very low target, so the plan uses a 1,400 kcal safety floor. Consider professional guidance before dieting harder than this.</p>' : ""}
    <div class="meals-stats">
      <div><strong>${t.calories.toLocaleString()}</strong><span>kcal/day</span></div>
      <div><strong>${t.protein}g</strong><span>protein</span></div>
      <div><strong>${t.carbs}g</strong><span>carbs</span></div>
      <div><strong>${t.fat}g</strong><span>fat</span></div>
    </div>
    <div class="meals-grid">
      ${Array.from({ length: s.meals }, (_, i) => `
        <div class="meal-card ${day.checks[i] ? "done" : ""}">
          <label class="meal-check"><input type="checkbox" data-i="${i}" ${day.checks[i] ? "checked" : ""}/>
            <strong>Meal ${i + 1}</strong> · ~${mealKcal} kcal · ${mealProtein}g protein</label>
          <ul>
            ${(i === 0 ? [templates[3], templates[0]] : [templates[i % 3], templates[(i + 1) % 3]])
              .map((fn) => `<li>${fn()}</li>`).join("")}
          </ul>
        </div>`).join("")}
    </div>
    <p class="meals-note">Portions are cooked-weight estimates hitting each meal's calorie and protein share —
       swap in equivalent proteins/carbs you enjoy. Spread water and training-day carbs around your sessions.</p>`;

  el.querySelectorAll(".meal-check input").forEach((box) => {
    box.onchange = () => {
      const d = mealDayState(s.meals);
      d.checks[parseInt(box.dataset.i, 10)] = box.checked;
      saveMealDay(d);
      box.closest(".meal-card").classList.toggle("done", box.checked);
    };
  });
}
