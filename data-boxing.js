/* Boxing progression data. Auto-drafted, review against the current USA Boxing rulebook. */
SPORTS.boxing = {
  "id": "boxing",
  "emoji": "🥊",
  "label": "Boxing",
  "name": "Boxing",
  "appTitle": "Boxing Skill Progression Tracker",
  "tagline": "Check off the skills for each level, from first jab to competition ready, with USA Boxing amateur rules built in at every step.",
  "rulesLabel": "USA Boxing Rules",
  "tracks": {
    "adult": {
      "label": "Adult (18+)",
      "belts": [
        {
          "id": "boxing-fundamentals",
          "name": "Fundamentals",
          "color": "#F3F4F6",
          "textColor": "#1F2937",
          "goal": "Build the foundation: a balanced stance, a tight guard, and clean straight punches. Learn gym etiquette, hand wrapping, and how amateur boxing is scored before any partner contact.",
          "curriculum": {
            "Stance & Footwork": [
              "Orthodox and southpaw stance basics",
              "Guard position: hands up, chin down, elbows in",
              "Step-drag forward and backward",
              "Lateral step-drag left and right"
            ],
            "Offense — Punches": [
              "Jab (1)",
              "Cross (2)",
              "1-2 combination",
              "Straight punches on heavy bag with full fist rotation"
            ],
            "Defense — Basics": [
              "High guard blocking",
              "Catch and block the jab",
              "Chin tuck behind the lead shoulder"
            ],
            "Ring Craft & Conditioning": [
              "Hand wrapping technique",
              "Jump rope 3 rounds basic bounce",
              "Shadowboxing 2 rounds with form focus"
            ],
            "Competition Knowledge": [
              "Learn the 10-point must scoring system",
              "Learn the basic fouls: low blows, holding, rabbit punches"
            ]
          },
          "rules": {
            "matchTime": "No bouts at this level; training rounds run 2-3 minutes. For reference, USA Boxing Elite (19-40) and Youth (17-18) bouts are 3 rounds of 3 minutes.",
            "promotion": "Ready for Novice when your stance stays balanced under movement, your 1-2 lands with proper form on the bag, and you can wrap your own hands and hold your guard for a full round.",
            "legal": [
              "Shadowboxing, heavy bag, and coach mitt work only",
              "16 oz gloves and wrapped hands for all bag and mitt work",
              "Footwork and defense drills without partner contact"
            ],
            "newlyLegal": [
              "First time gloving up on the heavy bag",
              "First coached mitt rounds with straight punches"
            ],
            "illegal": [
              "No sparring or partner contact of any kind at this level",
              "No bag work without wraps and gloves",
              "Fouls to learn now: hitting below the belt, rabbit punches (back of the head), holding, hitting with the inside or open glove"
            ]
          }
        },
        {
          "id": "boxing-novice",
          "name": "Novice",
          "color": "#FCD34D",
          "textColor": "#78350F",
          "goal": "Add hooks and full combinations, learn to slip and parry, and start controlled partner drills. Develop rhythm on the bag and the conditioning to work full rounds.",
          "curriculum": {
            "Stance & Footwork": [
              "Pivot on the lead foot",
              "Moving jab: step-drag with jab",
              "Circling out left and right with guard up"
            ],
            "Offense — Punches & Combinations": [
              "Lead hook (3)",
              "Rear hook (4)",
              "1-2-3 combination",
              "Double jab to cross (1-1-2)",
              "Jab to the body"
            ],
            "Defense — Guards, Slips & Rolls": [
              "Slip left and slip right",
              "Parry the jab",
              "Block the hook with high guard"
            ],
            "Ring Craft & Conditioning": [
              "Shadowboxing 3 rounds with movement",
              "Heavy bag 3 rounds with combinations",
              "Partner mitt work: 1-2 and 1-2-3"
            ],
            "Competition Knowledge": [
              "Understand the mandatory standing eight count",
              "Know equipment rules: mouthguard, headgear, 10 oz gloves at 143 lbs or less and 12 or 16 oz above"
            ]
          },
          "rules": {
            "matchTime": "Still pre-competition; work 3x2 minute training rounds building toward the 3x3 minute Elite format.",
            "promotion": "Ready for Intermediate when you can throw 3-punch combinations with balance, slip a partner's slow jab consistently, and complete 3 hard rounds on the bag without dropping your guard.",
            "legal": [
              "Coach-supervised partner drills at controlled speed",
              "Body-only touch drills with 16 oz gloves and mouthguard",
              "Defense-only drills against a partner's slow jab"
            ],
            "newlyLegal": [
              "First controlled partner drills: touch contact to the body only",
              "First defense reaction drills against live punches"
            ],
            "illegal": [
              "No head-contact sparring yet",
              "No partner drills without mouthguard and coach supervision",
              "Fouls reinforced in drills: no holding, no hitting on the break, no pushing, no leading with the head"
            ]
          }
        },
        {
          "id": "boxing-intermediate",
          "name": "Intermediate",
          "color": "#F97316",
          "textColor": "#FFFFFF",
          "goal": "Combine offense and defense: uppercuts, counters off slips and rolls, and your first supervised technical sparring. Build timing on the double-end bag and learn referee commands cold.",
          "curriculum": {
            "Stance & Footwork": [
              "In-and-out footwork with feints",
              "Pivot out after combinations",
              "Cutting off the ring"
            ],
            "Offense — Punches & Combinations": [
              "Lead uppercut (5) and rear uppercut (6)",
              "1-2-3-2 combination",
              "Jab to the body, cross to the head",
              "Hook to the body, hook to the head"
            ],
            "Defense — Slips, Rolls & Counters": [
              "Slip and counter with cross",
              "Roll under the hook",
              "Pull back and counter with the cross",
              "Catch the jab and return the jab"
            ],
            "Ring Craft & Conditioning": [
              "Double-end bag rhythm work",
              "Technical sparring at light contact with headgear",
              "Shadowboxing 3 rounds with defense focus"
            ],
            "Competition Knowledge": [
              "Know referee commands: box, break, stop",
              "Study amateur bout footage against the 10-point must criteria"
            ]
          },
          "rules": {
            "matchTime": "Technical sparring rounds of 2-3 minutes; conditioning targets the 3x3 minute Elite bout format.",
            "promotion": "Ready for Advanced when you stay composed in light sparring, counter off slips and blocks instead of freezing, and control distance for a full round against different partners.",
            "legal": [
              "Light technical sparring with headgear, mouthguard, groin protector, and 16 oz gloves",
              "Full-speed mitt and double-end bag work",
              "Situational drills: jab-only rounds, body-only rounds, defense-only rounds"
            ],
            "newlyLegal": [
              "First supervised head-contact technical sparring",
              "First full defensive rounds under live pressure"
            ],
            "illegal": [
              "No hard sparring; contact stays light and controlled",
              "No sparring without full protective equipment and a coach present",
              "Fouls called live: low blows, rabbit punches, holding and hitting, hitting on the break, pivot (backhand) blows"
            ]
          }
        },
        {
          "id": "boxing-advanced",
          "name": "Advanced",
          "color": "#DC2626",
          "textColor": "#FFFFFF",
          "goal": "Fight-level skills: angles, feints, counter combinations, and hard sparring under supervision. Register with USA Boxing and learn everything that happens on bout day.",
          "curriculum": {
            "Stance & Footwork": [
              "45-degree angle step off the jab",
              "Southpaw vs orthodox lead-foot battle",
              "Feint step to draw the lead"
            ],
            "Offense — Punches & Combinations": [
              "Slip the jab, counter 2-3",
              "Body attack series: 2 to the body, 3 to the body, 3 to the head",
              "Check hook off the back foot",
              "Combinations off feints"
            ],
            "Defense — Advanced": [
              "Shoulder roll and return the cross",
              "Slip-roll-slip sequence under pressure",
              "Block and counter in the pocket",
              "Defense against the southpaw jab and straight left"
            ],
            "Ring Craft & Conditioning": [
              "Hard sparring rounds under coach supervision",
              "Interval conditioning at 3x3 minute bout pace",
              "Double-end bag with slips between punches"
            ],
            "Competition Knowledge": [
              "Complete USA Boxing athlete registration and physical",
              "Corner procedure: one-minute rest routine with your coach"
            ]
          },
          "rules": {
            "matchTime": "Sparring simulates the amateur format: 3 rounds of 3 minutes for Elite and Youth; 3x2 for Junior and Intermediate divisions.",
            "promotion": "Ready for Competition Ready when your coach confirms you can spar hard rounds safely, execute a game plan, and recover between rounds; USA Boxing registration and physical are complete.",
            "legal": [
              "Hard sparring with full equipment under coach supervision",
              "Exhibition and developmental bouts with mandatory headgear",
              "Full-contact bodywork and counterpunching drills"
            ],
            "newlyLegal": [
              "First hard sparring rounds",
              "First developmental or exhibition bouts",
              "Registered USA Boxing amateur status"
            ],
            "illegal": [
              "All USA Boxing fouls enforced in sparring: hitting below the belt, back of the head or kidneys, holding, wrestling, hitting a downed opponent",
              "No passive defense: turning the back or intentionally dropping to avoid punches is a foul",
              "No sparring while cutting weight aggressively or when medical clearance has lapsed"
            ]
          }
        },
        {
          "id": "boxing-competition-ready",
          "name": "Competition Ready",
          "color": "#1F2937",
          "textColor": "#FFFFFF",
          "goal": "Everything comes together for a sanctioned amateur bout: game plans, ring generalship, weight management, and total command of USA Boxing rules and bout-day procedure.",
          "curriculum": {
            "Stance & Footwork": [
              "Ring generalship: holding center ring",
              "Escaping the corner and getting off the ropes"
            ],
            "Offense — Punches & Combinations": [
              "Five and six punch combinations with movement",
              "Counterpunching game plan against pressure fighters",
              "Finishing sequences when the opponent is hurt"
            ],
            "Defense — Full Rounds": [
              "Full-round defensive shells with counters",
              "Clinch awareness and clean exits without holding fouls"
            ],
            "Ring Craft & Conditioning": [
              "Simulated bouts at 3x3 minute competition pace",
              "Weight management and hydration plan for weigh-in",
              "Pre-bout warm-up routine with coach"
            ],
            "Competition Knowledge": [
              "Bout-day procedure: weigh-in, physical, equipment check, glove table",
              "Full USA Boxing fouls list, warnings, and point deductions",
              "Scoring a live bout with the 10-point must system"
            ]
          },
          "rules": {
            "matchTime": "USA Boxing sanctioned bouts: Elite (19-40) and Youth (17-18) box 3 rounds of 3 minutes, male and female; Junior (15-16) and Intermediate (13-14) box 3x2; Bantam (11-12) and Pee Wee (8-10) box 3x1.5.",
            "promotion": "This is the top level: readiness means winning novice-division bouts and progressing toward open class as bout experience accumulates.",
            "legal": [
              "Sanctioned amateur bouts scored by 3 or 5 judges on the 10-point must system",
              "Headgear required in all divisions at USA Boxing local, regional, and national competitions",
              "10 oz gloves at 143 lbs or less; 12 or 16 oz gloves over 143 lbs; molded mouthguard mandatory",
              "Mandatory eight count on any knockdown; maximum three eight counts per round, four per bout"
            ],
            "newlyLegal": [
              "First sanctioned USA Boxing amateur bout",
              "Entry into novice-division tournaments and Golden Gloves",
              "Advancing tournaments once bout minimums are met"
            ],
            "illegal": [
              "Hitting below the belt, holding, tripping, kicking, or butting",
              "Blows with the head, shoulder, forearm, or elbow",
              "Hitting with the open or inside of the glove, wrist, or side of the hand",
              "Blows to the back, back of the neck or head (rabbit punch), or kidneys",
              "Pivot (backhand) blows, holding and hitting, hitting on the break, attacking a downed opponent",
              "Passive defense, speaking in the ring, spitting out the mouthpiece intentionally, ducking below the belt"
            ]
          }
        }
      ]
    },
    "youth": {
      "label": "Youth (8-17)",
      "belts": [
        {
          "id": "boxing-youth-rookie",
          "name": "Rookie",
          "color": "#93C5FD",
          "textColor": "#1E3A8A",
          "goal": "Learn the boxing stance, straight punches, and gym habits through games, bag work, and mitt work. No partner contact: this level is all about form, fun, and confidence.",
          "curriculum": {
            "Stance & Footwork": [
              "Boxing stance with hands up, chin down",
              "Step-drag forward and back without crossing feet"
            ],
            "Offense — Punches": [
              "Jab (1)",
              "Cross (2)",
              "1-2 combination on coach's mitts"
            ],
            "Defense — Basics": [
              "High guard blocking",
              "Hands-up habit during footwork games"
            ],
            "Ring Craft & Conditioning": [
              "Jump rope 1 minute without stopping",
              "Shadowboxing 1 round with good form"
            ]
          },
          "rules": {
            "matchTime": "No sparring or bouts; training games run 1-1.5 minute rounds, matching the Pee Wee (ages 8-10) bout format of 3 rounds of 1.5 minutes.",
            "promotion": "Ready for Contender when the stance and guard are automatic, the 1-2 lands cleanly on mitts, and the boxer follows coach commands for a full round.",
            "legal": [
              "Bag work, mitt work, footwork games, and shadowboxing only",
              "Kid-sized gloves and wraps on all bag work",
              "USA Boxing minimum competition age is 8; Pee Wee 8-year-olds may only box 8- and 9-year-olds at club events"
            ],
            "newlyLegal": [
              "First gloves and hand wraps",
              "First coached mitt rounds"
            ],
            "illegal": [
              "No partner contact or sparring of any kind",
              "No head contact ever at this level",
              "First fouls to learn: never hit below the belt, never hit the back of the head"
            ]
          }
        },
        {
          "id": "boxing-youth-contender",
          "name": "Contender",
          "color": "#3B82F6",
          "textColor": "#FFFFFF",
          "goal": "Add the hook, longer combinations, and real defensive reactions. Begin carefully controlled body-only partner drills with full protective equipment and no head contact.",
          "curriculum": {
            "Stance & Footwork": [
              "Pivot on the lead foot",
              "Circling left and right with guard up"
            ],
            "Offense — Punches & Combinations": [
              "Lead hook (3)",
              "Double jab (1-1)",
              "1-2-3 combination"
            ],
            "Defense — Slips & Blocks": [
              "Slip left and right on coach's command",
              "Catch and block the jab",
              "Body-shield touch drills with no head contact"
            ],
            "Ring Craft & Conditioning": [
              "Heavy bag 2 rounds with combinations",
              "Learn referee commands: box, break, stop"
            ]
          },
          "rules": {
            "matchTime": "Drill rounds of 1.5-2 minutes, matching Bantam (11-12) 3x1.5 and Intermediate (13-14) 3x2 bout formats.",
            "promotion": "Ready for Junior Champion when combinations flow with balance, the boxer slips on command without closing eyes, and body-only drills stay controlled and calm.",
            "legal": [
              "Body-only touch drills with headgear, mouthguard, and age-appropriate gloves",
              "Defense-only drills against a coach's slow punches",
              "Headgear is mandatory for all youth divisions in USA Boxing competition"
            ],
            "newlyLegal": [
              "First partner contact: light body-only touch drills",
              "First live defensive reactions against slow punches"
            ],
            "illegal": [
              "No head-contact sparring at this level",
              "No partner drills without mouthguard, headgear, and a coach present",
              "Fouls reinforced: no holding, no pushing, no hitting when the coach calls break or stop"
            ]
          }
        },
        {
          "id": "boxing-youth-champion",
          "name": "Junior Champion",
          "color": "#1D4ED8",
          "textColor": "#FFFFFF",
          "goal": "Full skills for young competitors: uppercuts, counters, and coach-supervised technical sparring with full equipment, building toward a first sanctioned youth bout under USA Boxing rules.",
          "curriculum": {
            "Stance & Footwork": [
              "In-and-out movement with feints",
              "Angle step off the jab"
            ],
            "Offense — Punches & Combinations": [
              "Lead and rear uppercuts (5 and 6)",
              "1-2-3-2 combination",
              "Slip and counter with cross"
            ],
            "Defense — Slips & Rolls": [
              "Roll under the hook",
              "Controlled technical sparring with headgear, coach supervised"
            ],
            "Ring Craft & Conditioning": [
              "Double-end bag rhythm work",
              "Shadowboxing 3 rounds with defense focus",
              "Know the age-division round lengths and 10-point must scoring"
            ]
          },
          "rules": {
            "matchTime": "USA Boxing youth bouts by age: Pee Wee (8-10) and Bantam (11-12) 3x1.5 minutes; Intermediate (13-14) 3x2; Junior (15-16) 3x2; Youth (17-18) 3x3.",
            "promotion": "Ready to compete when the coach confirms composure in technical sparring, USA Boxing registration and physical are complete, and a matched bout within 2 years of age and the weight chart is available.",
            "legal": [
              "Coach-supervised technical sparring with headgear, mouthguard, and full equipment",
              "Sanctioned youth bouts with mandatory headgear and 10 oz gloves at 143 lbs or less",
              "Mandatory eight count on knockdowns; maximum three eight counts per round, four per bout",
              "Matched bouts must follow the lower age division's rules and round lengths"
            ],
            "newlyLegal": [
              "First head-contact technical sparring, light and coach supervised",
              "First sanctioned USA Boxing youth bout in the correct age division"
            ],
            "illegal": [
              "All USA Boxing fouls: low blows, rabbit punches, holding, hitting on the break, blows with head or elbow",
              "No bouts against opponents more than 2 years apart in age",
              "No competing without current USA Boxing registration, physical, and parental consent"
            ]
          }
        }
      ]
    }
  }
};
