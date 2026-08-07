/* BJJ Belt Progression app logic: rendering, gating, and localStorage persistence. */

const STORAGE_KEY = "bjj-progress-v1";

/* Email signup (PureLab Performance list).
 * Set SIGNUP_ENDPOINT to a form service URL (e.g. Formspree: https://formspree.io/f/YOUR_ID)
 * to collect submissions automatically — see MARKETING.md. Until then, submissions
 * fall back to opening a pre-filled email to SIGNUP_CONTACT_EMAIL. */
/* Brand settings: set url to the full website address (https://...) and drop a
 * logo image in the repo as purelab-logo.png (it hides itself if missing). */
const BRAND = {
  name: "PureLab Performance",
  url: "https://purelabperformance.com",
  logo: "purelab-logo.png",
  tagline: "your edge in sports recovery & performance",
};

const SIGNUP_ENDPOINT = "";
const SIGNUP_CONTACT_EMAIL = "jeff.centralcc@gmail.com";
const SIGNUP_DONE_KEY = "bjj-signup-done";
const SIGNUP_HIDE_KEY = "bjj-signup-dismissed";

const state = {
  track: "adult",
  selectedBelt: null,
  tab: "curriculum",
  progress: loadProgress(),
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function itemKey(beltId, category, item) {
  return `${beltId}::${category}::${item}`;
}

function beltItems(belt) {
  const items = [];
  for (const [category, list] of Object.entries(belt.curriculum)) {
    for (const item of list) items.push(itemKey(belt.id, category, item));
  }
  return items;
}

function beltCompletion(belt) {
  const items = beltItems(belt);
  const done = items.filter((k) => state.progress[k]).length;
  return { done, total: items.length, complete: done === items.length && items.length > 0 };
}

/* A belt is unlocked when every previous belt in its track is complete. */
function isUnlocked(trackId, index) {
  if (index === 0) return true;
  const belts = TRACKS[trackId].belts;
  for (let i = 0; i < index; i++) {
    if (!beltCompletion(belts[i]).complete) return false;
  }
  return true;
}

function currentBelt() {
  const belts = TRACKS[state.track].belts;
  return belts.find((b) => b.id === state.selectedBelt) || belts[0];
}

/* ---------- rendering ---------- */

function render() {
  renderBrand();
  renderTrackSwitch();
  renderRoadmap();
  renderPanel();
  renderSignup();
}

function renderBrand() {
  const host = document.getElementById("brand-bar");
  if (!host || host.dataset.rendered) return;
  host.dataset.rendered = "1";
  const site = BRAND.url ? BRAND.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";
  host.innerHTML = `
    ${BRAND.logo ? `<img src="${BRAND.logo}" alt="${BRAND.name} logo" class="brand-logo" onerror="this.remove()" />` : ""}
    <span class="brand-text">
      Sponsored by <strong>${BRAND.name}</strong>${BRAND.tagline ? ` — ${BRAND.tagline}` : ""}
      ${site ? ` · <a href="${BRAND.url}" target="_blank" rel="noopener">${site}</a>` : ""}
    </span>`;
}

function renderSignup() {
  const host = document.getElementById("signup-card");
  if (!host) return;
  if (localStorage.getItem(SIGNUP_DONE_KEY) || localStorage.getItem(SIGNUP_HIDE_KEY)) {
    host.innerHTML = "";
    host.style.display = "none";
    return;
  }
  host.style.display = "";
  host.innerHTML = `
    <h3>📬 Level up off the mat</h3>
    <p>Get training tips and offers from <strong>PureLab Performance</strong> in your inbox.</p>
    <form id="signup-form">
      <input type="email" id="signup-email" placeholder="you@example.com" required autocomplete="email" />
      <label class="consent">
        <input type="checkbox" id="signup-consent" required />
        <span>I agree to receive marketing emails from PureLab Performance. Unsubscribe anytime.</span>
      </label>
      <div class="signup-actions">
        <button type="submit" class="signup-btn">Sign me up</button>
        <button type="button" class="signup-dismiss" id="signup-dismiss">No thanks</button>
      </div>
    </form>
    <p id="signup-status" class="signup-status" role="status"></p>`;

  document.getElementById("signup-dismiss").onclick = () => {
    localStorage.setItem(SIGNUP_HIDE_KEY, "1");
    renderSignup();
  };

  document.getElementById("signup-form").onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value.trim();
    const status = document.getElementById("signup-status");
    if (SIGNUP_ENDPOINT) {
      status.textContent = "Signing you up…";
      try {
        const res = await fetch(SIGNUP_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email, consent: true, source: "bjj-tracker" }),
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        localStorage.setItem(SIGNUP_DONE_KEY, "1");
        renderSignup();
      } catch {
        status.textContent = "Couldn't reach the signup service — check your connection and try again.";
      }
    } else {
      // No form service configured yet: hand off to the user's email app instead.
      location.href =
        "mailto:" + SIGNUP_CONTACT_EMAIL +
        "?subject=" + encodeURIComponent("Add me to the PureLab Performance list") +
        "&body=" + encodeURIComponent("Please add " + email + " to the PureLab Performance mailing list. I agree to receive marketing emails and can unsubscribe anytime.");
      status.textContent = "We opened your email app — hit send and you're on the list!";
    }
  };
}

