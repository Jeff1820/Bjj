/* Judo progression data. Auto-drafted, review rules against the current IJF rulebook. */
SPORTS.judo = {
  "id": "judo",
  "emoji": "🥋",
  "label": "Judo",
  "name": "Judo",
  "appTitle": "Judo Belt Progression Tracker",
  "tagline": "Check off the throws, groundwork, and defenses required for each belt, with current IJF competition rules for every level.",
  "rulesLabel": "IJF Rules",
  "tracks": {
    "senior": {
      "label": "Senior (13+)",
      "belts": [
        {
          "id": "judo-white",
          "name": "White Belt (6th Kyu)",
          "color": "#FFFFFF",
          "textColor": "#1F2937",
          "goal": "Learn to fall safely, move like a judoka, and perform the first fundamental throws and hold-downs with correct posture and kuzushi.",
          "curriculum": {
            "Ukemi & Movement": [
              "Ushiro-ukemi (backward breakfall)",
              "Yoko-ukemi (side breakfall)",
              "Mae-ukemi (front flat breakfall)",
              "Zenpo-kaiten-ukemi (forward rolling breakfall)",
              "Tsugi-ashi and ayumi-ashi (judo footwork)",
              "Kuzushi in 8 directions (happo-no-kuzushi)"
            ],
            "Throws — Tachi-waza": [
              "O-goshi (major hip throw)",
              "O-soto-gari (major outer reap)",
              "De-ashi-barai (advancing foot sweep)"
            ],
            "Groundwork — Ne-waza": [
              "Kesa-gatame (scarf hold)",
              "Yoko-shiho-gatame (side four-corner hold)",
              "Ebi (shrimping escape movement)"
            ],
            "Defense & Counters": [
              "Kesa-gatame escape (bridge and shrimp)",
              "Jigotai (defensive posture) and basic grip protection"
            ],
            "Competition Knowledge": [
              "Rei (standing and kneeling bow etiquette)",
              "Ippon, waza-ari, and yuko scoring basics"
            ]
          },
          "rules": {
            "matchTime": "IJF senior contests are 4 minutes actual time with unlimited golden score if tied; novice local divisions often run 3 minutes.",
            "promotion": "Entry grade, no minimum age for the senior track (13+); typically 3-6 months of regular training before testing for yellow.",
            "legal": [
              "Nage-waza (standing throws)",
              "Osaekomi-waza (hold-downs)"
            ],
            "newlyLegal": [],
            "illegal": [
              "Shime-waza (chokes) in novice divisions",
              "Kansetsu-waza (armlocks) below advanced divisions",
              "Direct leg grabs (attacking below the belt to throw)",
              "Kani-basami (flying scissors) — hansoku-make",
              "Kawazu-gake (entwined leg throw)",
              "Do-jime (body scissors)"
            ]
          }
        },
        {
          "id": "judo-yellow",
          "name": "Yellow Belt (5th Kyu)",
          "color": "#FDD835",
          "textColor": "#1F2937",
          "goal": "Add shoulder throws and reaping techniques, expand hold-down repertoire, and start defending common attacks in light randori.",
          "curriculum": {
            "Ukemi & Movement": [
              "Moving zenpo-kaiten-ukemi both sides",
              "Uchikomi (repetition entry drills)"
            ],
            "Throws — Tachi-waza": [
              "Ippon-seoi-nage (one-arm shoulder throw)",
              "O-uchi-gari (major inner reap)",
              "Ko-soto-gari (minor outer reap)",
              "Hiza-guruma (knee wheel)",
              "Sasae-tsurikomi-ashi (propping drawing ankle block)"
            ],
            "Groundwork — Ne-waza": [
              "Kata-gatame (shoulder hold)",
              "Kami-shiho-gatame (upper four-corner hold)",
              "Mune-gatame (chest hold)"
            ],
            "Defense & Counters": [
              "Yoko-shiho-gatame escape (leg entanglement)",
              "Turtle position defense (elbows in, grips protected)",
              "Blocking o-goshi (hip block defense)"
            ],
            "Competition Knowledge": [
              "Osaekomi times (5s yuko, 10s waza-ari, 20s ippon)",
              "Common shido fouls (passivity, stepping out, false attack)"
            ]
          },
          "rules": {
            "matchTime": "4-minute senior matches under IJF rules with unlimited golden score; local novice divisions may use 3 minutes.",
            "promotion": "Typically 3-6 months at white belt with consistent attendance; kyu promotions handled by the club under USA Judo guidelines.",
            "legal": [
              "Nage-waza (standing throws)",
              "Osaekomi-waza (hold-downs)"
            ],
            "newlyLegal": [],
            "illegal": [
              "Shime-waza (chokes) in novice divisions",
              "Kansetsu-waza (armlocks) below advanced divisions",
              "Direct leg grabs (attacking below the belt to throw)",
              "Kani-basami (flying scissors) — hansoku-make",
              "Kawazu-gake (entwined leg throw)",
              "Do-jime (body scissors)"
            ]
          }
        },
        {
          "id": "judo-orange",
          "name": "Orange Belt (4th Kyu)",
          "color": "#F57C00",
          "textColor": "#FFFFFF",
          "goal": "Link techniques into combinations, control top position transitions on the ground, and begin real grip fighting and countering.",
          "curriculum": {
            "Throws — Tachi-waza": [
              "Tai-otoshi (body drop)",
              "Koshi-guruma (hip wheel)",
              "Tsurikomi-goshi (lifting-pulling hip throw)",
              "Ko-uchi-gari (minor inner reap)",
              "Okuri-ashi-barai (double foot sweep)",
              "O-uchi-gari into ippon-seoi-nage (renraku combination)",
              "Ko-uchi-gari into o-uchi-gari (renraku combination)"
            ],
            "Groundwork — Ne-waza": [
              "Tate-shiho-gatame (vertical mount hold)",
              "Ushiro-kesa-gatame (reverse scarf hold)",
              "Bridge-and-roll escape from tate-shiho-gatame",
              "Basic turtle turnover to kesa-gatame"
            ],
            "Defense & Counters": [
              "Tsubame-gaeshi (swallow counter to de-ashi-barai)",
              "Grip breaks (two-hands-on-one sleeve strip)"
            ],
            "Competition Knowledge": [
              "Kumi-kata fundamentals (grip fighting)",
              "Contest area rules (jonai/jogai) and stepping-out shido"
            ]
          },
          "rules": {
            "matchTime": "4-minute senior matches, unlimited golden score; osaekomi and technical scores carry into golden score.",
            "promotion": "Typically about 6 months at yellow belt; demonstrated combinations and randori participation expected.",
            "legal": [
              "Nage-waza (standing throws)",
              "Osaekomi-waza (hold-downs)"
            ],
            "newlyLegal": [],
            "illegal": [
              "Shime-waza (chokes) in novice divisions",
              "Kansetsu-waza (armlocks) below advanced divisions",
              "Direct leg grabs (attacking below the belt to throw)",
              "Kani-basami (flying scissors) — hansoku-make",
              "Kawazu-gake (entwined leg throw)",
              "Do-jime (body scissors)"
            ]
          }
        },
        {
          "id": "judo-green",
          "name": "Green Belt (3rd Kyu)",
          "color": "#2E7D32",
          "textColor": "#FFFFFF",
          "goal": "Develop the big forward throws (harai-goshi, uchi-mata), learn the core chokes now legal in senior shiai, and defend them under pressure.",
          "curriculum": {
            "Ukemi & Movement": [
              "High-impact ukemi from harai-goshi and uchi-mata"
            ],
            "Throws — Tachi-waza": [
              "Harai-goshi (sweeping hip throw)",
              "Uchi-mata (inner-thigh throw)",
              "Morote-seoi-nage (two-hand shoulder throw)",
              "Ko-soto-gake (minor outer hook)",
              "O-soto-otoshi (major outer drop)"
            ],
            "Groundwork — Ne-waza": [
              "Hadaka-jime (rear naked choke)",
              "Okuri-eri-jime (sliding collar choke)",
              "Kata-juji-jime (half cross choke)",
              "Juji-gatame (cross armlock) — controlled drilling"
            ],
            "Defense & Counters": [
              "Choke defense (chin tuck and two-on-one grip strip)",
              "Uchi-mata defense (square hips, catch and lift)",
              "O-soto-gaeshi (counter to o-soto-gari)"
            ],
            "Competition Knowledge": [
              "Transition from throw to osaekomi (tachi-waza to ne-waza)",
              "Shido accumulation (3rd shido = hansoku-make)"
            ]
          },
          "rules": {
            "matchTime": "4-minute senior matches, unlimited golden score decided by first score or third shido.",
            "promotion": "Typically 6-12 months at orange belt; first competitive experience commonly expected at this stage.",
            "legal": [
              "Nage-waza (standing throws)",
              "Osaekomi-waza (hold-downs)",
              "Shime-waza (chokes) in senior 13+ intermediate divisions"
            ],
            "newlyLegal": [
              "Shime-waza (chokes) — legal in senior (13+) divisions from intermediate rank"
            ],
            "illegal": [
              "Kansetsu-waza (armlocks) below advanced divisions",
              "Direct leg grabs (attacking below the belt to throw)",
              "Kani-basami (flying scissors) — hansoku-make",
              "Kawazu-gake (entwined leg throw)",
              "Do-jime (body scissors)",
              "Diving head-first on forward throws"
            ]
          }
        },
        {
          "id": "judo-blue",
          "name": "Blue Belt (2nd Kyu)",
          "color": "#1565C0",
          "textColor": "#FFFFFF",
          "goal": "Add sacrifice throws, advanced chokes and the bent armlock, master signature counters, and begin formal Nage-no-kata study.",
          "curriculum": {
            "Throws — Tachi-waza": [
              "Tomoe-nage (circle throw)",
              "Sumi-gaeshi (corner reversal sacrifice)",
              "Hane-goshi (spring hip throw)",
              "Ashi-guruma (leg wheel)",
              "Sode-tsurikomi-goshi (sleeve lifting-pulling hip throw)"
            ],
            "Groundwork — Ne-waza": [
              "Sankaku-jime (triangle choke)",
              "Kata-ha-jime (single-wing choke)",
              "Ude-garami (bent-arm entanglement lock) — drilling",
              "Juji-gatame turnover from turtle"
            ],
            "Defense & Counters": [
              "Uchi-mata-sukashi (inner-thigh slip counter)",
              "Tomoe-nage defense (drop hips, step around)",
              "Juji-gatame defense (grip lock and stack)"
            ],
            "Kata": [
              "Nage-no-kata — te-waza and koshi-waza sets"
            ],
            "Competition Knowledge": [
              "Golden score strategy (unlimited overtime, first score wins)",
              "Kumi-kata dominance (inside grips, grip sequencing)"
            ]
          },
          "rules": {
            "matchTime": "4-minute senior matches, unlimited golden score; a yuko, waza-ari, ippon, or opponent hansoku-make ends golden score.",
            "promotion": "Typically about 1 year at green belt; shiai experience and Nage-no-kata sets commonly required.",
            "legal": [
              "Nage-waza (standing throws)",
              "Osaekomi-waza (hold-downs)",
              "Shime-waza (chokes)"
            ],
            "newlyLegal": [],
            "illegal": [
              "Kansetsu-waza (armlocks) below advanced divisions",
              "Direct leg grabs (attacking below the belt to throw)",
              "Kani-basami (flying scissors) — hansoku-make",
              "Kawazu-gake (entwined leg throw)",
              "Do-jime (body scissors)",
              "Diving head-first on forward throws"
            ]
          }
        },
        {
          "id": "judo-brown",
          "name": "Brown Belt (1st Kyu)",
          "color": "#6D4C41",
          "textColor": "#FFFFFF",
          "goal": "Fight with the full senior technical arsenal including armlocks, chain attacks and counters fluidly, and polish kata and rules knowledge for the Shodan exam.",
          "curriculum": {
            "Throws — Tachi-waza": [
              "Ura-nage (rear sacrifice throw)",
              "O-guruma (major wheel)",
              "Soto-makikomi (outer wrap-around throw)",
              "Kata-guruma (shoulder wheel, no-leg-grab version)",
              "Utsuri-goshi (hip-shift counter throw)"
            ],
            "Groundwork — Ne-waza": [
              "Juji-gatame entries from guard and mount",
              "Koshi-jime (hip/clock choke from turtle)",
              "Ushiro-sankaku (reverse triangle entry)",
              "Osaekomi switching chain (kesa to yoko to tate)"
            ],
            "Defense & Counters": [
              "Kaeshi-waza series (counters to seoi-nage and uchi-mata)",
              "Sankaku-jime defense (posture up, clear the elbow)",
              "Ashi-waza counter timing in randori"
            ],
            "Kata": [
              "Nage-no-kata — first three sets to demonstration standard"
            ],
            "Competition Knowledge": [
              "Full shido list and hansoku-make acts",
              "Referee signals and scoreboard reading"
            ]
          },
          "rules": {
            "matchTime": "4-minute senior matches, unlimited golden score, full IJF senior ruleset.",
            "promotion": "Typically 1-1.5 years at blue belt; competition points or kata proficiency expected before Shodan candidacy.",
            "legal": [
              "Nage-waza (standing throws)",
              "Osaekomi-waza (hold-downs)",
              "Shime-waza (chokes)",
              "Kansetsu-waza (elbow armlocks, juji-gatame class)"
            ],
            "newlyLegal": [
              "Kansetsu-waza — elbow armlocks of the juji-gatame class (advanced/17+ divisions)"
            ],
            "illegal": [
              "Joint locks on anything except the elbow (wrist, leg, spine, neck)",
              "Armlocks applied together with a throw where uke cannot escape — hansoku-make",
              "Direct leg grabs (attacking below the belt to throw)",
              "Kani-basami (flying scissors) — hansoku-make",
              "Kawazu-gake (entwined leg throw)",
              "Do-jime (body scissors)",
              "Diving head-first on forward throws"
            ]
          }
        },
        {
          "id": "judo-black",
          "name": "Black Belt (Shodan)",
          "color": "#212121",
          "textColor": "#FFFFFF",
          "goal": "Demonstrate mastery: complete Nage-no-kata, a fully developed signature attack system with counters, a complete ne-waza game, and the ability to teach fundamentals.",
          "curriculum": {
            "Kata": [
              "Nage-no-kata — all five sets to grading standard"
            ],
            "Throws — Tachi-waza": [
              "Tokui-waza mastery (signature throw with setups both sides)",
              "Renraku-waza systems (combination attacks under randori pressure)"
            ],
            "Groundwork — Ne-waza": [
              "Complete ne-waza system (turnovers, hold chains, shime and juji-gatame entries)"
            ],
            "Defense & Counters": [
              "Kaeshi-waza mastery (ura-nage, uchi-mata-sukashi, tsubame-gaeshi)"
            ],
            "Competition Knowledge": [
              "Shiai experience (competition record or promotion points)",
              "Teaching skills (lead ukemi and fundamentals instruction)"
            ]
          },
          "rules": {
            "matchTime": "4-minute senior matches under the full IJF ruleset; unlimited golden score; osaekomi 5s yuko, 10s waza-ari, 20s ippon; two waza-ari equal ippon.",
            "promotion": "USA Judo minimum age is typically 17 for Shodan; usually at least 1 year at Ikkyu plus exam (kata and technique demonstration) or accumulated competition points.",
            "legal": [
              "All IJF-legal senior techniques (throws, hold-downs, chokes, elbow armlocks)"
            ],
            "newlyLegal": [],
            "illegal": [
              "Direct leg grabs (attacking below the belt to throw)",
              "Kani-basami (flying scissors) — hansoku-make",
              "Kawazu-gake (entwined leg throw)",
              "Do-jime (body scissors)",
              "Joint locks on anything except the elbow",
              "Diving head-first on forward throws",
              "Any act against the spirit of judo (immediate hansoku-make)"
            ]
          }
        }
      ]
    },
    "junior": {
      "label": "Junior (under 13)",
      "belts": [
        {
          "id": "judo-junior-white",
          "name": "Junior White Belt",
          "color": "#FFFFFF",
          "textColor": "#1F2937",
          "goal": "Learn to fall safely, follow dojo etiquette, and perform a first hip throw, foot sweep, and hold-down with a partner.",
          "curriculum": {
            "Ukemi & Movement": [
              "Ushiro-ukemi (backward breakfall)",
              "Yoko-ukemi (side breakfall)",
              "Zenpo-kaiten-ukemi (forward roll breakfall)",
              "Ebi (shrimping drill)"
            ],
            "Throws — Tachi-waza": [
              "O-goshi (major hip throw)",
              "De-ashi-barai (advancing foot sweep)"
            ],
            "Groundwork — Ne-waza": [
              "Kesa-gatame (scarf hold)"
            ],
            "Defense & Counters": [
              "Kesa-gatame escape (bridge and shrimp)"
            ],
            "Competition Knowledge": [
              "Rei (bowing etiquette) and mat safety rules"
            ]
          },
          "rules": {
            "matchTime": "Junior local matches are typically 2-3 minutes; short or capped golden score, often decided by referee decision (hantei).",
            "promotion": "Age-based; typically 3-6 months of classes, often with stripe steps between belts.",
            "legal": [
              "Basic nage-waza (standing throws)",
              "Osaekomi-waza (hold-downs)"
            ],
            "newlyLegal": [],
            "illegal": [
              "All shime-waza (chokes) — forbidden under 13",
              "All kansetsu-waza (joint locks) — forbidden under 13",
              "Direct leg grabs (attacking below the belt)",
              "Kani-basami (flying scissors)",
              "Sutemi-waza (sacrifice throws) in youngest divisions"
            ]
          }
        },
        {
          "id": "judo-junior-yellow",
          "name": "Junior Yellow Belt",
          "color": "#FDD835",
          "textColor": "#1F2937",
          "goal": "Add the big reaping throws and a shoulder throw, hold from more positions, and learn to defend on the ground.",
          "curriculum": {
            "Ukemi & Movement": [
              "Moving breakfalls both sides"
            ],
            "Throws — Tachi-waza": [
              "O-soto-gari (major outer reap)",
              "O-uchi-gari (major inner reap)",
              "Ippon-seoi-nage (one-arm shoulder throw)"
            ],
            "Groundwork — Ne-waza": [
              "Yoko-shiho-gatame (side four-corner hold)",
              "Mune-gatame (chest hold)"
            ],
            "Defense & Counters": [
              "Turtle position defense (elbows tight, chin down)",
              "Yoko-shiho-gatame escape (frame and shrimp)"
            ],
            "Competition Knowledge": [
              "Osaekomi scoring for juniors (hold-down times)"
            ]
          },
          "rules": {
            "matchTime": "Typically 2-3 minute matches for juniors with short or capped golden score.",
            "promotion": "Typically 4-6 months at junior white with regular attendance.",
            "legal": [
              "Nage-waza (standing throws)",
              "Osaekomi-waza (hold-downs)"
            ],
            "newlyLegal": [],
            "illegal": [
              "All shime-waza (chokes) — forbidden under 13",
              "All kansetsu-waza (joint locks) — forbidden under 13",
              "Direct leg grabs (attacking below the belt)",
              "Kani-basami (flying scissors)"
            ]
          }
        },
        {
          "id": "judo-junior-orange",
          "name": "Junior Orange Belt",
          "color": "#F57C00",
          "textColor": "#FFFFFF",
          "goal": "Chain two attacks together, turn opponents over on the ground, and start light randori with grip awareness.",
          "curriculum": {
            "Throws — Tachi-waza": [
              "Sasae-tsurikomi-ashi (propping ankle block)",
              "Hiza-guruma (knee wheel)",
              "Ko-uchi-gari (minor inner reap)",
              "O-uchi-gari into ippon-seoi-nage (combination)"
            ],
            "Groundwork — Ne-waza": [
              "Kami-shiho-gatame (upper four-corner hold)",
              "Turtle turnover to kesa-gatame"
            ],
            "Defense & Counters": [
              "Grip breaks (two-hands-on-one)",
              "Balance recovery against foot sweeps"
            ],
            "Competition Knowledge": [
              "Junior shiai rules (no chokes, no armlocks under 13)"
            ]
          },
          "rules": {
            "matchTime": "Typically 2-3 minute matches for juniors with short or capped golden score.",
            "promotion": "Typically 6 months at junior yellow; combinations and light randori expected.",
            "legal": [
              "Nage-waza (standing throws)",
              "Osaekomi-waza (hold-downs)"
            ],
            "newlyLegal": [],
            "illegal": [
              "All shime-waza (chokes) — forbidden under 13",
              "All kansetsu-waza (joint locks) — forbidden under 13",
              "Direct leg grabs (attacking below the belt)",
              "Kani-basami (flying scissors)"
            ]
          }
        },
        {
          "id": "judo-junior-green",
          "name": "Junior Green Belt",
          "color": "#2E7D32",
          "textColor": "#FFFFFF",
          "goal": "Round out the junior syllabus with body drops and sweeps, switch between hold-downs, and compete confidently under junior rules before moving to the senior track at 13.",
          "curriculum": {
            "Ukemi & Movement": [
              "High ukemi from partner throws"
            ],
            "Throws — Tachi-waza": [
              "Tai-otoshi (body drop)",
              "Okuri-ashi-barai (double foot sweep)",
              "Ko-soto-gari (minor outer reap)"
            ],
            "Groundwork — Ne-waza": [
              "Tate-shiho-gatame (vertical mount hold)",
              "Osaekomi switching (kesa to yoko-shiho)"
            ],
            "Defense & Counters": [
              "De-ashi-barai counter timing (tsubame-gaeshi intro)",
              "Escape from kami-shiho-gatame"
            ],
            "Competition Knowledge": [
              "Match etiquette and scoreboard basics"
            ]
          },
          "rules": {
            "matchTime": "Typically 3-minute matches for older juniors; golden score rules vary by tournament.",
            "promotion": "Typically 6-12 months at junior orange; at age 13 juniors transfer into the senior kyu track.",
            "legal": [
              "Nage-waza (standing throws)",
              "Osaekomi-waza (hold-downs)"
            ],
            "newlyLegal": [],
            "illegal": [
              "All shime-waza (chokes) — forbidden under 13",
              "All kansetsu-waza (joint locks) — forbidden under 13",
              "Direct leg grabs (attacking below the belt)",
              "Kani-basami (flying scissors)"
            ]
          }
        }
      ]
    }
  }
};
