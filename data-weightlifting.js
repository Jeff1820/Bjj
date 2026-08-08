/* Weightlifting progression data. Auto-drafted; standards are male bodyweight multiples (see rules text). */
SPORTS.weightlifting = {
  "id": "weightlifting",
  "emoji": "💪",
  "label": "Weightlifting",
  "name": "Weightlifting",
  "appTitle": "Weightlifting Progression Tracker",
  "tagline": "Check off lifts and strength benchmarks as you climb from empty-bar foundations to elite bodyweight-multiple standards, with built-in strength standards and IPF-style meet rules.",
  "rulesLabel": "Strength Standards",
  "tracks": {
    "adult": {
      "label": "Adult",
      "belts": [
        {
          "id": "weightlifting-foundations",
          "name": "Foundations",
          "color": "#ECEFF1",
          "textColor": "#263238",
          "goal": "Build safe, repeatable movement patterns on the squat, hinge, press, and pull before chasing load. Every rep is with bodyweight, dumbbells, kettlebells, or an empty barbell.",
          "curriculum": {
            "Squat": [
              "Bodyweight box squat to parallel with controlled tempo",
              "Goblet squat 3x10 with dumbbell or kettlebell",
              "Barbell back squat to depth with empty bar"
            ],
            "Bench & Press": [
              "Push-up 3x10 with full range of motion",
              "Bench press with empty bar, controlled touch and press",
              "Dumbbell overhead press 3x8"
            ],
            "Deadlift & Hinge": [
              "Hip hinge drill with dowel rod along the spine",
              "Kettlebell deadlift 3x8 with neutral back",
              "Barbell deadlift from blocks with light plates"
            ],
            "Olympic Lifts & Power": [
              "Overhead squat with PVC pipe",
              "Box jump with soft landing mechanics"
            ],
            "Accessories & Conditioning": [
              "Plank 60 seconds",
              "20-minute brisk walk, easy row, or bike"
            ],
            "Mobility & Recovery": [
              "Couch stretch for hip flexors",
              "Ankle dorsiflexion wall drill",
              "World's greatest stretch flow"
            ]
          },
          "rules": {
            "matchTime": "3 full-body sessions per week, 45-60 minutes each. 3 sets of 8-12 reps on main patterns with empty bar or light implements, focusing on positions and bracing rather than weight on the bar.",
            "promotion": "Ready for Novice when you can squat to depth, hinge with a flat back, press overhead without lumbar arch, and bench with a stable setup using the empty 20 kg / 45 lb bar for all listed sets and reps, pain-free.",
            "legal": [
              "Empty barbell, dumbbells, kettlebells, and bodyweight only on main lifts",
              "Machines and assisted variations to groove patterns",
              "Box squats and block pulls to limit range while mobility develops"
            ],
            "newlyLegal": [
              "Empty-bar back squat, bench press, deadlift, and overhead press",
              "PVC and empty-bar overhead squat",
              "Low box jumps and broad jumps"
            ],
            "illegal": [
              "Adding plates before movement quality is consistent",
              "Squatting high or cutting depth to move more weight",
              "Rounding the lower back on any hinge",
              "Benching without a spotter or safety arms",
              "Maxing out or testing 1RMs at this level"
            ]
          }
        },
        {
          "id": "weightlifting-novice",
          "name": "Novice",
          "color": "#1E88E5",
          "textColor": "#FFFFFF",
          "goal": "Run a linear progression, adding small amounts of weight every session. Reach the widely used novice strength standards of roughly a 1x bodyweight squat, 0.75x bench, and 1.25x deadlift.",
          "curriculum": {
            "Squat": [
              "Back squat 3x5 linear progression, adding 2.5 kg per session",
              "Back squat 1x bodyweight",
              "Front squat technique with light load"
            ],
            "Bench & Press": [
              "Bench press 3x5 with spotter or safety arms",
              "Bench press 0.75x bodyweight",
              "Overhead press 0.5x bodyweight"
            ],
            "Deadlift & Hinge": [
              "Deadlift 1x5 top set, resetting each rep on the floor",
              "Deadlift 1.25x bodyweight",
              "Romanian deadlift 3x8"
            ],
            "Olympic Lifts & Power": [
              "Power clean technique with light load",
              "Kettlebell swing 3x15"
            ],
            "Accessories & Conditioning": [
              "Barbell row 3x8",
              "Chin-up 3 strict reps",
              "Face pulls for shoulder health"
            ],
            "Mobility & Recovery": [
              "Thoracic spine foam rolling before pressing",
              "90/90 hip stretch"
            ]
          },
          "rules": {
            "matchTime": "3 full-body sessions per week (e.g. Starting Strength or StrongLifts style), 60-75 minutes. 3x5 on squat and press variations, 1x5 deadlift, small jumps every session while progress lasts.",
            "promotion": "Ready for Intermediate when linear gains stall despite good sleep and food, and you hit roughly squat 1x, bench 0.75x, deadlift 1.25x, press 0.5x bodyweight. Standards shown are male multiples; women typically use about 65-75% of these numbers.",
            "legal": [
              "Loaded barbell work on all four main lifts with strict form",
              "Session-to-session linear loading in small increments",
              "Light power clean technique work"
            ],
            "newlyLegal": [
              "Working sets above bodyweight on squat and deadlift",
              "Power clean with light load",
              "Barbell rows and weighted accessories"
            ],
            "illegal": [
              "High squats above parallel counted as completed reps",
              "Bouncing deadlifts off the floor with a slack back",
              "Ego loading with big plate jumps that break form",
              "Benching heavy without a spotter or safety arms",
              "Frequent 1RM testing that derails the progression"
            ]
          }
        },
        {
          "id": "weightlifting-intermediate",
          "name": "Intermediate",
          "color": "#43A047",
          "textColor": "#FFFFFF",
          "goal": "Progress week to week instead of session to session using structured programming. Reach the common intermediate standards of roughly a 1.5x bodyweight squat, 1x bench, and 1.75-2x deadlift.",
          "curriculum": {
            "Squat": [
              "Back squat 1.5x bodyweight",
              "Pause squat 3x3 with 2-second hold in the hole",
              "Front squat 1x bodyweight"
            ],
            "Bench & Press": [
              "Bench press 1x bodyweight",
              "Overhead press 0.75x bodyweight",
              "Close-grip bench press 3x8"
            ],
            "Deadlift & Hinge": [
              "Deadlift 1.75-2x bodyweight",
              "Deficit deadlift 3x5",
              "Barbell hip thrust 3x8"
            ],
            "Olympic Lifts & Power": [
              "Power clean 1x bodyweight",
              "Push press 3x5"
            ],
            "Accessories & Conditioning": [
              "Weighted pull-up 3x5",
              "Dips 3x10",
              "Farmer's carry, heavy for 40 meters"
            ],
            "Mobility & Recovery": [
              "Jefferson curl with light load",
              "Pigeon pose 2 minutes per side"
            ]
          },
          "rules": {
            "matchTime": "4 sessions per week on an upper/lower or 4-day split (e.g. Texas Method, 5/3/1, GZCLP), 75-90 minutes. Weekly progression with volume, intensity, and recovery days; top sets around RPE 8.",
            "promotion": "Ready for Advanced when weekly progression stalls and you hit roughly squat 1.5x, bench 1x, deadlift 1.75-2x, press 0.75x bodyweight with competition-acceptable technique. Standards shown are male multiples; women typically use about 65-75% of these numbers.",
            "legal": [
              "Periodized weekly loading with planned heavy, medium, and light days",
              "Pause, deficit, and tempo variations of the main lifts",
              "Power clean and push press as speed work",
              "Lifting belt on top sets of squat and deadlift"
            ],
            "newlyLegal": [
              "Programmed heavy singles and doubles at RPE 8-9",
              "Deficit deadlifts and pause squats",
              "Weighted pull-ups and dips",
              "Belt, chalk, and wrist wraps"
            ],
            "illegal": [
              "Grinding missed reps set after set instead of adjusting load",
              "Skipping the planned light and medium days",
              "Cutting squat depth or bouncing the bench bar off the chest",
              "Hitching deadlifts up the thighs",
              "Ignoring nagging joint pain instead of modifying training"
            ]
          }
        },
        {
          "id": "weightlifting-advanced",
          "name": "Advanced",
          "color": "#6D4C41",
          "textColor": "#FFFFFF",
          "goal": "Train in dedicated blocks and lift to competition standards. Reach the widely cited advanced marks of roughly a 2x bodyweight squat, 1.5x bench, and 2.5x deadlift, and be meet-ready under IPF-style rules.",
          "curriculum": {
            "Squat": [
              "Back squat 2x bodyweight",
              "Competition squat with walkout, depth below parallel, and rack command",
              "Tempo squat with 3-second eccentric"
            ],
            "Bench & Press": [
              "Bench press 1.5x bodyweight",
              "Paused competition bench press, motionless on the chest",
              "Overhead press 1x bodyweight"
            ],
            "Deadlift & Hinge": [
              "Deadlift 2.5x bodyweight",
              "Block pull overload above knee",
              "Snatch-grip deadlift 3x5"
            ],
            "Olympic Lifts & Power": [
              "Power clean 1.25x bodyweight",
              "Power snatch with moderate load",
              "Clean and jerk technique refinement"
            ],
            "Accessories & Conditioning": [
              "Weighted pull-up with 0.5x bodyweight added",
              "Belt squat or leg press volume work for joint-friendly hypertrophy"
            ],
            "Mobility & Recovery": [
              "Banded shoulder dislocates and pass-throughs",
              "Hip airplane balance drill"
            ]
          },
          "rules": {
            "matchTime": "4-5 sessions per week in block periodization (hypertrophy, strength, peaking), 90-120 minutes. Main lifts 3-5 sets of 1-5 reps at 80-92.5%, with planned deloads every 4-6 weeks.",
            "promotion": "Ready for Elite when you total around 6x bodyweight across the three lifts (about squat 2x, bench 1.5x, deadlift 2.5x) with every rep meeting referee standards, ideally proven in a sanctioned meet. Standards shown are male multiples; women typically use about 65-75% of these numbers.",
            "legal": [
              "IPF squat standard: hip crease below the top of the knee, then recover and wait for the rack command",
              "IPF bench standard: bar motionless on the chest until the press command, press to lockout, wait for the rack command",
              "IPF deadlift standard: full lockout with knees straight and shoulders back, lower only on the down command",
              "Raw equipment: singlet, belt up to 10 cm wide, knee sleeves, wrist wraps, chalk",
              "Three attempts per lift in competition; best of each lift makes the total"
            ],
            "newlyLegal": [
              "Meet-style heavy singles with commands from a training partner",
              "Overload block pulls and heavy walkouts",
              "Full competition peaking and taper blocks"
            ],
            "illegal": [
              "Squats above parallel: red lights in competition",
              "Heaving or sinking the bar on the chest, or pressing before the command",
              "Hitching or ramping the deadlift up the thighs",
              "Downward movement of the bar during the ascent of squat or bench",
              "Training through sharp pain during peaking blocks",
              "Unsanctioned supportive gear in a raw division"
            ]
          }
        },
        {
          "id": "weightlifting-elite",
          "name": "Elite",
          "color": "#212121",
          "textColor": "#FFD700",
          "goal": "Compete at a high level with roughly a 2.5x bodyweight squat, 1.75x bench, and 3x deadlift. Training is fully individualized around meets, with mastery of attempt selection and IPF competition rules.",
          "curriculum": {
            "Squat": [
              "Back squat 2.5x bodyweight",
              "Competition squat executed on squat and rack commands to IPF depth",
              "Heavy single at RPE 9 with handoff and spotter team"
            ],
            "Bench & Press": [
              "Bench press 1.75x bodyweight",
              "Competition bench with start, press, and rack commands",
              "Overhead press 1.25x bodyweight"
            ],
            "Deadlift & Hinge": [
              "Deadlift 3x bodyweight",
              "Competition deadlift with clean lockout and no hitching",
              "Opener, second, and third attempt selection strategy"
            ],
            "Olympic Lifts & Power": [
              "Power clean 1.5x bodyweight",
              "Snatch at bodyweight for athletic power maintenance"
            ],
            "Accessories & Conditioning": [
              "Individualized weak-point accessory block",
              "GPP circuits and sled work between meet preps"
            ],
            "Mobility & Recovery": [
              "Daily mobility minimums maintained through the peak",
              "Planned deload and taper week before competition"
            ]
          },
          "rules": {
            "matchTime": "5-6 sessions per week, fully individualized and coach-managed around a meet calendar. Peaking waves at 85-100%+, heavy singles with full commands, deloads and tapers built into every block.",
            "promotion": "This is the top level: maintain an 8x+ bodyweight-multiple total (about squat 2.5x, bench 1.75x, deadlift 3x), qualify for national-level meets, and go 7, 8, or 9 for 9 on attempts. Standards shown are male multiples; women typically use about 65-75% of these numbers.",
            "legal": [
              "Full IPF meet execution: three attempts per lift, heaviest good attempt counts toward the total",
              "Squat: wait for the squat command, break parallel, recover, wait for the rack command",
              "Bench: head, shoulders, and glutes on the bench, feet flat, pause on the chest for the press command",
              "Deadlift: one continuous pull to lockout, down command before lowering, no dropping the bar",
              "Approved raw gear only: singlet, undershirt, belt up to 10 cm and 13 mm thick, knee sleeves, wrist wraps up to 1 m, chalk",
              "Weigh-in and weight-class management per federation rules"
            ],
            "newlyLegal": [
              "Overloaded competition singles above 100% of previous meet best",
              "Advanced peaking tools such as timed attempts with a full command crew"
            ],
            "illegal": [
              "Any depth, pause, or lockout shortcut that would draw red lights",
              "Hitching, ramping, or resting the deadlift bar on the thighs",
              "Double bounce or downward motion during the squat or bench ascent",
              "Stepping back or foot movement after the deadlift down command before replacing the bar",
              "Banned substances and unapproved supportive equipment",
              "Sacrificing long-term joint health for short-term totals"
            ]
          }
        }
      ]
    },
    "masters": {
      "label": "Masters (40+)",
      "belts": [
        {
          "id": "weightlifting-masters-foundations",
          "name": "Masters Foundations",
          "color": "#90A4AE",
          "textColor": "#1C2833",
          "goal": "Rebuild or establish the barbell patterns after 40 with joint-friendly variations, longer warm-ups, and an emphasis on tissue tolerance before load.",
          "curriculum": {
            "Squat": [
              "Box squat to parallel with controlled tempo",
              "Goblet squat 3x10"
            ],
            "Bench & Press": [
              "Dumbbell bench press 3x10 with neutral grip",
              "Landmine press for shoulder-friendly overhead work"
            ],
            "Deadlift & Hinge": [
              "Trap bar deadlift 3x8",
              "Romanian deadlift with dumbbells 3x10"
            ],
            "Olympic Lifts & Power": [
              "Medicine ball throw and low box jump for power maintenance"
            ],
            "Accessories & Conditioning": [
              "Face pulls for shoulder health"
            ],
            "Mobility & Recovery": [
              "Couch stretch for hip flexors",
              "10-minute daily joint mobility routine"
            ]
          },
          "rules": {
            "matchTime": "2-3 full-body sessions per week, 45-60 minutes, with 10-15 minute warm-ups. 3 sets of 8-12 reps, at least one rest day between sessions, loads kept 2-3 reps shy of failure.",
            "promotion": "Ready for Masters Strength when all main patterns are pain-free under moderate barbell load, warm-ups are habitual, and recovery between sessions is reliable.",
            "legal": [
              "Trap bar, safety bar, dumbbell, and machine variations as full substitutes",
              "Reduced range of motion (box squats, block pulls) while mobility rebuilds",
              "Extra rest days whenever recovery lags"
            ],
            "newlyLegal": [
              "Light barbell work on all main patterns",
              "Low-impact power work: med ball throws, sled pushes, low jumps"
            ],
            "illegal": [
              "Training through joint pain instead of swapping variations",
              "Skipping warm-ups",
              "Max-effort or 1RM attempts",
              "Bouncing deadlifts or high squats to inflate numbers",
              "Benching without a spotter or safety arms"
            ]
          }
        },
        {
          "id": "weightlifting-masters-strength",
          "name": "Masters Strength",
          "color": "#00796B",
          "textColor": "#FFFFFF",
          "goal": "Build real strength on a recovery-first schedule: roughly a 1.25x bodyweight squat, 1x bench, and 1.5x deadlift, using the bar or joint-friendly variations as needed.",
          "curriculum": {
            "Squat": [
              "Back squat 1.25x bodyweight",
              "Safety bar squat as a knee- and shoulder-friendly variation"
            ],
            "Bench & Press": [
              "Bench press 1x bodyweight",
              "Overhead press 0.6x bodyweight if shoulders allow, otherwise landmine press"
            ],
            "Deadlift & Hinge": [
              "Trap bar or conventional deadlift 1.5x bodyweight",
              "Romanian deadlift 3x8"
            ],
            "Olympic Lifts & Power": [
              "Kettlebell swing 3x15",
              "Hang power clean with light load"
            ],
            "Accessories & Conditioning": [
              "Chin-up 5 strict reps"
            ],
            "Mobility & Recovery": [
              "48-72 hours between heavy lower-body sessions with active recovery walks"
            ]
          },
          "rules": {
            "matchTime": "3 sessions per week, 60-75 minutes, undulating loads (heavy/light/medium). Top sets 3-5 reps at RPE 7-8, double progression on accessories, deload every 4th week by default.",
            "promotion": "Ready for Masters Performance when you hit roughly squat 1.25x, bench 1x, deadlift 1.5x bodyweight with clean technique and no recurring joint flare-ups. Standards shown are male multiples; women typically use about 65-75% of these numbers.",
            "legal": [
              "Moderate-heavy barbell work at RPE 7-8, stopping shy of grinders",
              "Specialty bars and trap bar counted as main-lift equivalents",
              "Belt and wrist wraps on top sets",
              "Autoregulation: cutting a session short when recovery is poor"
            ],
            "newlyLegal": [
              "Programmed heavy triples and fives",
              "Light hang power cleans and kettlebell power work",
              "Weighted chin-ups when elbows tolerate them"
            ],
            "illegal": [
              "Grinding reps to failure on main lifts",
              "Back-to-back heavy days without recovery",
              "Cutting depth or bouncing reps to hit a number",
              "Ignoring tendon warning signs (elbow, knee, biceps)",
              "Skipping scheduled deload weeks"
            ]
          }
        },
        {
          "id": "weightlifting-masters-performance",
          "name": "Masters Performance",
          "color": "#4527A0",
          "textColor": "#FFFFFF",
          "goal": "Compete or train at masters powerlifting standards: roughly a 1.75x bodyweight squat, 1.25x bench, and 2x deadlift, executed to IPF masters competition rules with recovery managed like a pro.",
          "curriculum": {
            "Squat": [
              "Back squat 1.75x bodyweight",
              "Competition-depth squat practice with squat and rack commands"
            ],
            "Bench & Press": [
              "Bench press 1.25x bodyweight",
              "Paused bench press to competition standard"
            ],
            "Deadlift & Hinge": [
              "Deadlift 2x bodyweight",
              "Block pulls to manage weekly pulling volume"
            ],
            "Olympic Lifts & Power": [
              "Power clean 0.75-1x bodyweight"
            ],
            "Accessories & Conditioning": [
              "Weighted carries and sled drags for low-impact conditioning"
            ],
            "Mobility & Recovery": [
              "Structured deload every 3-4 weeks",
              "Daily hip and shoulder maintenance routine"
            ]
          },
          "rules": {
            "matchTime": "3-4 sessions per week, 75-90 minutes, block periodization with longer tapers than the open class. Heavy singles only in the final peaking weeks, volume trimmed 10-20% versus open-class templates.",
            "promotion": "This is the top masters level: maintain roughly a 5x bodyweight-multiple total (squat 1.75x, bench 1.25x, deadlift 2x), and ideally post it in a sanctioned masters meet (age classes 40-49, 50-59, 60+). Standards shown are male multiples; women typically use about 65-75% of these numbers.",
            "legal": [
              "IPF-style meet execution: three attempts per lift, commands on every lift",
              "Squat below parallel, paused bench on the press command, deadlift locked out with no hitching",
              "Raw gear: singlet, belt up to 10 cm, knee sleeves, wrist wraps, chalk",
              "Conservative opener selection (about 91-93% of best gym single)",
              "Extended tapers and extra recovery days during meet prep"
            ],
            "newlyLegal": [
              "Meet-style heavy singles with a full command crew",
              "Competition peaking and attempt-selection strategy"
            ],
            "illegal": [
              "High squats, pressed-early benches, or hitched deadlifts",
              "Chasing open-class volume that outruns 40+ recovery",
              "Third attempts far beyond anything done in training",
              "Training through sharp pain during the peak",
              "Skipping the post-meet recovery block"
            ]
          }
        }
      ]
    }
  }
};
