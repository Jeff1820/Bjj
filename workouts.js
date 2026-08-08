/* Custom workout builder (weightlifting): assemble your own workouts from an
 * exercise library grouped by muscle, or add your own exercises. Every
 * exercise gets the same weight × reps × sets logging as the checklists.
 * Adjacent exercises can be chained into supersets, and workouts can be
 * assigned to days of the week. Stored per athlete profile. */

const WORKOUTS_KEY = "bjj-workouts";
const SCHEDULE_KEY = "bjj-woschedule";

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

/* Older saves stored exercises as plain strings and workouts without ids —
 * normalize to {id, name, exercises: [{n, ss}]} (ss = superset with previous). */
function normalizeWorkouts(list) {
  let changed = false;
  for (const wo of list) {
    if (!wo.id) {
      wo.id = "w" + Math.random().toString(36).slice(2, 9);
      changed = true;
    }
    wo.exercises = wo.exercises.map((e) => {
      if (typeof e === "string") {
        changed = true;
        return { n: e, ss: false };
      }
      return e;
    });
  }
  if (changed) saveWorkouts(list);
  return list;
}

function loadWorkouts() {
  try {
    return normalizeWorkouts(JSON.parse(localStorage.getItem(WORKOUTS_KEY + "::" + ACTIVE_PROFILE.id)) || []);
  } catch {
    return [];
  }
}

function saveWorkouts(list) {
  localStorage.setItem(WORKOUTS_KEY + "::" + ACTIVE_PROFILE.id, JSON.stringify(list));
}

/* Schedule: {dayIndex: workoutId} with JS getDay() indexing (0 = Sunday). */
function loadSchedule() {
  try {
    return JSON.parse(localStorage.getItem(SCHEDULE_KEY + "::" + ACTIVE_PROFILE.id)) || {};
  } catch {
    return {};
  }
}

function saveSchedule(s) {
  localStorage.setItem(SCHEDULE_KEY + "::" + ACTIVE_PROFILE.id, JSON.stringify(s));
}

