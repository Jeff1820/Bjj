/* Custom workout builder (weightlifting): assemble your own workouts from an
 * exercise library grouped by muscle, or add your own exercises. Every
 * exercise gets the same weight × reps × sets logging as the checklists.
 * Stored per athlete profile. */

const WORKOUTS_KEY = "bjj-workouts";

const EXERCISE_LIBRARY = {
  "Chest": ["Barbell bench press", "Incline dumbbell press", "Dumbbell fly", "Cable crossover", "Machine chest press", "Push-up", "Dip (chest lean)"],
  "Back": ["Deadlift", "Barbell row", "Dumbbell row", "T-bar row", "Seated cable row", "Lat pulldown", "Pull-up", "Chin-up", "Hand-over-hand rope pull", "Straight-arm pulldown"],
  "Shoulders": ["Overhead press", "Dumbbell shoulder press", "Arnold press", "Lateral raise", "Front raise", "Rear delt fly", "Face pull (rope)", "Upright row", "Shrug"],
  "Biceps": ["Barbell curl", "EZ-bar curl", "Dumbbell curl", "Hammer curl", "Preacher curl", "Incline dumbbell curl", "Cable curl", "Concentration curl"],
  "Triceps": ["Close-grip bench press", "Triceps rope pushdown", "Skull crusher", "Overhead triceps extension", "Dip", "Bench dip", "Cable kickback", "Diamond push-up"],
  "Quads": ["Back squat", "Front squat", "Leg press", "Hack squat", "Leg extension", "Walking lunge", "Bulgarian split squat", "Goblet squat", "Step-up"],
  "Hamstrings & Glutes": ["Romanian deadlift", "Leg curl", "Hip thrust", "Glute bridge", "Good morning", "Nordic hamstring curl", "Cable pull-through", "Kettlebell swing"],
  "Calves": ["Standing calf raise", "Seated calf raise", "Leg-press calf raise", "Single-leg calf raise", "Donkey calf raise"],
  "Core": ["Plank", "Side plank", "Hanging leg raise", "Hanging knee raise", "Ab wheel rollout", "Cable crunch", "Russian twist", "Dead bug"],
  "Forearms & Grip": ["Wrist curl", "Reverse curl", "Farmer's carry", "Dead hang", "Plate pinch hold"],
  "Conditioning": ["Battle ropes", "Sled push", "Sled rope pull", "Rowing machine", "Assault bike", "Jump rope", "Box jump", "Burpee"],
};

function woConfirm(msg) {
  try { return window.confirm(msg); } catch { return true; }
}

function loadWorkouts() {
  try {
    return JSON.parse(localStorage.getItem(WORKOUTS_KEY + "::" + ACTIVE_PROFILE.id)) || [];
  } catch {
    return [];
  }
}

function saveWorkouts(list) {
  localStorage.setItem(WORKOUTS_KEY + "::" + ACTIVE_PROFILE.id, JSON.stringify(list));
}

function renderWorkouts(container) {
  const workouts = loadWorkouts();
  const libraryOptions = Object.entries(EXERCISE_LIBRARY).map(([group, list]) =>
    `<optgroup label="${group}">${list.map((e) => `<option>${e}</option>`).join("")}</optgroup>`).join("");

  container.innerHTML = `
    <div class="workouts">
      <p class="workouts-intro">Build your own workouts — pick exercises from the library
        (every muscle group) or type your own, then log weight × reps × sets on each.
        Exercise history is shared across workouts, so your bench numbers follow you.</p>
      <form class="workout-new">
        <input type="text" maxlength="40" placeholder="New workout name — e.g. Push Day" required />
        <button type="submit" class="signup-btn">Create</button>
      </form>
      <div id="workout-list"></div>
    </div>`;

  const listHost = container.querySelector("#workout-list");

  const renderList = () => {
    const all = loadWorkouts();
    listHost.innerHTML = all.length ? "" : `<p class="workouts-empty">No workouts yet — name one above to get started.</p>`;
    all.forEach((wo, wi) => {
      const card = document.createElement("div");
      card.className = "workout-card";
      card.innerHTML = `
        <div class="workout-head">
          <h3>${wo.name.replace(/</g, "&lt;")}</h3>
          <button type="button" class="workout-del" title="Delete workout">✕</button>
        </div>
        <div class="workout-exercises"></div>
        <form class="workout-add">
          <select class="workout-pick">
            <option value="">Add an exercise…</option>
            ${libraryOptions}
          </select>
          <input type="text" maxlength="60" class="workout-custom" placeholder="…or type your own" />
          <button type="submit" class="signup-btn">Add</button>
        </form>`;

      const exHost = card.querySelector(".workout-exercises");
      wo.exercises.forEach((ex, ei) => {
        const row = document.createElement("div");
        row.className = "workout-ex";
        const key = "wo::" + ex;
        const label = document.createElement("div");
        label.className = "workout-ex-label";
        const summary = document.createElement("span");
        summary.className = "lift-summary";
        summary.textContent = liftSummaryText(loadLifts()[key]);
        label.innerHTML = `<span class="workout-ex-name">${ex.replace(/</g, "&lt;")}</span>`;
        label.appendChild(summary);

        const logBtn = document.createElement("button");
        logBtn.type = "button";
        logBtn.className = "video-link lift-log-btn";
        logBtn.textContent = "🏋 Log";
        logBtn.onclick = () => {
          const open = row.nextElementSibling?.classList?.contains("lift-log-panel");
          document.querySelectorAll(".workouts .lift-log-panel").forEach((p) => p.remove());
          if (open) return;
          const panel = document.createElement("div");
          panel.className = "lift-log-panel";
          row.after(panel);
          buildLiftPanel(panel, key, summary);
        };
        label.appendChild(logBtn);

        const rm = document.createElement("button");
        rm.type = "button";
        rm.className = "workout-ex-rm";
        rm.title = "Remove exercise";
        rm.textContent = "✕";
        rm.onclick = () => {
          const list = loadWorkouts();
          list[wi].exercises.splice(ei, 1);
          saveWorkouts(list);
          renderList();
        };

        row.appendChild(label);
        row.appendChild(rm);
        exHost.appendChild(row);
      });
      if (!wo.exercises.length) {
        exHost.innerHTML = `<p class="workouts-empty">Empty — add exercises below.</p>`;
      }

      card.querySelector(".workout-del").onclick = () => {
        if (!woConfirm(`Delete "${wo.name}"? Logged lift history is kept.`)) return;
        const list = loadWorkouts();
        list.splice(wi, 1);
        saveWorkouts(list);
        renderList();
      };

      card.querySelector(".workout-add").onsubmit = (e) => {
        e.preventDefault();
        const custom = card.querySelector(".workout-custom").value.trim();
        const picked = card.querySelector(".workout-pick").value;
        const name = custom || picked;
        if (!name) return;
        const list = loadWorkouts();
        if (!list[wi].exercises.includes(name)) list[wi].exercises.push(name);
        saveWorkouts(list);
        renderList();
      };

      listHost.appendChild(card);
    });
  };

  container.querySelector(".workout-new").onsubmit = (e) => {
    e.preventDefault();
    const input = container.querySelector(".workout-new input");
    const name = input.value.trim();
    if (!name) return;
    const list = loadWorkouts();
    list.push({ name, exercises: [] });
    saveWorkouts(list);
    input.value = "";
    renderList();
  };

  renderList();
}