function renderTrackSwitch() {
  const el = document.getElementById("track-switch");
  el.innerHTML = "";
  for (const [trackId, track] of Object.entries(TRACKS)) {
    const btn = document.createElement("button");
    btn.textContent = track.label;
    btn.className = trackId === state.track ? "active" : "";
    btn.onclick = () => {
      state.track = trackId;
      state.selectedBelt = TRACKS[trackId].belts[0].id;
      render();
    };
    el.appendChild(btn);
  }
}

function renderRoadmap() {
  const el = document.getElementById("roadmap");
  el.innerHTML = "";
  const belts = TRACKS[state.track].belts;
  belts.forEach((belt, i) => {
    const { done, total } = beltCompletion(belt);
    const unlocked = isUnlocked(state.track, i);
    const chip = document.createElement("button");
    chip.className =
      "belt-chip" +
      (belt.id === currentBelt().id ? " selected" : "") +
      (unlocked ? "" : " locked");
    chip.innerHTML = `
      <span class="belt-bar" style="background:${belt.color}"></span>
      <span class="belt-name">${belt.name}</span>
      <span class="belt-progress">${done}/${total} requirements</span>
      ${unlocked ? "" : '<span class="lock-icon" aria-label="locked">🔒</span>'}
    `;
    chip.onclick = () => {
      state.selectedBelt = belt.id;
      render();
    };
    el.appendChild(chip);
  });
}

