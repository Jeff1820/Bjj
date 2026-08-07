/* CrossFit progression data. Auto-drafted, review before relying on standards. */
SPORTS.crossfit = {
  "id": "crossfit",
  "emoji": "🏋️",
  "label": "CrossFit",
  "name": "CrossFit",
  "appTitle": "CrossFit Progression Tracker",
  "tagline": "Check off movements and benchmark WODs as you climb each level, with CrossFit movement standards built in.",
  "rulesLabel": "Movement Standards",
  "tracks": {
    "adult": {
      "label": "Adult",
      "belts": [
        {
          "id": "crossfit-foundations",
          "name": "Foundations",
          "color": "#FFFFFF",
          "textColor": "#333333",
          "goal": "Learn the nine foundational movements with PVC and light loads, and build the habit of moving well before moving fast. Everything is mechanics and consistency first.",
          "curriculum": {
            "Squat & Hinge Patterns": [
              "Air squat to depth (hip crease below knee)",
              "Goblet squat with light kettlebell",
              "PVC hip hinge drill",
              "Kettlebell deadlift with neutral spine"
            ],
            "Press & Pull": [
              "PVC shoulder press to full lockout",
              "Ring row at 45 degrees",
              "Dead hang from pull-up bar 20 seconds",
              "Knee push-up x 10"
            ],
            "Olympic Lifts": [
              "PVC snatch position drills",
              "PVC clean pull to front rack"
            ],
            "Gymnastics Skills": [
              "Hollow body hold 20 seconds",
              "Plank hold 45 seconds"
            ],
            "Conditioning Benchmarks": [
              "Row 500m at any pace",
              "Single-under jump rope x 25"
            ],
            "Mobility & Recovery": [
              "Couch stretch 1 minute per side",
              "Bottom-of-squat hold 2 minutes accumulated"
            ]
          },
          "rules": {
            "matchTime": "Short AMRAPs of 8-12 minutes, simple EMOMs, and light For Time couplets, all at conversational pace with coach-led movement review before every workout.",
            "promotion": "You can air squat below parallel with heels down, hinge with a flat back, hold a plank and hollow position, and complete a full class workout with only bodyweight and PVC scalings without form breaking down.",
            "legal": [
              "PVC pipe or empty training bar for all barbell movements",
              "Ring rows instead of pull-ups",
              "Knee push-ups or elevated push-ups",
              "Box squats or squats to a target for depth learning",
              "Single-unders instead of double-unders",
              "Reduced reps and shortened workout time domains"
            ],
            "newlyLegal": [
              "Air squat, hinge, press, and row patterns",
              "Light kettlebells and dumbbells",
              "Rower, bike, and easy running",
              "Jump rope single-unders"
            ],
            "illegal": [
              "Squatting above parallel and counting the rep",
              "Rounding the back on any deadlift or hinge",
              "Adding barbell load before mechanics are consistent",
              "Kipping anything - no strict base yet",
              "Working through pain instead of telling the coach"
            ]
          }
        },
        {
          "id": "crossfit-beginner",
          "name": "Beginner",
          "color": "#4CAF50",
          "textColor": "#FFFFFF",
          "goal": "Add the empty barbell and light loads to sound movement patterns, build baseline strict strength, and finish classic benchmarks at scaled weights.",
          "curriculum": {
            "Squat & Hinge Patterns": [
              "Back squat to depth with empty barbell",
              "Front squat with empty barbell",
              "Deadlift at bodyweight x 5"
            ],
            "Press & Pull": [
              "Strict press with barbell",
              "Push-up x 10 unbroken",
              "Banded strict pull-up x 5"
            ],
            "Olympic Lifts": [
              "Hang power clean with light barbell",
              "Power snatch with training bar"
            ],
            "Gymnastics Skills": [
              "Box jump with step-down",
              "Hanging knee raise x 10",
              "Wall walk to halfway"
            ],
            "Conditioning Benchmarks": [
              "Row 2000m under 10 minutes",
              "Single-unders x 100 unbroken",
              "Run 1 mile without walking"
            ],
            "Mobility & Recovery": [
              "Overhead squat with PVC to full depth",
              "Front rack mobility stretch"
            ]
          },
          "rules": {
            "matchTime": "AMRAPs of 10-15 minutes, EMOM 10-12, and For Time workouts like scaled Cindy or Helen in the 10-20 minute range.",
            "promotion": "You handle light barbell workouts with consistent mechanics, have your first banded strict pull-ups and unbroken push-ups, and finish scaled benchmark WODs within the time cap without form falling apart.",
            "legal": [
              "Empty barbell to light loads (roughly 45-75 lb / 35-55 lb)",
              "Banded or jumping pull-ups",
              "Hanging knee raises instead of toes-to-bar",
              "Dumbbell substitutes for barbell movements",
              "Step-downs from box jumps",
              "Scaled benchmark weights (like the CrossFit Open scaled division)"
            ],
            "newlyLegal": [
              "Empty barbell back squat, front squat, deadlift, and strict press",
              "Hang power clean and power snatch with light loads",
              "Box jumps to a low box",
              "Wall walks and basic inversion work"
            ],
            "illegal": [
              "Chin not clearing the bar on pull-ups = no rep",
              "Missing full elbow lockout overhead = no rep",
              "No hip extension at the top of cleans and deadlifts = no rep",
              "Loading the bar past what technique supports (ego loading)",
              "Kipping pull-ups before strict pulling strength is built"
            ]
          }
        },
        {
          "id": "crossfit-intermediate",
          "name": "Intermediate",
          "color": "#2196F3",
          "textColor": "#FFFFFF",
          "goal": "Build real strength numbers, learn kipping gymnastics on a strict base, and take on benchmark WODs with moderate loads close to prescribed.",
          "curriculum": {
            "Squat & Hinge Patterns": [
              "Back squat 1.25x bodyweight",
              "Deadlift 1.5x bodyweight",
              "Overhead squat with barbell"
            ],
            "Press & Pull": [
              "Strict pull-up x 5",
              "Push press at 0.75x bodyweight",
              "Handstand hold against wall 30 seconds"
            ],
            "Olympic Lifts": [
              "Power clean at 0.75x bodyweight",
              "Squat clean with moderate load",
              "Split jerk footwork with barbell"
            ],
            "Gymnastics Skills": [
              "Kipping pull-up x 5",
              "Toes-to-bar x 5",
              "Handstand push-up progression (pike on box)"
            ],
            "Conditioning Benchmarks": [
              "Fran under 8 minutes (scaled ok)",
              "Helen under 12 minutes",
              "Double-unders x 25 unbroken"
            ],
            "Mobility & Recovery": [
              "Overhead squat to full depth with barbell"
            ]
          },
          "rules": {
            "matchTime": "The full menu: AMRAP, EMOM, For Time, chippers, and intervals. Benchmark WODs like Fran, Helen, and Cindy at scaled-to-moderate loads, typically 5-25 minute time domains.",
            "promotion": "You have 5+ strict pull-ups, squat and deadlift meaningfully above bodyweight, string kipping pull-ups and toes-to-bar, and can attack most WODs at or near RX loads with only minor scaling.",
            "legal": [
              "Moderate barbell loads (roughly 65-95 lb / 45-65 lb in metcons)",
              "Kipping pull-ups now that strict pulling is established",
              "Reduced-height box for handstand push-up progressions",
              "Breaking sets early to protect positions",
              "Scaling one movement in a WOD while keeping the rest RX"
            ],
            "newlyLegal": [
              "Kipping pull-ups and toes-to-bar",
              "Squat cleans and split jerks with load",
              "Overhead squats with the barbell",
              "Double-unders in workouts",
              "Benchmark WODs on the whiteboard clock"
            ],
            "illegal": [
              "Squat above parallel = no rep",
              "Overhead lifts without locked elbows and head through = no rep",
              "Toes not touching the bar = no rep",
              "Chasing the leaderboard with sloppy reps",
              "Max-effort Olympic lifts without a coach watching"
            ]
          }
        },
        {
          "id": "crossfit-rx",
          "name": "RX Athlete",
          "color": "#E53935",
          "textColor": "#FFFFFF",
          "goal": "Perform workouts as prescribed: RX loads, full gymnastics, and benchmark times that hold up on any whiteboard. Strength, skill, and engine are all in balance.",
          "curriculum": {
            "Squat & Hinge Patterns": [
              "Back squat 1.5x bodyweight",
              "Deadlift 2x bodyweight"
            ],
            "Press & Pull": [
              "Strict pull-up x 10",
              "Strict handstand push-up x 3"
            ],
            "Olympic Lifts": [
              "Squat clean at bodyweight",
              "Squat snatch at 0.75x bodyweight",
              "Clean and jerk at bodyweight"
            ],
            "Gymnastics Skills": [
              "Chest-to-bar pull-up x 10",
              "Kipping handstand push-up x 10",
              "Bar muscle-up",
              "Pistol squat on each leg"
            ],
            "Conditioning Benchmarks": [
              "Fran under 6 minutes RX (95/65 lb thrusters)",
              "Murph partitioned, with vest optional",
              "Double-unders x 50 unbroken"
            ],
            "Mobility & Recovery": [
              "Overhead squat at bodyweight to full depth",
              "Daily 10-minute mobility routine"
            ]
          },
          "rules": {
            "matchTime": "Every format at prescribed loads: sprint couplets under 5 minutes, 20-minute AMRAPs like Cindy, hero WODs like Murph, and CrossFit Open workouts in the RX division.",
            "promotion": "RX is your default on the whiteboard, you own a bar muscle-up and handstand push-ups, your Olympic lifts are at bodyweight and technically sound, and you are eyeing competition volume and advanced skills.",
            "legal": [
              "Prescribed loads on all benchmark and Open workouts (RX division)",
              "Kipping and butterfly pull-ups with full range of motion",
              "Weight vest for hero WODs like Murph",
              "Strategic rep partitioning to keep moving",
              "Competition-standard movement in every rep"
            ],
            "newlyLegal": [
              "Muscle-ups (bar first, then rings)",
              "Kipping handstand push-ups",
              "Squat snatch at load",
              "Pistol squats in workouts",
              "Heavy barbell metcons (Grace, DT, Diane)"
            ],
            "illegal": [
              "Shorting range of motion to protect a time = no rep",
              "Handstand push-ups without full lockout at the top = no rep",
              "Chest not touching the bar on chest-to-bar = no rep",
              "Hips not opening fully at the top of thrusters and wall balls = no rep",
              "Ignoring recovery, sleep, and deloads while chasing volume"
            ]
          }
        },
        {
          "id": "crossfit-competitor",
          "name": "Competitor",
          "color": "#212121",
          "textColor": "#FFFFFF",
          "goal": "Train to compete: sanctioned local competitions, a serious CrossFit Open placing, or qualifiers. Advanced skills are unbroken, barbells are heavy, and pacing is a weapon.",
          "curriculum": {
            "Squat & Hinge Patterns": [
              "Back squat 2x bodyweight",
              "Deadlift 2.5x bodyweight"
            ],
            "Press & Pull": [
              "Strict handstand push-up x 10",
              "Weighted pull-up with 0.5x bodyweight",
              "Strict ring muscle-up"
            ],
            "Olympic Lifts": [
              "Squat snatch at bodyweight",
              "Clean and jerk at 1.25x bodyweight"
            ],
            "Gymnastics Skills": [
              "Ring muscle-up x 5 unbroken",
              "Handstand walk 50 feet",
              "Legless rope climb"
            ],
            "Conditioning Benchmarks": [
              "Fran under 4 minutes",
              "Murph under 40 minutes with vest",
              "Row 2000m under 7:30",
              "Double-unders x 100 unbroken"
            ],
            "Mobility & Recovery": [
              "Structured deload weeks in the training plan",
              "Daily position work (overhead, front rack, deep squat)"
            ]
          },
          "rules": {
            "matchTime": "Multiple sessions per day in competition prep: heavy lifting plus 2-3 metcons, unknown-and-unknowable event formats, repeat-effort intervals, and full Open/qualifier workouts under judged standards.",
            "promotion": "This is the top of the pyramid: sustain it by placing in local competitions, finishing the Open high in your division, and coaching the standards you now embody to newer athletes.",
            "legal": [
              "Competition loads and judged movement standards",
              "Butterfly chest-to-bar, ring muscle-up cycles, handstand walk obstacles",
              "Pacing strategies, transitions, and rep-scheme game plans",
              "Video review of every lift and skill",
              "Periodized programming with intensity waves"
            ],
            "newlyLegal": [
              "Legless rope climbs and pegboards",
              "Handstand walk obstacles and ramps",
              "Heavy touch-and-go Olympic cycling",
              "Multi-event competition days"
            ],
            "illegal": [
              "Any rep a judge would no-rep - train to the hardest standard, not the easiest",
              "Hiding niggles from coaches until they become injuries",
              "Skipping deloads and sleep during qualifier season",
              "Adding load or volume that breaks position, even on the last rep",
              "Cutting the mobility work that keeps overhead positions safe"
            ]
          }
        }
      ]
    },
    "teens": {
      "label": "Teens (13-17)",
      "belts": [
        {
          "id": "crossfit-teen-rookie",
          "name": "Rookie",
          "color": "#26A69A",
          "textColor": "#FFFFFF",
          "goal": "Learn to move: bodyweight mechanics, PVC barbell patterns, and having fun getting fit. No load until movement is consistent, ever.",
          "curriculum": {
            "Squat & Hinge Patterns": [
              "Air squat to depth (hip crease below knee)",
              "Kettlebell deadlift with flat back"
            ],
            "Press & Pull": [
              "Ring row x 8",
              "Push-up (knees ok) x 8"
            ],
            "Olympic Lifts": [
              "PVC snatch and clean drills"
            ],
            "Gymnastics Skills": [
              "Hollow body hold 20 seconds",
              "Box step-up"
            ],
            "Conditioning Benchmarks": [
              "Run 800m",
              "Single-unders x 50"
            ],
            "Mobility & Recovery": [
              "Bottom-of-squat hold 1 minute"
            ]
          },
          "rules": {
            "matchTime": "Short, playful AMRAPs of 6-10 minutes, partner workouts, and relay-style For Time pieces with bodyweight and PVC only.",
            "promotion": "Squat, hinge, push, and pull patterns look the same on rep 1 and rep 20, and the athlete shows up consistently and listens to coaching cues.",
            "legal": [
              "Bodyweight and PVC only for barbell patterns",
              "Light kettlebells and medicine balls",
              "Every workout scaled to keep moving and smiling",
              "Games and skill play as conditioning"
            ],
            "newlyLegal": [
              "All bodyweight fundamentals",
              "PVC Olympic lift drills",
              "Jump rope and easy running"
            ],
            "illegal": [
              "Barbell load of any kind at this stage",
              "Squats above parallel counted as reps",
              "Max-effort or 1-rep-max testing for young teens",
              "Comparing loads with adults or older teens"
            ]
          }
        },
        {
          "id": "crossfit-teen-varsity",
          "name": "Varsity",
          "color": "#7E57C2",
          "textColor": "#FFFFFF",
          "goal": "Add the training bar and light loads with technique as the only score that matters, and build strict strength through the growth years.",
          "curriculum": {
            "Squat & Hinge Patterns": [
              "Back squat with light barbell (technique first)",
              "Deadlift with light-to-moderate load"
            ],
            "Press & Pull": [
              "Strict pull-up x 3 (band ok)",
              "Push-up x 15 unbroken"
            ],
            "Olympic Lifts": [
              "Hang power clean with training bar"
            ],
            "Gymnastics Skills": [
              "Kip swing on the pull-up bar",
              "Hanging knee raise x 10"
            ],
            "Conditioning Benchmarks": [
              "Cindy scaled, 15-minute AMRAP",
              "Row 500m hard effort"
            ],
            "Mobility & Recovery": [
              "Overhead squat with PVC to full depth"
            ]
          },
          "rules": {
            "matchTime": "AMRAPs of 10-15 minutes, EMOM skill work, and scaled benchmark WODs like Cindy and Helen with light loads and teen-appropriate reps.",
            "promotion": "Consistent light-barbell technique, first strict pull-ups, a controlled kip swing, and the maturity to keep loads where the coach sets them.",
            "legal": [
              "Empty training bar to light loads set by the coach",
              "Banded pull-ups and knee raises",
              "Scaled teen versions of benchmark WODs (like the Open age 14-15 division scaling)",
              "Strict gymnastics volume before any kipping reps"
            ],
            "newlyLegal": [
              "Light barbell back squat, deadlift, and press",
              "Hang power clean with the training bar",
              "Kip swings (not yet kipping pull-ups)"
            ],
            "illegal": [
              "Chin not over the bar = no rep",
              "Heavy 1-rep-max attempts during growth spurts",
              "Kipping pull-ups before strict pull-ups exist",
              "Adding weight to beat a friend's score"
            ]
          }
        },
        {
          "id": "crossfit-teen-elite",
          "name": "Elite",
          "color": "#FB8C00",
          "textColor": "#FFFFFF",
          "goal": "Train like the teen divisions of the CrossFit Open: moderate loads, kipping gymnastics on a strict base, and benchmark times to be proud of, with growth and school always first.",
          "curriculum": {
            "Squat & Hinge Patterns": [
              "Back squat near bodyweight (coach-verified form)",
              "Deadlift 1.25x bodyweight"
            ],
            "Press & Pull": [
              "Strict pull-up x 7",
              "Handstand hold against wall 30 seconds"
            ],
            "Olympic Lifts": [
              "Power clean with moderate load"
            ],
            "Gymnastics Skills": [
              "Kipping pull-up x 8",
              "Toes-to-bar x 5"
            ],
            "Conditioning Benchmarks": [
              "Helen scaled under 13 minutes",
              "Double-unders x 30 unbroken"
            ],
            "Mobility & Recovery": [
              "Daily 10-minute mobility routine"
            ]
          },
          "rules": {
            "matchTime": "Full class programming with teen-division loads: AMRAPs, EMOMs, For Time benchmarks, and CrossFit Open teen-division (14-15 and 16-17) workouts.",
            "promotion": "Ready to graduate into the adult Intermediate level at 18: strict strength is real, kipping is clean, Olympic lifts are technical, and training habits are self-managed.",
            "legal": [
              "Moderate loads matching CrossFit Open teen divisions",
              "Kipping pull-ups and toes-to-bar on a strict base",
              "Benchmark WODs at teen-appropriate weights",
              "Competing in teen divisions of local throwdowns"
            ],
            "newlyLegal": [
              "Kipping pull-ups and toes-to-bar",
              "Moderate-load power cleans and snatch work",
              "Double-unders in workouts",
              "Open teen-division workouts"
            ],
            "illegal": [
              "Squat above parallel or soft lockout overhead = no rep",
              "Adult RX loads before age and strength standards are met",
              "Training through joint pain during growth spurts",
              "Sacrificing sleep and school for extra sessions"
            ]
          }
        }
      ]
    }
  }
};