function renderWorkouts(container) {
  const libraryOptions = Object.entries(EXERCISE_LIBRARY).map(([group, list]) =>
    `<optgroup label="${group}">${list.map((e) => `<option>${e}</option>`).join("")}</optgroup>`).join("");

  container.innerHTML = `
    <div class="workouts">
      <p class="workouts-intro">Build your own workouts — pick exercises from the library
        (every muscle group) or type your own, then log weight × reps × sets on each.
        Chain exercises into supersets with the ⛓ button, and set your weekly
        schedule at the bottom.</p>
      <div id="today-banner"></div>
      <form class="workout-new">
        <input type="text" maxlength="40" placeholder="New workout name — e.g. Push Day" required />
        <button type="submit" class="signup-btn">Create</button>
      </form>
      <div id="workout-list"></div>
      <div id="workout-schedule"></div>
    </div>`;

  const listHost = container.querySelector("#workout-list");
  const scheduleHost = container.querySelector("#workout-schedule");
  const todayHost = container.querySelector("#today-banner");

  const renderToday = () => {
    const sched = loadSchedule();
    const all = loadWorkouts();
    if (!Object.values(sched).some(Boolean)) {
      todayHost.innerHTML = "";
      return;
    }
    const wo = all.find((w) => w.id === sched[new Date().getDay()]);
    todayHost.innerHTML = wo
      ? `<div class="today-banner">📅 Today: <strong>${wo.name.replace(/</g, "&lt;")}</strong></div>`
      : `<div class="today-banner rest">📅 Today: rest day</div>`;
  };

  const renderSchedule = () => {
    const all = loadWorkouts();
    const sched = loadSchedule();
    const today = new Date().getDay();
    if (!all.length) {
      scheduleHost.innerHTML = "";
      renderToday();
      return;
    }
    const days = [
      [1, "Monday"], [2, "Tuesday"], [3, "Wednesday"], [4, "Thursday"],
      [5, "Friday"], [6, "Saturday"], [0, "Sunday"],
    ];
    scheduleHost.innerHTML = `
      <div class="workout-card schedule-card">
        <div class="workout-head"><h3>📅 Weekly schedule</h3></div>
        <div class="schedule-rows">
          ${days.map(([d, label]) => `
            <label class="schedule-row ${d === today ? "today" : ""}">
              <span>${label}${d === today ? " · today" : ""}</span>
              <select data-day="${d}">
                <option value="">Rest</option>
                ${all.map((w) => `<option value="${w.id}" ${sched[d] === w.id ? "selected" : ""}>${w.name.replace(/</g, "&lt;")}</option>`).join("")}
              </select>
            </label>`).join("")}
        </div>
      </div>`;
    scheduleHost.querySelectorAll("select[data-day]").forEach((sel) => {
      sel.onchange = () => {
        const s = loadSchedule();
        if (sel.value) s[sel.dataset.day] = sel.value;
        else delete s[sel.dataset.day];
        saveSchedule(s);
        renderToday();
      };
    });
    renderToday();
  };

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

      const buildRow = (ex, ei) => {
        const row = document.createElement("div");
        row.className = "workout-ex";
        const key = "wo::" + ex.n;
        const label = document.createElement("div");
        label.className = "workout-ex-label";
        const summary = document.createElement("span");
        summary.className = "lift-summary";
        summary.textContent = liftSummaryText(loadLifts()[key]);
        label.innerHTML = `<span class="workout-ex-name">${ex.n.replace(/</g, "&lt;")}</span>`;
        label.appendChild(summary);

        const logBtn = document.createElement("button");
        logBtn.type = "button";
        logBtn.className = "video-link lift-log-btn";
        logBtn.textContent = "🏋 Log";
        logBtn.onclick = () => {
          const open = row.nextElementSibling?.classList?.contains("lift-log-panel");
          container.querySelectorAll(".workouts .lift-log-panel").forEach((p) => p.remove());
          if (open) return;
          const panel = document.createElement("div");
          panel.className = "lift-log-panel";
          row.after(panel);
          buildLiftPanel(panel, key, summary);
        };
        label.appendChild(logBtn);

        const controls = document.createElement("div");
        controls.className = "workout-ex-controls";
        if (ei > 0) {
          const ssBtn = document.createElement("button");
          ssBtn.type = "button";
          ssBtn.className = "ss-btn" + (ex.ss ? " on" : "");
          ssBtn.textContent = "⛓";
          ssBtn.title = ex.ss
            ? "Unlink from the exercise above"
            : "Superset with the exercise above (back-to-back, no rest between)";
          ssBtn.onclick = () => {
            const list = loadWorkouts();
            list[wi].exercises[ei].ss = !list[wi].exercises[ei].ss;
            saveWorkouts(list);
            renderList();
          };
          controls.appendChild(ssBtn);
        }
        const rm = document.createElement("button");
        rm.type = "button";
        rm.className = "workout-ex-rm";
        rm.title = "Remove exercise";
        rm.textContent = "✕";
        rm.onclick = () => {
          const list = loadWorkouts();
          list[wi].exercises.splice(ei, 1);
          if (list[wi].exercises[ei]) list[wi].exercises[ei].ss = list[wi].exercises[ei].ss && ei > 0;
          if (list[wi].exercises[0]) list[wi].exercises[0].ss = false;
          saveWorkouts(list);
          renderList();
        };
        controls.appendChild(rm);

        row.appendChild(label);
        row.appendChild(controls);
        return row;
      };

      // Consecutive ss-linked exercises render inside one superset frame.
      const groups = [];
      wo.exercises.forEach((ex, ei) => {
        if (ex.ss && groups.length) groups[groups.length - 1].push([ex, ei]);
        else groups.push([[ex, ei]]);
      });
      groups.forEach((g) => {
        if (g.length > 1) {
          const wrap = document.createElement("div");
          wrap.className = "superset-group";
          const tag = document.createElement("div");
          tag.className = "superset-tag";
          tag.textContent = "⛓ Superset — back-to-back, rest after the last";
          wrap.appendChild(tag);
          g.forEach(([ex, ei]) => wrap.appendChild(buildRow(ex, ei)));
          exHost.appendChild(wrap);
        } else {
          exHost.appendChild(buildRow(g[0][0], g[0][1]));
        }
      });
      if (!wo.exercises.length) {
        exHost.innerHTML = `<p class="workouts-empty">Empty — add exercises below.</p>`;
      }

      card.querySelector(".workout-del").onclick = () => {
        if (!woConfirm(`Delete "${wo.name}"? Logged lift history is kept.`)) return;
        const list = loadWorkouts();
        const removed = list.splice(wi, 1)[0];
        saveWorkouts(list);
        const s = loadSchedule();
        for (const d of Object.keys(s)) if (s[d] === removed.id) delete s[d];
        saveSchedule(s);
        renderList();
      };

      card.querySelector(".workout-add").onsubmit = (e) => {
        e.preventDefault();
        const custom = card.querySelector(".workout-custom").value.trim();
        const picked = card.querySelector(".workout-pick").value;
        const name = custom || picked;
        if (!name) return;
        const list = loadWorkouts();
        if (!list[wi].exercises.some((x) => x.n === name)) {
          list[wi].exercises.push({ n: name, ss: false });
        }
        saveWorkouts(list);
        renderList();
      };

      listHost.appendChild(card);
    });
    renderSchedule();
  };

  container.querySelector(".workout-new").onsubmit = (e) => {
    e.preventDefault();
    const input = container.querySelector(".workout-new input");
    const name = input.value.trim();
    if (!name) return;
    const list = loadWorkouts();
    list.push({ id: "w" + Math.random().toString(36).slice(2, 9), name, exercises: [] });
    saveWorkouts(list);
    input.value = "";
    renderList();
  };

  renderList();
}