function renderPanel() {
  const belt = currentBelt();
  const belts = TRACKS[state.track].belts;
  const index = belts.indexOf(belt);
  const unlocked = isUnlocked(state.track, index);
  const { done, total, complete } = beltCompletion(belt);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const next = belts[index + 1];

  const panel = document.getElementById("belt-panel");
  panel.innerHTML = `
    <div class="belt-panel-header" style="border-top: 6px solid ${belt.color}">
      <h2>${belt.name}</h2>
      ${belt.subtitle ? `<div class="subtitle">${belt.subtitle}</div>` : ""}
      <p class="goal">${belt.goal}</p>
      <div class="progress-wrap">
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="progress-label">${done}/${total} (${pct}%)</div>
      </div>
    </div>
    ${
      !unlocked
        ? `<div class="locked-banner">🔒 Locked — complete every requirement on the previous belt first. You can preview the curriculum and rules below.</div>`
        : complete && next
          ? `<div class="complete-banner">✔ All requirements complete — ${next.name} is unlocked! Promotion itself is always your professor's call.</div>`
          : ""
    }
    <div class="panel-tabs">
      <button id="tab-curriculum" class="${state.tab === "curriculum" ? "active" : ""}">Requirements Checklist</button>
      <button id="tab-rules" class="${state.tab === "rules" ? "active" : ""}">IBJJF Rules</button>
    </div>
    <div class="panel-body" id="panel-body"></div>
  `;

  document.getElementById("tab-curriculum").onclick = () => {
    state.tab = "curriculum";
    render();
  };
  document.getElementById("tab-rules").onclick = () => {
    state.tab = "rules";
    render();
  };

  const body = document.getElementById("panel-body");
  if (state.tab === "curriculum") {
    renderCurriculum(body, belt, unlocked);
  } else {
    renderRules(body, belt);
  }
}

function renderCurriculum(container, belt, unlocked) {
  for (const [category, items] of Object.entries(belt.curriculum)) {
    const section = document.createElement("div");
    section.className = "category";
    const h = document.createElement("h3");
    h.textContent = category;
    section.appendChild(h);

    for (const item of items) {
      const key = itemKey(belt.id, category, item);
      const checked = !!state.progress[key];
      const label = document.createElement("label");
      label.className = "check-item" + (checked ? " done" : "") + (unlocked ? "" : " disabled");

      const box = document.createElement("input");
      box.type = "checkbox";
      box.checked = checked;
      box.disabled = !unlocked;
      box.onchange = () => {
        if (box.checked) state.progress[key] = true;
        else delete state.progress[key];
        saveProgress();
        render();
      };

      const span = document.createElement("span");
      span.textContent = item;
      label.appendChild(box);
      label.appendChild(span);

      const curated = typeof VIDEO_LINKS !== "undefined" ? VIDEO_LINKS[item] : null;
      const canEmbed = typeof EMBED_VIDEOS === "undefined" || EMBED_VIDEOS;
      if (curated && !canEmbed) {
        const link = document.createElement("a");
        link.className = "video-link";
        link.href = curated.url;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = "▶ Video";
        link.title = curated.title;
        label.appendChild(link);
      } else if (curated) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "video-link";
        btn.textContent = "▶ Video";
        btn.title = curated.title;
        btn.onclick = (e) => {
          e.preventDefault();
          const open = label.nextElementSibling?.classList?.contains("video-embed");
          if (open) {
            label.nextElementSibling.remove();
            btn.textContent = "▶ Video";
            return;
          }
          const id = new URL(curated.url).searchParams.get("v");
          const embed = document.createElement("div");
          embed.className = "video-embed";
          embed.innerHTML = `
            <div class="video-frame">
              <iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${curated.title.replace(/"/g, "&quot;")}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="video-caption">${curated.title.replace(/</g, "&lt;")} —
              <a href="${curated.url}" target="_blank" rel="noopener">watch on YouTube ↗</a>
            </div>`;
          label.after(embed);
          btn.textContent = "✕ Close";
        };
        label.appendChild(btn);
      } else {
        const link = document.createElement("a");
        link.className = "video-link search";
        link.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent("BJJ " + item);
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = "▶ Search";
        link.title = "Search YouTube for this technique";
        label.appendChild(link);
      }
      section.appendChild(label);
    }
    container.appendChild(section);
  }

  const reset = document.createElement("button");
  reset.className = "reset-btn";
  reset.textContent = `Reset ${belt.name} progress`;
  reset.onclick = () => {
    if (!confirm(`Clear all checked items for ${belt.name}?`)) return;
    for (const key of beltItems(belt)) delete state.progress[key];
    saveProgress();
    render();
  };
  container.appendChild(reset);
}

function renderRules(container, belt) {
  const r = belt.rules;
  container.innerHTML = `
    <div class="rules-section">
      <h3>⏱ Match Time</h3>
      <p>${r.matchTime}</p>
    </div>
    <div class="rules-section">
      <h3>🎓 Promotion / Eligibility (IBJJF)</h3>
      <p>${r.promotion}</p>
    </div>
    <div class="rules-section legal">
      <h3>✅ Legal Techniques</h3>
      <ul>
        ${r.legal.map((t) => `<li>${t}</li>`).join("")}
        ${r.newlyLegal.map((t) => `<li>${t} <span class="badge new">NEW AT THIS BELT</span></li>`).join("")}
      </ul>
    </div>
    <div class="rules-section illegal">
      <h3>🚫 Illegal Techniques</h3>
      <ul>${r.illegal.map((t) => `<li>${t}</li>`).join("")}</ul>
    </div>
    <div class="rules-section">
      <h3>🏅 Scoring (all belts)</h3>
      <table class="points">
        ${POINTS_TABLE.map((p) => `<tr><td>${p.move}</td><td>${p.pts}</td></tr>`).join("")}
      </table>
      <p style="font-size:0.85rem;color:var(--muted)">Advantages break point ties; penalties can decide a match and 4 penalties = disqualification.</p>
    </div>
  `;
}

/* ---------- init ---------- */

state.selectedBelt = TRACKS[state.track].belts[0].id;
render();
