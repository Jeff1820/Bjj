/* Curated YouTube demonstration links for all sports, keyed by exact checklist item text.
 * Sourced from YouTube search results and verified live via the YouTube oEmbed API.
 * Items without an entry fall back to a YouTube search link in the UI. */
const VIDEO_LINKS = {
  "Breakfalls (back, side, forward roll)": {
    "url": "https://www.youtube.com/watch?v=wCWONgAjQzo",
    "title": "Breakfalls & Front Rolls | Ukemi - The Art of Falling Properly for BJJ (Jiu-Jitsu) and Combat Sports"
  },
  "Hold and understand knee on belly": {
    "url": "https://www.youtube.com/watch?v=1Kfn0FA5hHo",
    "title": "How to Use Knee On Belly to Force Movement"
  },
  "Knee cut (knee slice) pass": {
    "url": "https://www.youtube.com/watch?v=3IqCi1GXmOg",
    "title": "The Best Knee Cut Pass by Lucas Lepri"
  },
  "Armbar from mount": {
    "url": "https://www.youtube.com/watch?v=6W5eTSsM6EY",
    "title": "BJJ For Beginners: How to Apply an Armbar from Mount Position"
  },
  "Side control escape to knees": {
    "url": "https://www.youtube.com/watch?v=v7kmKKtBIpg",
    "title": "Side Control Escape - Underhook Go To Your Knees"
  },
  "Spider guard fundamentals": {
    "url": "https://www.youtube.com/watch?v=5ciTwCNs8uM",
    "title": "Spider Guard Fundamentals by Rafael Lovato Jr."
  },
  "Butterfly hook sweep": {
    "url": "https://www.youtube.com/watch?v=PVEd0vA5N7M",
    "title": "How To Have A Powerful Butterfly Guard Hook Sweep (BJJ Sweeps)"
  },
  "Passing spider/DLR grips safely": {
    "url": "https://www.youtube.com/watch?v=z4NDLuhLDzM",
    "title": "BJJ Passing De La Riva & Spider Guard Tutorial"
  },
  "Arm triangle (kata gatame) from mount/side": {
    "url": "https://www.youtube.com/watch?v=2d4vWuDfG-M",
    "title": "How to do the Head & Arm Choke (Kata Gatame) from Mount"
  },
  "Defending the back take (falling to the correct side)": {
    "url": "https://www.youtube.com/watch?v=cc1xxX186lg",
    "title": "Defending the Backtake - Circling and Backing Away by Lachlan Giles"
  },
  "X guard technical stand-up sweep": {
    "url": "https://www.youtube.com/watch?v=8JMowLHg3Ws",
    "title": "BJJ X-Guard Technical Stand up Sweep Tutorial"
  },
  "Passing X guard and single leg X": {
    "url": "https://www.youtube.com/watch?v=xUw_qEGVE1k",
    "title": "How to pass x guard and single leg x guard"
  },
  "Back attack system: choke / armbar off both sides": {
    "url": "https://www.youtube.com/watch?v=MaZrSTnrYR8",
    "title": "Straight Jacket Back Attack System - Choke and Armbar | BJJ for Breakfast"
  },
  "Kneebar — entries from top and guard": {
    "url": "https://www.youtube.com/watch?v=oBlMI4iKm3c",
    "title": "The First Kneebar You Should Learn - BJJ Leglock Submission"
  },
  "Takedown strategy for your build (wrestling or judo based)": {
    "url": "https://www.youtube.com/watch?v=Swoni-e1CFg",
    "title": "Best Takedowns For Jiu Jitsu (BJJ) by John Danaher"
  },
  "Shrimping down the mat": {
    "url": "https://www.youtube.com/watch?v=D0rTw8IfJDE",
    "title": "Improve Your Shrimp/Hip Escape - BJJ Fundamentals"
  },
  "Hip bump sweep": {
    "url": "https://www.youtube.com/watch?v=vPNx9jWz1qc",
    "title": "Hip Bump Sweep and Kimura from Closed Guard (Lachlan Giles)"
  },
  "Grip fighting basics (gi grips)": {
    "url": "https://www.youtube.com/watch?v=MR4nJQ6qhuU",
    "title": "BJJ Lesson 3: Understanding Gi Grips - An Introduction To Brazilian Jiu Jitsu"
  },
  "Side control → mount transition": {
    "url": "https://www.youtube.com/watch?v=zqQx9SsgdBw",
    "title": "Smooth Side Control to Mount Transition | BJJ Fundamentals"
  },
  "De La Riva hook introduction": {
    "url": "https://www.youtube.com/watch?v=xa0c5HHTuhM",
    "title": "De la Riva Guard Basics & 4 Great Options"
  },
  "Sprawl vs takedowns": {
    "url": "https://www.youtube.com/watch?v=hyZLgN2v_qs",
    "title": "How to Sprawl | Defend against Takedowns | Double Leg Takedown Defense | NoGi | MMA | Jiu-Jitsu"
  },
  "Triangle choke mechanics (drilled; legal in competition at 13+)": {
    "url": "https://www.youtube.com/watch?v=hhl6BtFi_DU",
    "title": "The mechanics of the Triangle choke - BJJ & MMA submission tutorial"
  },
  "Omoplata with safe finishing": {
    "url": "https://www.youtube.com/watch?v=0DVlMeUy0PE",
    "title": "Gold Standard to Finishing Omoplata by Shawn Williams"
  },
  "Shrimp (hip escape) and bridge movements": {
    "url": "https://www.youtube.com/watch?v=3hROB_XHTRo",
    "title": "BJJ Beginners Tutorial - How to Hip Escape / Shrimp"
  },
  "Turtle position basics": {
    "url": "https://www.youtube.com/watch?v=-xaAcWZdLpY",
    "title": "Attacking the Turtle: Effective Techniques for Control and Taking the Back (Full BJJ Instructional)"
  },
  "Torreando (bullfighter) pass": {
    "url": "https://www.youtube.com/watch?v=BZCnqNI9CVI",
    "title": "Toreando Pass - Complete Guide"
  },
  "Americana from side control or mount": {
    "url": "https://www.youtube.com/watch?v=ThRkj0FHySs",
    "title": "BJJ Basics: Americana from Side Control"
  },
  "Back control escape": {
    "url": "https://www.youtube.com/watch?v=V_U1IHL2iGQ",
    "title": "Complete Guide to Escaping Back Control | Jiu-Jitsu Escapes"
  },
  "De La Riva guard fundamentals": {
    "url": "https://www.youtube.com/watch?v=xa0c5HHTuhM",
    "title": "De la Riva Guard Basics & 4 Great Options"
  },
  "De La Riva sweep (tripod or ball-and-chain)": {
    "url": "https://www.youtube.com/watch?v=LpZX-uD46pQ",
    "title": "The Ball and Chain Sweep, the Core Attack of the De La Riva Guard"
  },
  "Triangle choke from guard": {
    "url": "https://www.youtube.com/watch?v=3r7xjdswykI",
    "title": "BJJ Triangle Choke from Guard (Step-by-Step) | BJJ Fundamentals #20"
  },
  "Kimura from side control and north-south": {
    "url": "https://www.youtube.com/watch?v=m8qGxXlEpp8",
    "title": "Jiu-Jitsu Fundamentals | Side Control to North South to Kimura or Armbar"
  },
  "Guillotine defense (hand fight + sit-through)": {
    "url": "https://www.youtube.com/watch?v=z6ZI4gKlqFI",
    "title": "Guillotine Defence (Lachlan Giles)"
  },
  "Single leg X sweep": {
    "url": "https://www.youtube.com/watch?v=Q6gx6UIgBFk",
    "title": "Marcelo Garcia Single Leg X-Guard Sweep"
  },
  "Float passing vs inverted guards": {
    "url": "https://www.youtube.com/watch?v=wPwMWhh65PM",
    "title": "Gordon Ryan Guard Pass Study Part 4 - The Floating Pass"
  },
  "Straight ankle lock finishing details": {
    "url": "https://www.youtube.com/watch?v=cmimzr_oNbw",
    "title": "Straight ankle locks (Lachlan Giles)"
  },
  "Toe hold — mechanics and legal application": {
    "url": "https://www.youtube.com/watch?v=7wVbUS0jCts",
    "title": "The Toe Hold - How & When to Use It | Jiu-Jitsu Submissions"
  },
  "50/50 position offense and safety": {
    "url": "https://www.youtube.com/watch?v=jnZ9jkT0emg",
    "title": "BJJ Technique - Powerful 50/50 Attacks You Must Know! - Coach Zahabi"
  },
  "Bridging (hips up!)": {
    "url": "https://www.youtube.com/watch?v=Qdn0gNR8PyU",
    "title": "Brazilian Jiu Jitsu Basics: How to Bridge"
  },
  "Armbar from mount (slow and controlled)": {
    "url": "https://www.youtube.com/watch?v=liPJmVmnu5o",
    "title": "Armbar From Mount by JOHN DANAHER"
  },
  "Double leg takedown with a safe landing": {
    "url": "https://www.youtube.com/watch?v=tgIXxV6Ax1o",
    "title": "Effective Double Leg Takedown for BJJ Beginners (No Knee Drop!)"
  },
  "Back escape": {
    "url": "https://www.youtube.com/watch?v=u9N6Bb155n0",
    "title": "How To Do The Perfect Back Escape by Adam Wardziński"
  },
  "Single leg takedown finishing safely": {
    "url": "https://www.youtube.com/watch?v=U2_b_oE9RVw",
    "title": "3 Simple Ways To Finish The Single Leg Takedown"
  },
  "Spider guard grips and retention": {
    "url": "https://www.youtube.com/watch?v=5ciTwCNs8uM",
    "title": "Spider Guard Fundamentals by Rafael Lovato Jr."
  },
  "Omoplata mechanics (drilled; legal in competition at 13+)": {
    "url": "https://www.youtube.com/watch?v=5Mmo-YuV5cQ",
    "title": "OMOPLATA From CLOSED GUARD - Bernardo Faria"
  },
  "Arm triangle (kata gatame)": {
    "url": "https://www.youtube.com/watch?v=i7WdYrBRvKg",
    "title": "The Arm Triangle Explained (Kata Gatame) - De Groot BJJ"
  },
  "Technical stand-up": {
    "url": "https://www.youtube.com/watch?v=4yc0Swz_El0",
    "title": "How To Do The Most Important Technique In BJJ - The Technical Standup"
  },
  "Standing posture, grips, and base": {
    "url": "https://www.youtube.com/watch?v=azA2afYgY2k",
    "title": "Brazilian Jiu Jitsu Fundamentals - Starting from Standing, Getting Grips and Setting Up Attacks"
  },
  "Maintain side control with crossface and underhook": {
    "url": "https://www.youtube.com/watch?v=kWxijyG-6BE",
    "title": "ROGER GRACIE Shows How to Maintain and Attack from Side Control"
  },
  "Kimura from closed guard": {
    "url": "https://www.youtube.com/watch?v=ZLsg4M0lHzA",
    "title": "BJJ Beginners Tutorial - Kimura from Closed Guard"
  },
  "Standing headlock escape": {
    "url": "https://www.youtube.com/watch?v=uRXdQnAEQ_s",
    "title": "3 Standing Headlock Escapes - BJJ Self Defense"
  },
  "Deep half guard entries": {
    "url": "https://www.youtube.com/watch?v=JGg1F2f9xDE",
    "title": "Deep Half Entry From Knee Slice by Tom DeBlass"
  },
  "Lumberjack / tripod sweep vs standing opponent": {
    "url": "https://www.youtube.com/watch?v=lptf2yBwI0s",
    "title": "How To Do The Standing Hook Sweep / Tripod Sweep In BJJ (and two ways to attack with it)"
  },
  "Omoplata from guard": {
    "url": "https://www.youtube.com/watch?v=5Mmo-YuV5cQ",
    "title": "OMOPLATA From CLOSED GUARD - Bernardo Faria"
  },
  "Triangle choke escape (posture + stack)": {
    "url": "https://www.youtube.com/watch?v=v-uUEuCEqWI",
    "title": "How To Escape A Triangle Choke in BJJ - Full Length Instructional"
  },
  "X guard entries and control": {
    "url": "https://www.youtube.com/watch?v=Kng3k1eWkyQ",
    "title": "X Guard Fundamentals: Entries, Sweeps, and Submissions (Full BJJ Instructional)"
  },
  "Berimbolo or alternative DLR back take": {
    "url": "https://www.youtube.com/watch?v=HAo9-GV8-pM",
    "title": "De La Riva NOGI Berimbolo By Lachlan Giles"
  },
  "D'arce choke": {
    "url": "https://www.youtube.com/watch?v=tja1ct3Ps94",
    "title": "How to Do the D'Arce Choke (aka the No Gi Brabo Choke)"
  },
  "Escaping the body triangle": {
    "url": "https://www.youtube.com/watch?v=RscLPT0F-DE",
    "title": "The Best Way To Escape From The Jiu Jitsu Body Triangle by Gordon Ryan"
  },
  "Calf slicer from the back / truck": {
    "url": "https://www.youtube.com/watch?v=LJg1fb9vJeQ",
    "title": "Calf Slicer Truck Rolling Variation by Eli Knight"
  },
  "Kneebar and toe hold defense": {
    "url": "https://www.youtube.com/watch?v=oe1Vc29wpAY",
    "title": "Leg Lock Defense Fundamentals | Escape Heel Hooks, Kneebars & Toeholds"
  },
  "Bear crawl / crab walk warm-ups": {
    "url": "https://www.youtube.com/watch?v=2Gc3zooUpps",
    "title": "How to warm up for BJJ | 20 Jiu Jitsu Warm-up movements to master"
  },
  "Side control escape to guard": {
    "url": "https://www.youtube.com/watch?v=cuXq-k__9lQ",
    "title": "How To Do The Perfect BJJ Side Control Escape by John Danaher"
  },
  "O-soto-gari trip": {
    "url": "https://www.youtube.com/watch?v=WK7mXKia_HI",
    "title": "Osoto Gari Takedown for Jiu Jitsu - BJJ Blue Belt Requirements Technique #3"
  },
  "Headlock escape": {
    "url": "https://www.youtube.com/watch?v=Nnx8Tq5E5hM",
    "title": "The Three Most Useful Headlock Escapes on the Ground | Jiu-Jitsu Escapes"
  },
  "Arm drag from seated guard": {
    "url": "https://www.youtube.com/watch?v=tnMjynk2Ff4",
    "title": "Arm Drag from Seated Guard (Lachlan Giles)"
  },
  "Half guard with knee shield": {
    "url": "https://www.youtube.com/watch?v=q_ND-09HiWg",
    "title": "Knee Shield Half Guard Basics"
  },
  "Attack chains: collar choke → armbar from mount": {
    "url": "https://www.youtube.com/watch?v=hNRxF5Y0yJQ",
    "title": "Submissions Inc: Mount - Cross Collar Choke / Armbar combination"
  },
  "Connected guard attack system (2–3 techniques)": {
    "url": "https://www.youtube.com/watch?v=WVOXKrJlU2U",
    "title": "BJJ Submissions Chain from Guard Tutorial"
  },
  "Hold and understand closed guard": {
    "url": "https://www.youtube.com/watch?v=xdVuJLPnv_c",
    "title": "Holding The Closed Guard In BJJ"
  },
  "Double leg takedown": {
    "url": "https://www.youtube.com/watch?v=ETpgDGw1ITs",
    "title": "The Best Double Leg Takedown For Jiu Jitsu by Marcus Buchecha Almeida"
  },
  "Transition side control → mount": {
    "url": "https://www.youtube.com/watch?v=v77UaH1I7ac",
    "title": "BJJ: How To Transition From Side Control To Mount | Evolve MMA"
  },
  "Guillotine choke": {
    "url": "https://www.youtube.com/watch?v=4GO28kr4Lzc",
    "title": "Mastering The Guillotine Choke - Jiu-Jitsu Fundamentals"
  },
  "Posture and frames inside closed guard": {
    "url": "https://www.youtube.com/watch?v=70crUa8El_M",
    "title": "Basics Wins (Understanding posture inside the closed guard in BJJ)"
  },
  "Half guard with underhook (knee shield)": {
    "url": "https://www.youtube.com/watch?v=q_ND-09HiWg",
    "title": "Knee Shield Half Guard Basics"
  },
  "Half guard old-school sweep": {
    "url": "https://www.youtube.com/watch?v=-S1lhWAX2ps",
    "title": "Roberto 'Gordo' Correa Teaches the Old School Half Guard Sweep"
  },
  "Ezekiel choke": {
    "url": "https://www.youtube.com/watch?v=jIXrWitQZx4",
    "title": "How to do Ezekiel Choke by Erik Paulson"
  },
  "Omoplata escape (roll or posture out)": {
    "url": "https://www.youtube.com/watch?v=D0POWvRdGes",
    "title": "Omoplata Escapes by Bernardo Faria"
  },
  "Single leg X (ashi garami) — legal control without reaping": {
    "url": "https://www.youtube.com/watch?v=avmzvELtN8I",
    "title": "Single Leg X / Ashi Garami Basics"
  },
  "Arm drag from butterfly to back take": {
    "url": "https://www.youtube.com/watch?v=7LKwMOdFyVs",
    "title": "The Arm Drag Trap From Butterfly Guard by Bernardo Faria"
  },
  "Anaconda choke": {
    "url": "https://www.youtube.com/watch?v=3xXk6NAYs-I",
    "title": "Intro to the Anaconda Choke by Keith Krikorian"
  },
  "D'arce and anaconda early defense": {
    "url": "https://www.youtube.com/watch?v=9nlqy9w32d4",
    "title": "Brazilian Jiu Jitsu Darce Defense"
  },
  "Bicep slicer awareness and application": {
    "url": "https://www.youtube.com/watch?v=cT1DXGE8CsI",
    "title": "Bicep Slicer by Daniel Wanderley"
  },
  "Escaping 50/50 safely": {
    "url": "https://www.youtube.com/watch?v=hfN0YGfyQz8",
    "title": "Easiest Way To Escape From 50/50 Guard No Gi by Giancarlo Bodoni"
  },
  "Closed guard (top and bottom)": {
    "url": "https://www.youtube.com/watch?v=ypi3ie6hKTI",
    "title": "John Danaher Explains Closed Guard Fundamentals"
  },
  "Standing up in base (technical stand-up)": {
    "url": "https://www.youtube.com/watch?v=7gLzP6yismc",
    "title": "BJJ Technical Stand Up / Standing up in Base"
  },
  "Flower (pendulum) sweep": {
    "url": "https://www.youtube.com/watch?v=NEzVVhg2p5c",
    "title": "The Flower Sweep - Masterclass"
  },
  "Frames and posture inside someone's guard": {
    "url": "https://www.youtube.com/watch?v=9OqIn5vXZN8",
    "title": "Jiu-Jitsu Fundamentals | Posture, Opening the Closed Guard and Passing Options"
  },
  "Tripod sweep vs standing opponent": {
    "url": "https://www.youtube.com/watch?v=lptf2yBwI0s",
    "title": "How To Do The Standing Hook Sweep / Tripod Sweep In BJJ (and two ways to attack with it)"
  },
  "Deep half guard introduction": {
    "url": "https://www.youtube.com/watch?v=0I4ignD0IrA",
    "title": "BJJ | An Introduction To The Deep Half Guard"
  },
  "Triangle escape (posture and stack)": {
    "url": "https://www.youtube.com/watch?v=v-uUEuCEqWI",
    "title": "How To Escape A Triangle Choke in BJJ - Full Length Instructional"
  },
  "Connected passing system (2–3 techniques)": {
    "url": "https://www.youtube.com/watch?v=AcxCqMwW_7o",
    "title": "3 Essential Guard Passes for Modern BJJ"
  },
  "Hold and understand half guard": {
    "url": "https://www.youtube.com/watch?v=E8x1Cva8hJ8",
    "title": "How To Build The Perfect Half Guard Game by John Danaher"
  },
  "O-soto-gari (or another basic trip)": {
    "url": "https://www.youtube.com/watch?v=f9urF0uIYi8",
    "title": "Osoto Gari by Travis Stevens & Jimmy Pedro"
  },
  "Take the back from turtle": {
    "url": "https://www.youtube.com/watch?v=YUoHqTBoo9c",
    "title": "How to take the Back From Turtle in Jiu Jitsu with Rayron Gracie"
  },
  "Rear naked choke": {
    "url": "https://www.youtube.com/watch?v=l8-JI7NND3E",
    "title": "How To Perform The Perfect Rear Naked Choke by John Danaher"
  },
  "Guard retention basics (knees to chest, frames)": {
    "url": "https://www.youtube.com/watch?v=ce_0XT1BBQA",
    "title": "How To Do Perfect Guard Retention In BJJ by John Danaher"
  },
  "Open guard retention under pressure": {
    "url": "https://www.youtube.com/watch?v=zIsvigk3CZQ",
    "title": "5 tips to improve your guard retention (Lachlan Giles and Ariel Tabak)"
  },
  "Over-under pass": {
    "url": "https://www.youtube.com/watch?v=4hAY12ghrGk",
    "title": "How to Pass With Over Under by Bernardo Faria"
  },
  "Bow and arrow choke from back control": {
    "url": "https://www.youtube.com/watch?v=yrUXIujVGTM",
    "title": "Bow and Arrow Choke (Lachlan Giles)"
  },
  "Knee cut pass counter": {
    "url": "https://www.youtube.com/watch?v=2mg6jyT0OZ4",
    "title": "3 High Percentage Techniques to Defend the Knee Cut Guard Pass, with Jon Thomas"
  },
  "Lasso guard": {
    "url": "https://www.youtube.com/watch?v=2DCBkTnHVMg",
    "title": "3 Essential ATTACKS From LASSO GUARD | Techniques for EVERYONE"
  },
  "Kimura trap to back take": {
    "url": "https://www.youtube.com/watch?v=fwcuJ_ilpQc",
    "title": "Kimura Trap to Back Take"
  },
  "North-south choke": {
    "url": "https://www.youtube.com/watch?v=VkI7wuhN2Ps",
    "title": "How To Perfect Your North South Choke by Marcelo Garcia"
  },
  "Berimbolo counters": {
    "url": "https://www.youtube.com/watch?v=mI_EUIgQfME",
    "title": "Different Ways to Counter the Berimbolo - Andre Galvao"
  },
  "Leg entanglement system without reaping (gi-legal)": {
    "url": "https://www.youtube.com/watch?v=7GQZPtpsg_U",
    "title": "The IBJJF Legal Leglocks (and How to Do Them)"
  },
  "Defensive cycles: reguard from any pin": {
    "url": "https://www.youtube.com/watch?v=g1Pwz4PHeE4",
    "title": "Escaping Side Control: Get Your Guard Back! (Full BJJ Instructional)"
  },
  "Mount (staying heavy with good posture)": {
    "url": "https://www.youtube.com/watch?v=_1CrMowmTwc",
    "title": "How to Stop Losing Mount In BJJ (And Add More Pressure On Top)"
  },
  "All white belt movements done smoothly": {
    "url": "https://www.youtube.com/watch?v=CiMrC9hp0gY",
    "title": "12 BJJ Drills Every White Belt Should Do"
  },
  "Guard pass: knee cut": {
    "url": "https://www.youtube.com/watch?v=3IqCi1GXmOg",
    "title": "The Best Knee Cut Pass by Lucas Lepri"
  },
  "Guard retention: knees to chest": {
    "url": "https://www.youtube.com/watch?v=FY46hN7uHTE",
    "title": "Guard Retention 1st Skill by John Danaher"
  },
  "Rear naked choke with control (age-appropriate, supervised)": {
    "url": "https://www.youtube.com/watch?v=KH6qCjgLXJA",
    "title": "How to Apply TIGHTEST Rear Naked Choke for MMA/BJJ (Stephan Kesting)"
  },
  "Body positioning for passing pressure": {
    "url": "https://www.youtube.com/watch?v=6PSGT2r9tmE",
    "title": "Pressure Passing 101: Concepts and Details"
  },
  "Recovering guard from leg drag": {
    "url": "https://www.youtube.com/watch?v=IhRQp9IUhKU",
    "title": "Leg Drag Defense - Guard Retention - De Groot BJJ"
  },
  "Back attack system: choke and armbar off both sides": {
    "url": "https://www.youtube.com/watch?v=MaZrSTnrYR8",
    "title": "Straight Jacket Back Attack System - Choke and Armbar | BJJ for Breakfast"
  },
  "Hold and understand side control": {
    "url": "https://www.youtube.com/watch?v=VF8GrJdysv0",
    "title": "5 Fundamental Side Control Positions in BJJ You Should Know"
  },
  "Scissor sweep from closed guard": {
    "url": "https://www.youtube.com/watch?v=29Qq4kLjgH0",
    "title": "Jiu-Jitsu Fundamentals | Scissor Sweep from the Closed Guard"
  },
  "Cross collar choke from closed guard": {
    "url": "https://www.youtube.com/watch?v=uuyiUxsyywM",
    "title": "Learn The Perfect Cross Collar Choke From Closed Guard by Henry Akins"
  },
  "Bridge and roll (upa) mount escape": {
    "url": "https://www.youtube.com/watch?v=RiIBK-moBdE",
    "title": "How To Do The Perfect Jiu Jitsu Upa (Escape From Mount) by Henry Akins"
  },
  "Armbar defense (hidden arm, stacking)": {
    "url": "https://www.youtube.com/watch?v=Bo3Biyi6VZE",
    "title": "How to Defend an Armbar from Full Guard Using the Stack Escape | BJJ Submission Defense"
  },
  "Single leg takedown": {
    "url": "https://www.youtube.com/watch?v=4HBVdF5AXc0",
    "title": "The Best Single Leg Takedown For Brazilian Jiu Jitsu by Andre Galvao"
  },
  "Double-under (stack) pass": {
    "url": "https://www.youtube.com/watch?v=aMQs_7Ozk1E",
    "title": "Double Under Stack Pass For BJJ"
  },
  "Loop choke": {
    "url": "https://www.youtube.com/watch?v=LHMEPoeyKXc",
    "title": "Loop Choke Mastery with Marcos Tinoco"
  },
  "Leg lock defense fundamentals (boot, knee line)": {
    "url": "https://www.youtube.com/watch?v=JCWr6yC4xMs",
    "title": "The Basics of Good Leglock Defence with Robert Degle"
  },
  "Reverse De La Riva": {
    "url": "https://www.youtube.com/watch?v=sViKOV2epJI",
    "title": "Reverse De La Riva 101 (Lachlan Giles)"
  },
  "Half guard underhook back take": {
    "url": "https://www.youtube.com/watch?v=a1v2DgNI5rM",
    "title": "Fundamentals: Half Guard Underhook and Back Take"
  },
  "Baseball bat choke": {
    "url": "https://www.youtube.com/watch?v=77nO2Pf4lMU",
    "title": "Baseball Bat Choke From Bottom Side - ZombieProofBJJ (Gi)"
  },
  "Recomposing guard from leg drag": {
    "url": "https://www.youtube.com/watch?v=jANQj7qCn6M",
    "title": "Guard Retention: Leg Drag Counter No Gi BJJ / Jiu-Jitsu"
  },
  "A-game guard: 3-technique connected attack system": {
    "url": "https://www.youtube.com/watch?v=2DCBkTnHVMg",
    "title": "3 Essential ATTACKS From LASSO GUARD | Techniques for EVERYONE"
  },
  "Competition-pace submission defense": {
    "url": "https://www.youtube.com/watch?v=KC66GKalJcU",
    "title": "The Best Jiu Jitsu Submission Escapes & How To Connect Escapes To Submissions by John Danaher"
  },
  "Side control (chest connection)": {
    "url": "https://www.youtube.com/watch?v=b85hQ9YcaZE",
    "title": "4 Hacks To MASSIVELY Increase Side Control Pressure!"
  },
  "Knee on belly with balance": {
    "url": "https://www.youtube.com/watch?v=1Kfn0FA5hHo",
    "title": "How to Use Knee On Belly to Force Movement"
  },
  "Guard pass: torreando": {
    "url": "https://www.youtube.com/watch?v=LGwa2fQwWYc",
    "title": "3 Variations of the toreando pass (Lachlan Giles)"
  },
  "Butterfly guard hooks and posture": {
    "url": "https://www.youtube.com/watch?v=0WG1MYvgXAM",
    "title": "BJJ Butterfly Guard - Most Important Principles by Marcelo Garcia"
  },
  "Bow and arrow choke introduction (supervised)": {
    "url": "https://www.youtube.com/watch?v=yrUXIujVGTM",
    "title": "Bow and Arrow Choke (Lachlan Giles)"
  },
  "Uchi mata or hip throw": {
    "url": "https://www.youtube.com/watch?v=yiHxvpC7Isw",
    "title": "EASIEST way to learn UCHI MATA (Judo for BJJ)"
  },
  "Defending the back take": {
    "url": "https://www.youtube.com/watch?v=cc1xxX186lg",
    "title": "Defending the Backtake - Circling and Backing Away by Lachlan Giles"
  },
  "Takedown chain: level change → double → single": {
    "url": "https://www.youtube.com/watch?v=zFNm8JpcNs0",
    "title": "CHAIN WRESTLING: DOUBLE LEG TO SINGLE - JORDAN BURROUGHS | FCA Wrestling TECHNIQUE"
  },
  "Hold and understand mount": {
    "url": "https://www.youtube.com/watch?v=Ujf3nYFp2I4",
    "title": "BJJ Position: How to Hold Mount Like a Black Belt"
  },
  "Hip bump sweep from closed guard": {
    "url": "https://www.youtube.com/watch?v=vPNx9jWz1qc",
    "title": "Hip Bump Sweep and Kimura from Closed Guard (Lachlan Giles)"
  },
  "Cross collar choke from mount": {
    "url": "https://www.youtube.com/watch?v=8wLWTw8G0c0",
    "title": "ROGER GRACIE Shows How To Do the Perfect Cross Choke From Mount"
  },
  "Elbow–knee mount escape": {
    "url": "https://www.youtube.com/watch?v=4jxokEggr6s",
    "title": "Intro to BJJ: Knee-Elbow Escape From Mount"
  },
  "Choke defense (hand fighting, chin tuck)": {
    "url": "https://www.youtube.com/watch?v=sGSI4sk-oxc",
    "title": "How to Escape REAR NAKED CHOKE by Ethan Crelinsten"
  },
  "Arm drag to back take or takedown": {
    "url": "https://www.youtube.com/watch?v=e_c7G5T_ZR8",
    "title": "BJJ Techniques: Arm Drag to Back Take by Gordon Ryan"
  },
  "Leg drag pass": {
    "url": "https://www.youtube.com/watch?v=bAxn19Pwf1c",
    "title": "Leg Drag Basics and Principles"
  },
  "Wrist locks (now legal — from guard or top)": {
    "url": "https://www.youtube.com/watch?v=zvdRMMg4hc8",
    "title": "Two WristLocks From Closed Guard - ZombieProofBJJ (Gi)"
  },
  "Deep half recovery from bad passes": {
    "url": "https://www.youtube.com/watch?v=SstZPJ1cz2c",
    "title": "BJJ deep half guard entry from bad spot"
  },
  "Crucifix position from turtle": {
    "url": "https://www.youtube.com/watch?v=89fa5eYjS-c",
    "title": "Turtle to Crucifix Rollover Transition - BJJ Fundamentals"
  },
  "Body lock passing system": {
    "url": "https://www.youtube.com/watch?v=CvC6qVljfek",
    "title": "5 Steps of BODY LOCK PASS by Lachlan Giles"
  },
  "Crucifix attacks (chokes and armlocks)": {
    "url": "https://www.youtube.com/watch?v=_HGvjRpfh8Y",
    "title": "The Perfect Jiu Jitsu Crucifix Attack by Marcelo Garcia"
  },
  "Escaping the crucifix": {
    "url": "https://www.youtube.com/watch?v=EcXue-cD12Q",
    "title": "How to Escape the Crucifix in BJJ"
  },
  "A-game passing: 3-technique connected passing system": {
    "url": "https://www.youtube.com/watch?v=AcxCqMwW_7o",
    "title": "3 Essential Guard Passes for Modern BJJ"
  },
  "Breakfalls (back and side)": {
    "url": "https://www.youtube.com/watch?v=RODJG8yLNX8",
    "title": "Jiu Jitsu: How to Back and Side Break Fall"
  },
  "Back control with seatbelt grip": {
    "url": "https://www.youtube.com/watch?v=baSqWCtLysU",
    "title": "BJJ Fundamentals - Back Mount Seatbelt Control | NoGi Grappling for Beginners"
  },
  "Turtle (safe posture, elbows in)": {
    "url": "https://www.youtube.com/watch?v=o55M0DMesfE",
    "title": "How to Escape the Turtle and Get Safely Back to Guard"
  },
  "Cross collar choke from mount (age-appropriate, supervised)": {
    "url": "https://www.youtube.com/watch?v=1s_1Hz7AGPg",
    "title": "Jiu-Jitsu Fundamentals | Cross Collar Choke from the Mount | BJJ Basics"
  },
  "Open guard retention (feet on hips, frames)": {
    "url": "https://www.youtube.com/watch?v=ce_0XT1BBQA",
    "title": "How To Do Perfect Guard Retention In BJJ by John Danaher"
  },
  "Armbar defense (hidden arm)": {
    "url": "https://www.youtube.com/watch?v=_vtl1FXmkEQ",
    "title": "Intro to Armbar Escapes by Gordon Ryan"
  },
  "De La Riva sweep": {
    "url": "https://www.youtube.com/watch?v=Iwn_GAyWcRc",
    "title": "How To Do The Perfect Side Sweep From De La Riva Guard by Mikey Musumeci"
  },
  "Guillotine defense (drilled)": {
    "url": "https://www.youtube.com/watch?v=Z8AU8oT5YU8",
    "title": "How To Escape A Standing Guillotine Choke | BJJ For Beginners with Eli Knight"
  },
  "Escaping body triangle": {
    "url": "https://www.youtube.com/watch?v=RscLPT0F-DE",
    "title": "The Best Way To Escape From The Jiu Jitsu Body Triangle by Gordon Ryan"
  },
  "Hold and understand back control (hooks/seatbelt)": {
    "url": "https://www.youtube.com/watch?v=baSqWCtLysU",
    "title": "BJJ Fundamentals - Back Mount Seatbelt Control | NoGi Grappling for Beginners"
  },
  "Flower (pendulum) sweep from closed guard": {
    "url": "https://www.youtube.com/watch?v=58ItAArEM4s",
    "title": "No Gi Pendulum Sweep and Arm Bar from Closed Guard (Lachlan Giles)"
  },
  "Armbar from closed guard": {
    "url": "https://www.youtube.com/watch?v=bkMUBlqh27g",
    "title": "Roger Gracie Teaches the Armbar from Guard"
  },
  "Side control escape to guard recovery": {
    "url": "https://www.youtube.com/watch?v=c6w0TBntCUo",
    "title": "BJJ Intro 4.4 - Side Control Escape to Half Guard sweep (Lachlan Giles)"
  },
  "Butterfly guard (hooks, posture, grips)": {
    "url": "https://www.youtube.com/watch?v=0WG1MYvgXAM",
    "title": "BJJ Butterfly Guard - Most Important Principles by Marcelo Garcia"
  },
  "Uchi mata or another hip throw": {
    "url": "https://www.youtube.com/watch?v=yiHxvpC7Isw",
    "title": "EASIEST way to learn UCHI MATA (Judo for BJJ)"
  },
  "Pressure passing vs half guard": {
    "url": "https://www.youtube.com/watch?v=Jz4oLDOHxLM",
    "title": "How To Do The Perfect Jiu Jitsu Half Guard Passing by John Danaher"
  },
  "Straight ankle lock with correct legal position": {
    "url": "https://www.youtube.com/watch?v=D40Os16vO4o",
    "title": "(IBJJF White Belt Legal) Gi Straight Ankle Lock - ZombieProofBJJ (Gi)"
  },
  "Escaping knee on belly": {
    "url": "https://www.youtube.com/watch?v=-Ivo9MAPUVo",
    "title": "Knee on Belly Escape by Bernardo Faria"
  },
  "Body triangle back control": {
    "url": "https://www.youtube.com/watch?v=PNeuHQzMPXc",
    "title": "Advanced Back Control: Arm Traps, Body Triangles, and Chokes (Full BJJ Instructional)"
  },
  "Headquarters position — knee cut / long step / smash options": {
    "url": "https://www.youtube.com/watch?v=4taI2oASGGw",
    "title": "Headquarters: Near side knee through, smash pass (Lachlan Giles)"
  },
  "Triangle → armbar → omoplata chain": {
    "url": "https://www.youtube.com/watch?v=877B2t2v7mQ",
    "title": "Jiu-Jitsu | Armbar, Triangle, Omoplata from the Closed Guard"
  },
  "Late-stage submission escapes (safety and control)": {
    "url": "https://www.youtube.com/watch?v=KC66GKalJcU",
    "title": "The Best Jiu Jitsu Submission Escapes & How To Connect Escapes To Submissions by John Danaher"
  },
  "Submission chains: 3+ attacks flowing from one control": {
    "url": "https://www.youtube.com/watch?v=WVOXKrJlU2U",
    "title": "BJJ Submissions Chain from Guard Tutorial (Eli Knight)"
  },
  "Forward and backward rolls": {
    "url": "https://www.youtube.com/watch?v=pByZlFg_cpU",
    "title": "Basic Jiu-Jitsu Mobility: Forward and Back Rolls"
  },
  "Scissor sweep": {
    "url": "https://www.youtube.com/watch?v=29Qq4kLjgH0",
    "title": "Jiu-Jitsu Fundamentals | Scissor Sweep from the Closed Guard"
  },
  "Half guard (top and bottom)": {
    "url": "https://www.youtube.com/watch?v=E8x1Cva8hJ8",
    "title": "How To Build The Perfect Half Guard Game by John Danaher"
  },
  "Americana from side control (slow and controlled)": {
    "url": "https://www.youtube.com/watch?v=ThRkj0FHySs",
    "title": "BJJ Basics: Americana from Side Control"
  },
  "Back control with hooks — maintaining through rolls": {
    "url": "https://www.youtube.com/watch?v=Q8kjMar_B1Q",
    "title": "BJJ Concepts: Back Mount Hook Retention Tips and Concepts by Jason Scully"
  },
  "Choke defense (hand fighting, chin down)": {
    "url": "https://www.youtube.com/watch?v=JR2e0IsqhrQ",
    "title": "How to Escape the Rear Naked Choke (Grapplearts)"
  },
  "Old-school sweep from half guard": {
    "url": "https://www.youtube.com/watch?v=-S1lhWAX2ps",
    "title": "Roberto 'Gordo' Correa Teaches the Old School Half Guard Sweep"
  },
  "Guillotine choke with control": {
    "url": "https://www.youtube.com/watch?v=4GO28kr4Lzc",
    "title": "Mastering The Guillotine Choke - Jiu-Jitsu Fundamentals"
  },
  "D'arce/anaconda early defense (drilled)": {
    "url": "https://www.youtube.com/watch?v=AuXIy3KHlM8",
    "title": "Defending the D'Arce Choke with Keith Owen"
  },
  "Orthodox and southpaw stance basics": {
    "url": "https://www.youtube.com/watch?v=g3Wl2XJMKzc",
    "title": "Boxing Basics with Tony Jeffries: South paw vs Orthodox boxing stance | SANABUL"
  },
  "Lateral step-drag left and right": {
    "url": "https://www.youtube.com/watch?v=dHUutXudf8o",
    "title": "Boxing Footwork Technique #1 - Step-drag"
  },
  "1-2 combination": {
    "url": "https://www.youtube.com/watch?v=vyTaKpylOcU",
    "title": "How to Throw a 1 - 2 / Jab - Cross in Boxing"
  },
  "Catch and block the jab": {
    "url": "https://www.youtube.com/watch?v=kJHnm4eC-L4",
    "title": "Essential Boxing Defense: How To Catch & Cover Safely"
  },
  "Jump rope 3 rounds basic bounce": {
    "url": "https://www.youtube.com/watch?v=xG5pSExhMFU",
    "title": "Learn the basic bounce (jump rope for boxing)"
  },
  "Moving jab: step-drag with jab": {
    "url": "https://www.youtube.com/watch?v=hhvY6CUz0Sw",
    "title": "Stepping With The Jab Drill - Incorporating Lower Body"
  },
  "Rear hook (4)": {
    "url": "https://www.youtube.com/watch?v=1ZZncRfkt0A",
    "title": "Throw A Perfect Lead & Rear Hook | Beginner Boxing Lesson"
  },
  "Jab to the body": {
    "url": "https://www.youtube.com/watch?v=Dyhqj04Pk0w",
    "title": "How to throw a Jab to the Body"
  },
  "Block the hook with high guard": {
    "url": "https://www.youtube.com/watch?v=cHeLLya4d5s",
    "title": "MASTER THE HIGH GUARD INSIDE 8 MINUTES"
  },
  "Partner mitt work: 1-2 and 1-2-3": {
    "url": "https://www.youtube.com/watch?v=7HwtoAgCkdI",
    "title": "How To Build A Padwork Flow For Boxing Training"
  },
  "In-and-out footwork with feints": {
    "url": "https://www.youtube.com/watch?v=9tLNdj1Srgw",
    "title": "In and Out Boxing Footwork Drill"
  },
  "Lead uppercut (5) and rear uppercut (6)": {
    "url": "https://www.youtube.com/watch?v=KcagWYVfvBg",
    "title": "How To Throw A Proper Rear And Lead Uppercut | Slow Mo Boxing Tutorial"
  },
  "Hook to the body, hook to the head": {
    "url": "https://www.youtube.com/watch?v=mYYHo4tE0s0",
    "title": "Combinations In Boxing That Works: LEAD HOOK TO THE HEAD+LEAD HOOK TO THE BODY"
  },
  "Pull back and counter with the cross": {
    "url": "https://www.youtube.com/watch?v=PcTpueaHVG4",
    "title": "How to use the pullback and counter"
  },
  "Technical sparring at light contact with headgear": {
    "url": "https://www.youtube.com/watch?v=NzSSkI0iSdo",
    "title": "Light Sparring Drill"
  },
  "Southpaw vs orthodox lead-foot battle": {
    "url": "https://www.youtube.com/watch?v=xTB8vscdW5U",
    "title": "How to Fight a Southpaw 1 of 3 - Front Foot Outside"
  },
  "Body attack series: 2 to the body, 3 to the body, 3 to the head": {
    "url": "https://www.youtube.com/watch?v=lEvHeABabvc",
    "title": "3 BODY SHOT COMBOS YOU NEED TO TRY | Boxing Training"
  },
  "Shoulder roll and return the cross": {
    "url": "https://www.youtube.com/watch?v=E-zOzT2SR98",
    "title": "How To Defend And Counter A Right Hand | Philly Shell Shoulder Roll Defense"
  },
  "Defense against the southpaw jab and straight left": {
    "url": "https://www.youtube.com/watch?v=udfjuoC6_xw",
    "title": "Southpaw vs Orthodox: How to Defend & Counter the Jab"
  },
  "Double-end bag with slips between punches": {
    "url": "https://www.youtube.com/watch?v=Qh4vuTBpzvs",
    "title": "Drills on the double end bag."
  },
  "Five and six punch combinations with movement": {
    "url": "https://www.youtube.com/watch?v=bLGPNkcbSgo",
    "title": "5 of the best 6 punch combinations for boxing with Olympian boxer"
  },
  "Full-round defensive shells with counters": {
    "url": "https://www.youtube.com/watch?v=cYot0K05adg",
    "title": "Boxing Defense & Counters at Home | Step-by-Step Training for Beginners"
  },
  "Boxing stance with hands up, chin down": {
    "url": "https://www.youtube.com/watch?v=SjLXzCpRS8U",
    "title": "Boxing Stance | Beginner Step-By-Step Tutorial"
  },
  "Hands-up habit during footwork games": {
    "url": "https://www.youtube.com/watch?v=sLgY2FzcllQ",
    "title": "Simple Boxing Drill To Learn How to Keep Your Hands Up"
  },
  "Circling left and right with guard up": {
    "url": "https://www.youtube.com/watch?v=pRyB2TvcddQ",
    "title": "SALBOX BOXING: JAB MOBILITY DRILL | CIRCLING LEFT & RIGHT"
  },
  "Angle step off the jab": {
    "url": "https://www.youtube.com/watch?v=oS0O7yRTprs",
    "title": "Boxing Footwork: The Step-off | L-step | V-step"
  },
  "Guard position: hands up, chin down, elbows in": {
    "url": "https://www.youtube.com/watch?v=mxByL1y6E_4",
    "title": "Boxing Tips | The Best Hand And Arm Position For Boxing"
  },
  "Jab (1)": {
    "url": "https://www.youtube.com/watch?v=YsFK1MMDQgk",
    "title": "How to Punch: Jab & Cross Beginner Boxing Tutorial"
  },
  "Straight punches on heavy bag with full fist rotation": {
    "url": "https://www.youtube.com/watch?v=jLktr8NIN-M",
    "title": "Punching the Heavy Bag - Boxing Basics - Four Straight Punches"
  },
  "Chin tuck behind the lead shoulder": {
    "url": "https://www.youtube.com/watch?v=rpPXdGr69IA",
    "title": "How to Tuck Your Chin (boxing defense position)"
  },
  "Shadowboxing 2 rounds with form focus": {
    "url": "https://www.youtube.com/watch?v=J4j3AOVWuHE",
    "title": "Quick Shadow Boxing Tutorial by Olympian"
  },
  "Circling out left and right with guard up": {
    "url": "https://www.youtube.com/watch?v=mUdGDoVWiDc",
    "title": "Boxing footwork to use in the ring. Part 3. Circling out"
  },
  "1-2-3 combination": {
    "url": "https://www.youtube.com/watch?v=m7-scehWJ04",
    "title": "Best boxing combos: Perfecting the 1 - 2 - 3 (jab - cross - left hook)"
  },
  "Slip left and slip right": {
    "url": "https://www.youtube.com/watch?v=Uqb6XMI3K2g",
    "title": "How to Slip Punches (step by step for beginners)"
  },
  "Shadowboxing 3 rounds with movement": {
    "url": "https://www.youtube.com/watch?v=XqUs3_D_Cxc",
    "title": "How to SHADOW BOX to Improve FOOTWORK"
  },
  "Understand the mandatory standing eight count": {
    "url": "https://www.youtube.com/watch?v=U4d944YcVW8",
    "title": "What Is A Standing Eight Count?"
  },
  "Pivot out after combinations": {
    "url": "https://www.youtube.com/watch?v=72M0E5LM92M",
    "title": "How To Pivot in Boxing 101 | step by step Tutorial"
  },
  "1-2-3-2 combination": {
    "url": "https://www.youtube.com/watch?v=z0B0M-vILRc",
    "title": "How To Throw A Jab - Cross - Cross - Hook Combo"
  },
  "Slip and counter with cross": {
    "url": "https://www.youtube.com/watch?v=pivp0Wamn0k",
    "title": "How to Do Jab, Cross, Slip, and Counter Cross in Boxing (Step-by-Step Tutorial)"
  },
  "Catch the jab and return the jab": {
    "url": "https://www.youtube.com/watch?v=sKR1fSt_K08",
    "title": "How To Catch and Counter The Jab Using Rear Hand!"
  },
  "Shadowboxing 3 rounds with defense focus": {
    "url": "https://www.youtube.com/watch?v=m8W0J49PSHY",
    "title": "5 Shadowboxing Drills for Footwork, Defense, & Cardio"
  },
  "Feint step to draw the lead": {
    "url": "https://www.youtube.com/watch?v=wSpbFJ3Pzlk",
    "title": "How to Feint in Boxing"
  },
  "Check hook off the back foot": {
    "url": "https://www.youtube.com/watch?v=yZ_gLhusT2s",
    "title": "How to Throw the Check Hook in Boxing, and 4 Useful Variations"
  },
  "Slip-roll-slip sequence under pressure": {
    "url": "https://www.youtube.com/watch?v=RFsNmv-Z5UU",
    "title": "Boxing Defense Explained! [Slip-Slip-Roll vs Slip-Roll-Roll]"
  },
  "Hard sparring rounds under coach supervision": {
    "url": "https://www.youtube.com/watch?v=R3_ytcHrAns",
    "title": "Beginner Boxing Sparring | Why You Need a Coach"
  },
  "Ring generalship: holding center ring": {
    "url": "https://www.youtube.com/watch?v=1pwhwJ3pmis",
    "title": "Holding CENTER RING position in a Fight"
  },
  "Counterpunching game plan against pressure fighters": {
    "url": "https://www.youtube.com/watch?v=2m64qiJVtRs",
    "title": "How to Fight Pressure Fighters in Boxing (AND WIN!!)"
  },
  "Simulated bouts at 3x3 minute competition pace": {
    "url": "https://www.youtube.com/watch?v=CBemVwGVZDY",
    "title": "Virtual Boxing Simulation: Full 3-Round Fight"
  },
  "Step-drag forward and back without crossing feet": {
    "url": "https://www.youtube.com/watch?v=dHUutXudf8o",
    "title": "Boxing Footwork Technique #1 - Step-drag"
  },
  "Heavy bag 2 rounds with combinations": {
    "url": "https://www.youtube.com/watch?v=hMQVMSkmPI0",
    "title": "How To Punch & Control A Heavy Bag | Boxing For Beginners"
  },
  "Step-drag forward and backward": {
    "url": "https://www.youtube.com/watch?v=dHUutXudf8o",
    "title": "Boxing Footwork Technique #1 - Step-drag"
  },
  "Cross (2)": {
    "url": "https://www.youtube.com/watch?v=sK-6Ujp3KYY",
    "title": "How to Throw the Perfect Cross (Right Hand / 2) in Boxing"
  },
  "High guard blocking": {
    "url": "https://www.youtube.com/watch?v=cHeLLya4d5s",
    "title": "MASTER THE HIGH GUARD INSIDE 8 MINUTES"
  },
  "Hand wrapping technique": {
    "url": "https://www.youtube.com/watch?v=hduA7FSCIKs",
    "title": "How to Wrap Your Hands For Boxing (Better Method)"
  },
  "Pivot on the lead foot": {
    "url": "https://www.youtube.com/watch?v=hNclexRmDsY",
    "title": "How to Pivot in Boxing"
  },
  "Lead hook (3)": {
    "url": "https://www.youtube.com/watch?v=PZuxtAAiPiM",
    "title": "3 Ways To Throw A Lead Hook | Boxing Training"
  },
  "Double jab to cross (1-1-2)": {
    "url": "https://www.youtube.com/watch?v=1M5sJPAWj5c",
    "title": "Beginner Boxing Combo 1-1-2 : How to start with combos"
  },
  "Parry the jab": {
    "url": "https://www.youtube.com/watch?v=tt6ZrePbVB0",
    "title": "Boxing Defense 101: Parry The Jab Instructions"
  },
  "Heavy bag 3 rounds with combinations": {
    "url": "https://www.youtube.com/watch?v=uZ9RAFW8g_A",
    "title": "Boxing for Beginners: 3 Heavy Bag Combos | 3 Minute Rounds Conditioning Workout"
  },
  "Cutting off the ring": {
    "url": "https://www.youtube.com/watch?v=hCDH0fEOh0Y",
    "title": "How to Cut off the Boxing Ring (step by step for beginners)"
  },
  "Jab to the body, cross to the head": {
    "url": "https://www.youtube.com/watch?v=FyhDJiZQYTM",
    "title": "Feint jab to the body - cross to the head"
  },
  "Roll under the hook": {
    "url": "https://www.youtube.com/watch?v=VPHjqqLKrEo",
    "title": "How to roll under a hook. Boxing Defense and counter punching."
  },
  "Double-end bag rhythm work": {
    "url": "https://www.youtube.com/watch?v=I_k5mj6YdzY",
    "title": "Complete Guide to the Double End Bag | Boxing Tutorial"
  },
  "45-degree angle step off the jab": {
    "url": "https://www.youtube.com/watch?v=pFlW2MtfIVs",
    "title": "45-Degree Angles in Boxing"
  },
  "Slip the jab, counter 2-3": {
    "url": "https://www.youtube.com/watch?v=TNa_WTrZobY",
    "title": "Boxing | How To Slip and Counter the Jab"
  },
  "Combinations off feints": {
    "url": "https://www.youtube.com/watch?v=yCy095QJ5V8",
    "title": "Feint Boxing - Build a KILLER boxing style around these 5 boxing feint sequences"
  },
  "Block and counter in the pocket": {
    "url": "https://www.youtube.com/watch?v=Splaef5Jpc4",
    "title": "Blocking and Counter Punching - Simple Boxing Training Tips"
  },
  "Interval conditioning at 3x3 minute bout pace": {
    "url": "https://www.youtube.com/watch?v=Jy9VZNnbxZU",
    "title": "Heavy Bag Workout for Boxing: 3 x 3 min Rounds for Endurance and Stamina"
  },
  "Escaping the corner and getting off the ropes": {
    "url": "https://www.youtube.com/watch?v=ygdNz3YFCok",
    "title": "How to Fight Out of the Corner of a Ring (Off the Ropes)"
  },
  "1-2 combination on coach's mitts": {
    "url": "https://www.youtube.com/watch?v=BwCwTuqd6Ts",
    "title": "How To Throw a Perfect 1-2 in Boxing | Jab-Cross Mittwork Drill"
  },
  "Slip left and right on coach's command": {
    "url": "https://www.youtube.com/watch?v=2YzYybYjL2Y",
    "title": "How to Slip a Jab and Counter like a pro"
  },
  "In-and-out movement with feints": {
    "url": "https://www.youtube.com/watch?v=FaUq7YRLwmo",
    "title": "Boxing Fundamentals 'In and out of the pocket' Tutorial"
  },
  "Air squat to depth (hip crease below knee)": {
    "url": "https://www.youtube.com/watch?v=C_VtOYc6j5c",
    "title": "The Air Squat: CrossFit Foundational Movement"
  },
  "PVC shoulder press to full lockout": {
    "url": "https://www.youtube.com/watch?v=xe19t2_6yis",
    "title": "The Shoulder Press: CrossFit Foundational Movement"
  },
  "PVC snatch position drills": {
    "url": "https://www.youtube.com/watch?v=A2VRZiiO7IE",
    "title": "4 Position PVC Pipe Warm Up for Your Snatch"
  },
  "Row 500m at any pace": {
    "url": "https://www.youtube.com/watch?v=JunqWhTXTJs",
    "title": "Basics of the Concept2 Rowing Technique"
  },
  "Back squat to depth with empty barbell": {
    "url": "https://www.youtube.com/watch?v=ultWZbUMPL8",
    "title": "The Back Squat (CrossFit)"
  },
  "Push-up x 10 unbroken": {
    "url": "https://www.youtube.com/watch?v=IODxDxX7oi4",
    "title": "The Perfect Push Up | Do It Right!"
  },
  "Box jump with step-down": {
    "url": "https://www.youtube.com/watch?v=W5QzqIbEWvk",
    "title": "Box Jump Step Down - OPEX Exercise Library"
  },
  "Single-unders x 100 unbroken": {
    "url": "https://www.youtube.com/watch?v=hCuXYrTOMxI",
    "title": "The Single-Under (CrossFit)"
  },
  "Back squat 1.25x bodyweight": {
    "url": "https://www.youtube.com/watch?v=7v_V6xiA_AA",
    "title": "How to Perform A Back Squat (Squat University)"
  },
  "Push press at 0.75x bodyweight": {
    "url": "https://www.youtube.com/watch?v=X6-DMh-t4nQ",
    "title": "The Push Press: CrossFit Foundational Movement"
  },
  "Split jerk footwork with barbell": {
    "url": "https://www.youtube.com/watch?v=LTcr2wbG6gA",
    "title": "Split Jerk Footwork // 4-Drill Progression"
  },
  "Fran under 8 minutes (scaled ok)": {
    "url": "https://www.youtube.com/watch?v=2KpSXGKzWdw",
    "title": "Fran CrossFit WOD Tips (Benchmark Workout) - WODprep"
  },
  "Back squat 1.5x bodyweight": {
    "url": "https://www.youtube.com/watch?v=Uv_DKDl7EjA",
    "title": "The Official Squat Form Checklist (Squat University)"
  },
  "Squat clean at bodyweight": {
    "url": "https://www.youtube.com/watch?v=7A-QEbSMhJs",
    "title": "CrossFit - Coaching The Squat Clean with Josh Everett"
  },
  "Kipping handstand push-up x 10": {
    "url": "https://www.youtube.com/watch?v=RWuXSo6sYKk",
    "title": "Kipping HSPU Progression for WODs (WODprep Tutorial)"
  },
  "Murph partitioned, with vest optional": {
    "url": "https://www.youtube.com/watch?v=2kMQgbNKSc0",
    "title": "Memorial Day Murph | Murph WOD Strategy | How to Partition Murph"
  },
  "Back squat 2x bodyweight": {
    "url": "https://www.youtube.com/watch?v=SbgHegC6lEs",
    "title": "How to Back Squat | #AskSquatU Show Ep. 10"
  },
  "Strict ring muscle-up": {
    "url": "https://www.youtube.com/watch?v=s2ycF1UZmr8",
    "title": "How To Get Your First Strict Ring Muscle Up (in 10 minutes!) | WODprep"
  },
  "Handstand walk 50 feet": {
    "url": "https://www.youtube.com/watch?v=XfHd45DpN8c",
    "title": "How To Get Your First Handstand Walk Steps | WODprep"
  },
  "Row 2000m under 7:30": {
    "url": "https://www.youtube.com/watch?v=drW07kq7lTk",
    "title": "How to row your first 2000m Time Trial - Pacing the 2K"
  },
  "Ring row x 8": {
    "url": "https://www.youtube.com/watch?v=sEAOZc77wk8",
    "title": "The Ring Row (CrossFit)"
  },
  "Run 800m": {
    "url": "https://www.youtube.com/watch?v=jWYSvlhjm40",
    "title": "Running Technique (CrossFit)"
  },
  "Deadlift with light-to-moderate load": {
    "url": "https://www.youtube.com/watch?v=op9kVnSso6Q",
    "title": "The Deadlift: CrossFit Foundational Movement"
  },
  "Kip swing on the pull-up bar": {
    "url": "https://www.youtube.com/watch?v=z64esSR3w_U",
    "title": "How to Perform the PERFECT Kip Swing (Power Monkey Fitness)"
  },
  "Deadlift 1.25x bodyweight": {
    "url": "https://www.youtube.com/watch?v=WP0IFHkkRZ0",
    "title": "The ULTIMATE Deadlift Tutorial (Squat University)"
  },
  "Helen scaled under 13 minutes": {
    "url": "https://www.youtube.com/watch?v=otDYoRk1Kgc",
    "title": "Workout Tips with Adrian Bozman: Nancy or Helen (CrossFit)"
  },
  "Goblet squat with light kettlebell": {
    "url": "https://www.youtube.com/watch?v=mF5tnEBrdkc",
    "title": "Goblet Squat"
  },
  "Ring row at 45 degrees": {
    "url": "https://www.youtube.com/watch?v=xhlReCpAE9k",
    "title": "The Ring Row"
  },
  "PVC clean pull to front rack": {
    "url": "https://www.youtube.com/watch?v=fInevEgLhm0",
    "title": "PVC Clean High Pull"
  },
  "Single-under jump rope x 25": {
    "url": "https://www.youtube.com/watch?v=ahgstrghNSM",
    "title": "Jump rope (single-under)"
  },
  "Front squat with empty barbell": {
    "url": "https://www.youtube.com/watch?v=m4ytaCJZpl0",
    "title": "The Front Squat: CrossFit Foundational Movement"
  },
  "Banded strict pull-up x 5": {
    "url": "https://www.youtube.com/watch?v=JEI3tPkg-fQ",
    "title": "Quick Tip: Banded Strict Pull-Up Progression"
  },
  "Hanging knee raise x 10": {
    "url": "https://www.youtube.com/watch?v=p9hhX_Sx5v0",
    "title": "The Hanging Knee Raise | A Tutorial"
  },
  "Run 1 mile without walking": {
    "url": "https://www.youtube.com/watch?v=IycZvGlnzY8",
    "title": "How to Run a Mile Without Stopping | Track Progression!"
  },
  "Deadlift 1.5x bodyweight": {
    "url": "https://www.youtube.com/watch?v=op9kVnSso6Q",
    "title": "The Deadlift: CrossFit Foundational Movement"
  },
  "Handstand hold against wall 30 seconds": {
    "url": "https://www.youtube.com/watch?v=hLYXOP-rFk8",
    "title": "Back-To-Wall Handstand Hold | CrossFit Invictus Gymnastics"
  },
  "Kipping pull-up x 5": {
    "url": "https://www.youtube.com/watch?v=r45xLlH7r_M",
    "title": "The Kipping Pull-Up"
  },
  "Helen under 12 minutes": {
    "url": "https://www.youtube.com/watch?v=Ksu4VE9C7DE",
    "title": "CrossFit Benchmark Workouts | Helen"
  },
  "Deadlift 2x bodyweight": {
    "url": "https://www.youtube.com/watch?v=dBXnS-c5r0Q",
    "title": "Level 1 - Dissecting the Deadlift"
  },
  "Squat snatch at 0.75x bodyweight": {
    "url": "https://www.youtube.com/watch?v=9xQp2sldyts",
    "title": "The Snatch: CrossFit Foundational Movement"
  },
  "Bar muscle-up": {
    "url": "https://www.youtube.com/watch?v=xgQtX16j8NQ",
    "title": "Bar Muscle Up Progression (Simple 4-Step WODprep Tutorial)"
  },
  "Double-unders x 50 unbroken": {
    "url": "https://www.youtube.com/watch?v=gnjSkO1gR8U",
    "title": "How to Do Double Unders | Step-by-Step CrossFit Tutorial"
  },
  "Deadlift 2.5x bodyweight": {
    "url": "https://www.youtube.com/watch?v=RFBTx62yMMw",
    "title": "Ben Bergeron explains Deadlift technique"
  },
  "Squat snatch at bodyweight": {
    "url": "https://www.youtube.com/watch?v=Dg_PW_yOLxI",
    "title": "CrossFit Movements - How to do a Squat Snatch"
  },
  "Legless rope climb": {
    "url": "https://www.youtube.com/watch?v=rfr-Tw3Pxh8",
    "title": "Legless Rope Climb"
  },
  "Double-unders x 100 unbroken": {
    "url": "https://www.youtube.com/watch?v=hWOgW6BWiWU",
    "title": "How To Learn Double Unders: FULL WODPREP SEMINAR w/ Real Athletes!"
  },
  "Push-up (knees ok) x 8": {
    "url": "https://www.youtube.com/watch?v=PDr5B2jLUOw",
    "title": "How to do a Modified Push-Up | Proper Form & Technique | NASM"
  },
  "Single-unders x 50": {
    "url": "https://www.youtube.com/watch?v=8K4KCOHLLJU",
    "title": "How to Jump Rope - Single Unders"
  },
  "Strict pull-up x 3 (band ok)": {
    "url": "https://www.youtube.com/watch?v=EihD_pt2AFA",
    "title": "Pull Ups For Beginners (6 Simple Steps For Strict Pull Ups In CrossFit)"
  },
  "Strict pull-up x 7": {
    "url": "https://www.youtube.com/watch?v=GdR0jI6mzME",
    "title": "How To Do Strict Pull-ups For CrossFit (How To Increase Pull-up Strength)"
  },
  "Double-unders x 30 unbroken": {
    "url": "https://www.youtube.com/watch?v=wdyaA8PIQos",
    "title": "Double Under Tips From WODprep (Simple Technique)"
  },
  "PVC hip hinge drill": {
    "url": "https://www.youtube.com/watch?v=rri2l0KFk-Q",
    "title": "PVC Hip Hinge Drill"
  },
  "Dead hang from pull-up bar 20 seconds": {
    "url": "https://www.youtube.com/watch?v=Nc-JGSZZMAQ",
    "title": "Dead Hang from Pull Up Bar - Exercise Demo"
  },
  "Hollow body hold 20 seconds": {
    "url": "https://www.youtube.com/watch?v=HAfUt2Cco74",
    "title": "HOLLOW BODY HOLD Progressions (Beginner to Advanced)"
  },
  "Couch stretch 1 minute per side": {
    "url": "https://www.youtube.com/watch?v=7bW0dBwB7Dc",
    "title": "How to Do The Couch Stretch: Beginner to Advanced"
  },
  "Deadlift at bodyweight x 5": {
    "url": "https://www.youtube.com/watch?v=op9kVnSso6Q",
    "title": "The Deadlift: CrossFit Foundational Movement"
  },
  "Hang power clean with light barbell": {
    "url": "https://www.youtube.com/watch?v=o9PmLBvJNXw",
    "title": "Hang Power Clean | CrossFit Invictus"
  },
  "Wall walk to halfway": {
    "url": "https://www.youtube.com/watch?v=2TnX8j29tRY",
    "title": "The Wall Walk"
  },
  "Overhead squat with PVC to full depth": {
    "url": "https://www.youtube.com/watch?v=mkG9HzfT9P4",
    "title": "Teaching the Overhead Squat (PVC)"
  },
  "Overhead squat with barbell": {
    "url": "https://www.youtube.com/watch?v=RD_vUnqwqqI",
    "title": "The Overhead Squat: CrossFit Foundational Movement"
  },
  "Power clean at 0.75x bodyweight": {
    "url": "https://www.youtube.com/watch?v=GVt4uQ0sDJE",
    "title": "The Power Clean"
  },
  "Toes-to-bar x 5": {
    "url": "https://www.youtube.com/watch?v=_03pCKOv4l4",
    "title": "The Kipping Toes-to-bar"
  },
  "Double-unders x 25 unbroken": {
    "url": "https://www.youtube.com/watch?v=FpLHepqLoQY",
    "title": "Double Under Tutorial (Most Common Double Under Mistakes)"
  },
  "Strict pull-up x 10": {
    "url": "https://www.youtube.com/watch?v=EihD_pt2AFA",
    "title": "Pull Ups For Beginners (6 Simple Steps For Strict Pull Ups In CrossFit)"
  },
  "Clean and jerk at bodyweight": {
    "url": "https://www.youtube.com/watch?v=PjY1rH4_MOA",
    "title": "The Clean and Jerk"
  },
  "Pistol squat on each leg": {
    "url": "https://www.youtube.com/watch?v=vq5-vdgJc0I",
    "title": "How to Get Your First PISTOL SQUAT (Step-by-Step Progression)"
  },
  "Overhead squat at bodyweight to full depth": {
    "url": "https://www.youtube.com/watch?v=61GJU2j6U_A",
    "title": "HOW TO OVERHEAD SQUAT | FROM A CROSSFIT GAMES ATHLETE"
  },
  "Strict handstand push-up x 10": {
    "url": "https://www.youtube.com/watch?v=YWlO1RGzkmE",
    "title": "Strict Handstand Push-up Progression (3 Steps!)"
  },
  "Clean and jerk at 1.25x bodyweight": {
    "url": "https://www.youtube.com/watch?v=RP1094HlQOQ",
    "title": "How to Do Clean & Jerk: Full Guide to Improve C&J Technique & Lift More"
  },
  "Fran under 4 minutes": {
    "url": "https://www.youtube.com/watch?v=2KpSXGKzWdw",
    "title": "Fran CrossFit WOD Tips (Benchmark Workout)"
  },
  "Daily position work (overhead, front rack, deep squat)": {
    "url": "https://www.youtube.com/watch?v=MrN_PorRfiQ",
    "title": "The LAZY Way to Unlock Your Overhead, Front Rack, and Squat Mobility"
  },
  "PVC snatch and clean drills": {
    "url": "https://www.youtube.com/watch?v=EIUTjPlvveM",
    "title": "We Lift - Snatch PVC drills"
  },
  "Bottom-of-squat hold 1 minute": {
    "url": "https://www.youtube.com/watch?v=SfgkdkB3xKw",
    "title": "Monkey-Method: Bottom Squat Hold"
  },
  "Push-up x 15 unbroken": {
    "url": "https://www.youtube.com/watch?v=kM47_kIXGAY",
    "title": "Master Perfect Pushups: The CrossFit Coach's Guide"
  },
  "Row 500m hard effort": {
    "url": "https://www.youtube.com/watch?v=1b2kd_w_l08",
    "title": "Your BEST 500m Row (QUICK TIPS!)"
  },
  "Power clean with moderate load": {
    "url": "https://www.youtube.com/watch?v=f7lYcGuV9ac",
    "title": "Power Clean | CrossFit Invictus"
  },
  "Kettlebell deadlift with neutral spine": {
    "url": "https://www.youtube.com/watch?v=MJPGkNqAXzg",
    "title": "How to Do a Kettlebell Deadlift | Proper Form & Technique | NASM"
  },
  "Knee push-up x 10": {
    "url": "https://www.youtube.com/watch?v=Ahf4t9ky3d8",
    "title": "Push-Up From the Knees"
  },
  "Plank hold 45 seconds": {
    "url": "https://www.youtube.com/watch?v=sZxrs3C209k",
    "title": "The Plank Hold"
  },
  "Bottom-of-squat hold 2 minutes accumulated": {
    "url": "https://www.youtube.com/watch?v=zL4OMUBsCpU",
    "title": "Bottom of Squat Hold"
  },
  "Strict press with barbell": {
    "url": "https://www.youtube.com/watch?v=uVDhZalbPAo",
    "title": "Strict Press"
  },
  "Power snatch with training bar": {
    "url": "https://www.youtube.com/watch?v=tuOiNeTvLJs",
    "title": "The Power Snatch"
  },
  "Row 2000m under 10 minutes": {
    "url": "https://www.youtube.com/watch?v=drW07kq7lTk",
    "title": "How to row your first 2000m Time Trial - Pacing the 2K"
  },
  "Front rack mobility stretch": {
    "url": "https://www.youtube.com/watch?v=Wx9lG1VTf-Q",
    "title": "Improve Your Front Rack Mobility | #AskSquatU Show Ep. 45"
  },
  "Strict pull-up x 5": {
    "url": "https://www.youtube.com/watch?v=EihD_pt2AFA",
    "title": "Pull Ups For Beginners (6 Simple Steps For Strict Pull Ups In CrossFit)"
  },
  "Squat clean with moderate load": {
    "url": "https://www.youtube.com/watch?v=7A-QEbSMhJs",
    "title": "CrossFit - Coaching The Squat Clean with Josh Everett"
  },
  "Handstand push-up progression (pike on box)": {
    "url": "https://www.youtube.com/watch?v=qbRbM6d5ddM",
    "title": "Handstand Push-Up Variations"
  },
  "Overhead squat to full depth with barbell": {
    "url": "https://www.youtube.com/watch?v=L38N3DHmlyc",
    "title": "Overhead Squat Basics"
  },
  "Strict handstand push-up x 3": {
    "url": "https://www.youtube.com/watch?v=YWlO1RGzkmE",
    "title": "Strict Handstand Push-up Progression (3 Steps!)"
  },
  "Chest-to-bar pull-up x 10": {
    "url": "https://www.youtube.com/watch?v=AyPTCEXTjOo",
    "title": "The Kipping Chest-to-Bar Pull-Up"
  },
  "Fran under 6 minutes RX (95/65 lb thrusters)": {
    "url": "https://www.youtube.com/watch?v=2KpSXGKzWdw",
    "title": "Fran CrossFit WOD Tips (Benchmark Workout)"
  },
  "Daily 10-minute mobility routine": {
    "url": "https://www.youtube.com/watch?v=0VrLgzwTmTg",
    "title": "10 Minute Morning Mobility Routine! (FOLLOW ALONG)"
  },
  "Weighted pull-up with 0.5x bodyweight": {
    "url": "https://www.youtube.com/watch?v=HuuyDNGrCI8",
    "title": "How To: Weighted Pull-Up"
  },
  "Ring muscle-up x 5 unbroken": {
    "url": "https://www.youtube.com/watch?v=kcOrpyWW77A",
    "title": "Ring Muscle Ups: Quick Tutorial (How to!)"
  },
  "Murph under 40 minutes with vest": {
    "url": "https://www.youtube.com/watch?v=bfAw820pZks",
    "title": "Murph Hero Workout Tips (WODprep Strategy Guide)"
  },
  "Kettlebell deadlift with flat back": {
    "url": "https://www.youtube.com/watch?v=l6gDwf3xC6s",
    "title": "Kettlebell Deadlift | Exercise Tutorial"
  },
  "Box step-up": {
    "url": "https://www.youtube.com/watch?v=5qjqDHOUh-A",
    "title": "The Box Step-Up"
  },
  "Back squat with light barbell (technique first)": {
    "url": "https://www.youtube.com/watch?v=ultWZbUMPL8",
    "title": "The Back Squat"
  },
  "Hang power clean with training bar": {
    "url": "https://www.youtube.com/watch?v=0aP3tgKZcHQ",
    "title": "The Hang Power Clean"
  },
  "Back squat near bodyweight (coach-verified form)": {
    "url": "https://www.youtube.com/watch?v=7v_V6xiA_AA",
    "title": "How to Perform A Back Squat"
  },
  "Kipping pull-up x 8": {
    "url": "https://www.youtube.com/watch?v=wtcxhF2uKjw",
    "title": "Mastering the Kipping Pull-Up: A Step-by-Step Guide with Todd Occhiuto"
  },
  "Ushiro-ukemi (backward breakfall)": {
    "url": "https://www.youtube.com/watch?v=w3eqwMELfk8",
    "title": "Ushiro Ukemi || Backwards Breakfall"
  },
  "Tsugi-ashi and ayumi-ashi (judo footwork)": {
    "url": "https://www.youtube.com/watch?v=lgiwvN9TdW8",
    "title": "AYUMI ASHI & TSUGI ASHI JUDO"
  },
  "De-ashi-barai (advancing foot sweep)": {
    "url": "https://www.youtube.com/watch?v=o5XfwvgF5ow",
    "title": "DE ASHI BARAI (Advancing Foot Sweep) START TO FINISH"
  },
  "Kesa-gatame escape (bridge and shrimp)": {
    "url": "https://www.youtube.com/watch?v=ZuCsTy95Qys",
    "title": "2 Awesome Kesa-gatame Escapes"
  },
  "Ippon-seoi-nage (one-arm shoulder throw)": {
    "url": "https://www.youtube.com/watch?v=rkLtsh3t2sk",
    "title": "Judo Ippon Seoi Nage Tutorial"
  },
  "Sasae-tsurikomi-ashi (propping drawing ankle block)": {
    "url": "https://www.youtube.com/watch?v=4TWwV1sHjPk",
    "title": "How To Sasae Tsurikomi Ashi In 10 Minutes"
  },
  "Yoko-shiho-gatame escape (leg entanglement)": {
    "url": "https://www.youtube.com/watch?v=mqJ5bnBxquw",
    "title": "Yoko Shiho Gatame Escape No.1 (To catch the leg)"
  },
  "Koshi-guruma (hip wheel)": {
    "url": "https://www.youtube.com/watch?v=dlVHpC8VMkg",
    "title": "Koshi Guruma || Hip Wheel 2.0"
  },
  "O-uchi-gari into ippon-seoi-nage (renraku combination)": {
    "url": "https://www.youtube.com/watch?v=e01K8sahO6Q",
    "title": "Ouchi-Gari into Ippon-Seoi-Nage"
  },
  "Bridge-and-roll escape from tate-shiho-gatame": {
    "url": "https://www.youtube.com/watch?v=j-g-RL0uYwI",
    "title": "Escapes from the Mount (Tate Shiho Gatame)"
  },
  "Kumi-kata fundamentals (grip fighting)": {
    "url": "https://www.youtube.com/watch?v=k656jSu-ww0",
    "title": "BASIC JUDO GRIP FIGHTING - TRAVIS STEVENS JUDO"
  },
  "Morote-seoi-nage (two-hand shoulder throw)": {
    "url": "https://www.youtube.com/watch?v=NfkQ3qb4pZ4",
    "title": "How to do Morote-Seoi-Nage | Double Hand Shoulder Throw"
  },
  "Okuri-eri-jime (sliding collar choke)": {
    "url": "https://www.youtube.com/watch?v=QRcpENSIPC8",
    "title": "Okuri Eri Jime || Sliding Collar Lock"
  },
  "Uchi-mata defense (square hips, catch and lift)": {
    "url": "https://www.youtube.com/watch?v=H2cFdFi7IiI",
    "title": "Your Guide for Defending Judo's Biggest Throw, Uchi Mata"
  },
  "Sumi-gaeshi (corner reversal sacrifice)": {
    "url": "https://www.youtube.com/watch?v=PDF5E879TYk",
    "title": "Judo Sumi Gaeshi (Sacrifice Throw) Tutorial"
  },
  "Sankaku-jime (triangle choke)": {
    "url": "https://www.youtube.com/watch?v=0D6vM0ZnG0o",
    "title": "3 Basic Sankaku-Jime Variations || The Triangle Choke"
  },
  "Uchi-mata-sukashi (inner-thigh slip counter)": {
    "url": "https://www.youtube.com/watch?v=JvypPP1-5Iw",
    "title": "The secret method to counter Uchi mata, uchi mata sukashi"
  },
  "Kumi-kata dominance (inside grips, grip sequencing)": {
    "url": "https://www.youtube.com/watch?v=PEmEMbFhB1w",
    "title": "Grip Fighting by The Best Judo Coach In The US History - Jimmy Pedro"
  },
  "Kata-guruma (shoulder wheel, no-leg-grab version)": {
    "url": "https://www.youtube.com/watch?v=Ha-jHL-rEJ4",
    "title": "Kata Guruma || Shoulder Wheel 2.0"
  },
  "Ushiro-sankaku (reverse triangle entry)": {
    "url": "https://www.youtube.com/watch?v=-L95HmPtSsE",
    "title": "USHIRO SANKAKU JIME REAR TRIANGLE CHOKE"
  },
  "Ashi-waza counter timing in randori": {
    "url": "https://www.youtube.com/watch?v=nqtm2wY0kBM",
    "title": "Judo Footsweep Timing"
  },
  "Renraku-waza systems (combination attacks under randori pressure)": {
    "url": "https://www.youtube.com/watch?v=KVUazCEKQLQ",
    "title": "Principles of Combination Throws ( Renraku Waza )"
  },
  "Ebi (shrimping drill)": {
    "url": "https://www.youtube.com/watch?v=STuWSIYrEeg",
    "title": "EBI SHRIMPING 1.Mae, FORWARD, 2.Gyaku, REVERSE 3. Yoko, SIDE"
  },
  "Sasae-tsurikomi-ashi (propping ankle block)": {
    "url": "https://www.youtube.com/watch?v=ZXpDa1B0uws",
    "title": "Sasae Tsurikomi Ashi - Judo"
  },
  "Escape from kami-shiho-gatame": {
    "url": "https://www.youtube.com/watch?v=dQgIeNMdgqo",
    "title": "Escapes from North South (Kami Shiho Gatame)"
  },
  "Yoko-ukemi (side breakfall)": {
    "url": "https://www.youtube.com/watch?v=W_gWUxz5Xm0",
    "title": "How to do Yoko Ukemi - Side Breakfall"
  },
  "Kuzushi in 8 directions (happo-no-kuzushi)": {
    "url": "https://www.youtube.com/watch?v=NaD4i3JVDXk",
    "title": "Judo- Kuzushi - Happo-no-Kuzushi"
  },
  "Kesa-gatame (scarf hold)": {
    "url": "https://www.youtube.com/watch?v=CAUAcgniYKA",
    "title": "How to do Kesa-Gatame | Scarf Hold | Judo and BJJ"
  },
  "Jigotai (defensive posture) and basic grip protection": {
    "url": "https://www.youtube.com/watch?v=7d684Rwq9n4",
    "title": "How To Do Jigotai and Shizentai"
  },
  "O-uchi-gari (major inner reap)": {
    "url": "https://www.youtube.com/watch?v=j-CZwLBdqjk",
    "title": "How to do Ouchi Gari (Major Inner reap) for Judo / BJJ"
  },
  "Kata-gatame (shoulder hold)": {
    "url": "https://www.youtube.com/watch?v=jEBDlaua3ms",
    "title": "How to do Kata-Gatame | Shoulder Hold | Judo and BJJ"
  },
  "Turtle position defense (elbows in, grips protected)": {
    "url": "https://www.youtube.com/watch?v=i08uQgulYmc",
    "title": "5 Ways To Recover Guard From Turtle Position | BJJ MUST KNOW"
  },
  "Tsurikomi-goshi (lifting-pulling hip throw)": {
    "url": "https://www.youtube.com/watch?v=rE8VgdiR3BI",
    "title": "Tsurikomi Goshi || Lift-Pull Hip Throw 2.0"
  },
  "Ko-uchi-gari into o-uchi-gari (renraku combination)": {
    "url": "https://www.youtube.com/watch?v=g79D29dcNNk",
    "title": "Renraku Waza - Kouchi-Gari & Ouchi-Gari Combination"
  },
  "Basic turtle turnover to kesa-gatame": {
    "url": "https://www.youtube.com/watch?v=XiIEI0I_tKg",
    "title": "KUZURE KESA GATAME: UTA ABE style, from a turtle turnover"
  },
  "High-impact ukemi from harai-goshi and uchi-mata": {
    "url": "https://www.youtube.com/watch?v=LQrk192dkRI",
    "title": "Learn Judo Break-fall skills: BREAK FALL CONFIDENCE & Credibility to save you"
  },
  "Ko-soto-gake (minor outer hook)": {
    "url": "https://www.youtube.com/watch?v=-3xLSvgVero",
    "title": "Ko Soto Gake - Minor Outside Hook - Kosoto Gake Judo Throw Basics 4 BJJ JiuJitsu"
  },
  "Kata-juji-jime (half cross choke)": {
    "url": "https://www.youtube.com/watch?v=Fhbd7qiGy_E",
    "title": "Kata Juji Jime || Half Cross Lock"
  },
  "O-soto-gaeshi (counter to o-soto-gari)": {
    "url": "https://www.youtube.com/watch?v=d2zxyt2d_aw",
    "title": "O SOTO GAESHI COUNTER TO O SOTO GARI"
  },
  "Hane-goshi (spring hip throw)": {
    "url": "https://www.youtube.com/watch?v=UpfmXDrD05U",
    "title": "How to do Hane Goshi"
  },
  "Kata-ha-jime (single-wing choke)": {
    "url": "https://www.youtube.com/watch?v=hehUk4np-OU",
    "title": "KATA HA JIME (Single Wing Choke)"
  },
  "Tomoe-nage defense (drop hips, step around)": {
    "url": "https://www.youtube.com/watch?v=bGbwC5WG8p0",
    "title": "Defense For Tomoe Nage by Shintaro Higashi"
  },
  "Ura-nage (rear sacrifice throw)": {
    "url": "https://www.youtube.com/watch?v=gV2ThqJWOak",
    "title": "URA NAGE (Rear Throw) BASICS"
  },
  "Utsuri-goshi (hip-shift counter throw)": {
    "url": "https://www.youtube.com/watch?v=pyzYfHXivs4",
    "title": "Utsuri-Goshi: The Ultimate Counter against All Turn Throws"
  },
  "Osaekomi switching chain (kesa to yoko to tate)": {
    "url": "https://www.youtube.com/watch?v=8Sur4gbtmbk",
    "title": "Osaekomi waza circuit to help teach transitions between holds"
  },
  "Nage-no-kata — first three sets to demonstration standard": {
    "url": "https://www.youtube.com/watch?v=m-nKmTwoa-E",
    "title": "Nage No Kata (first 3 sets)"
  },
  "Complete ne-waza system (turnovers, hold chains, shime and juji-gatame entries)": {
    "url": "https://www.youtube.com/watch?v=_3CPDyupdq4",
    "title": "Ne-waza techniques beginners course judo"
  },
  "Moving breakfalls both sides": {
    "url": "https://www.youtube.com/watch?v=5n_Qjeia2n8",
    "title": "How to do Judo breakfalls - Judo basics"
  },
  "O-uchi-gari into ippon-seoi-nage (combination)": {
    "url": "https://www.youtube.com/watch?v=e01K8sahO6Q",
    "title": "Ouchi-Gari into Ippon-Seoi-Nage"
  },
  "High ukemi from partner throws": {
    "url": "https://www.youtube.com/watch?v=q6FBYGpUsY8",
    "title": "How To Breakfall Correctly (Ukemi)"
  },
  "Mae-ukemi (front flat breakfall)": {
    "url": "https://www.youtube.com/watch?v=KrMNtX86ou8",
    "title": "Mae Ukemi || Front Breakfall"
  },
  "O-goshi (major hip throw)": {
    "url": "https://www.youtube.com/watch?v=LN5Q2pUuEbQ",
    "title": "O-GOSHI Major Hip Throw, 7dan Judo Coach Graeme Spinks"
  },
  "Yoko-shiho-gatame (side four-corner hold)": {
    "url": "https://www.youtube.com/watch?v=ySLrc73NRAM",
    "title": "Yoko Shiho Gatame - Side Four Corner Hold"
  },
  "Moving zenpo-kaiten-ukemi both sides": {
    "url": "https://www.youtube.com/watch?v=TGJaKlWxOyc",
    "title": "How to do a Rolling Breakfall (Zenpo Kaiten Ukemi)"
  },
  "Ko-soto-gari (minor outer reap)": {
    "url": "https://www.youtube.com/watch?v=FMSTkwOMhHs",
    "title": "Ko Soto Gari - Judo"
  },
  "Kami-shiho-gatame (upper four-corner hold)": {
    "url": "https://www.youtube.com/watch?v=TsJcz6M4eLg",
    "title": "Kami Shiho Gatame - Upper Four Corner Hold"
  },
  "Ko-uchi-gari (minor inner reap)": {
    "url": "https://www.youtube.com/watch?v=pcOUSRzuFbs",
    "title": "How to do Kouchi-Gari | Minor Inner Reap"
  },
  "Tate-shiho-gatame (vertical mount hold)": {
    "url": "https://www.youtube.com/watch?v=_BL7xDMpJCg",
    "title": "How to do Tate-Shiho-Gatame | Vertical Four Quarter Hold"
  },
  "Tsubame-gaeshi (swallow counter to de-ashi-barai)": {
    "url": "https://www.youtube.com/watch?v=FQ3jP6fKlIo",
    "title": "Concept of Tsubame Gaeshi Swallow Counter by Travis Stevens"
  },
  "Harai-goshi (sweeping hip throw)": {
    "url": "https://www.youtube.com/watch?v=rxATDyLJDCQ",
    "title": "How to do Harai-Goshi | Sweeping Hip"
  },
  "O-soto-otoshi (major outer drop)": {
    "url": "https://www.youtube.com/watch?v=LS5a3OGiU8s",
    "title": "O SOTO OTOSHI Major Outer Drop"
  },
  "Juji-gatame (cross armlock) — controlled drilling": {
    "url": "https://www.youtube.com/watch?v=5xGks6C8oFc",
    "title": "Judo Juji Gatame (Armlock) Tutorial"
  },
  "Transition from throw to osaekomi (tachi-waza to ne-waza)": {
    "url": "https://www.youtube.com/watch?v=bG0RmwcXg4k",
    "title": "THE CATCH - Judo transition from Tachi waza to Ne Waza"
  },
  "Ashi-guruma (leg wheel)": {
    "url": "https://www.youtube.com/watch?v=Lrsae9Vpp_c",
    "title": "How to do Ashi Guruma in Judo and BJJ | Leg Wheel"
  },
  "Ude-garami (bent-arm entanglement lock) — drilling": {
    "url": "https://www.youtube.com/watch?v=BXun3qpzpDk",
    "title": "How to do Ude Garami"
  },
  "Juji-gatame defense (grip lock and stack)": {
    "url": "https://www.youtube.com/watch?v=2Hr1jTHcLtI",
    "title": "JUJI GATAME DEFENSE AND ESCAPE BASICS"
  },
  "O-guruma (major wheel)": {
    "url": "https://www.youtube.com/watch?v=20Tiwr0eHEw",
    "title": "How to do O Guruma | Major Wheel"
  },
  "Juji-gatame entries from guard and mount": {
    "url": "https://www.youtube.com/watch?v=QirStMAvSKw",
    "title": "Judo (Juji Gatame, Ude Gatame, Uki Gatame) Simple Arm Bar From Closed Guard and Mount"
  },
  "Kaeshi-waza series (counters to seoi-nage and uchi-mata)": {
    "url": "https://www.youtube.com/watch?v=yD-7G1qrTTE",
    "title": "Judo Ippon Seoi Nage Counter (Tachi-Waza to Ne-Waza) Tutorial"
  },
  "Nage-no-kata — all five sets to grading standard": {
    "url": "https://www.youtube.com/watch?v=F0I-FEPriTo",
    "title": "NAGE NO KATA WITH COMMENTARY"
  },
  "Kaeshi-waza mastery (ura-nage, uchi-mata-sukashi, tsubame-gaeshi)": {
    "url": "https://www.youtube.com/watch?v=622SV-sk2eU",
    "title": "3 Ways to Counter Uchi Mata"
  },
  "Turtle position defense (elbows tight, chin down)": {
    "url": "https://www.youtube.com/watch?v=m-e-y8EQsbI",
    "title": "First Line of Defense in Turtle Position"
  },
  "Turtle turnover to kesa-gatame": {
    "url": "https://www.youtube.com/watch?v=XiIEI0I_tKg",
    "title": "KUZURE KESA GATAME: UTA ABE style, from a turtle turnover"
  },
  "Osaekomi switching (kesa to yoko-shiho)": {
    "url": "https://www.youtube.com/watch?v=8Sur4gbtmbk",
    "title": "Osaekomi waza circuit to help teach transitions between holds"
  },
  "Zenpo-kaiten-ukemi (forward rolling breakfall)": {
    "url": "https://www.youtube.com/watch?v=TGJaKlWxOyc",
    "title": "How to do a Rolling Breakfall (Zenpo Kaiten Ukemi)"
  },
  "O-soto-gari (major outer reap)": {
    "url": "https://www.youtube.com/watch?v=G499sHSEk3o",
    "title": "Osoto Gari Basics by Shintaro Higashi"
  },
  "Ebi (shrimping escape movement)": {
    "url": "https://www.youtube.com/watch?v=STuWSIYrEeg",
    "title": "EBI SHRIMPING 1.Mae, FORWARD, 2.Gyaku, REVERSE 3. Yoko, SIDE"
  },
  "Uchikomi (repetition entry drills)": {
    "url": "https://www.youtube.com/watch?v=en_SlbLHnhQ",
    "title": "UCHIKOMI FOR BEGINNERS"
  },
  "Hiza-guruma (knee wheel)": {
    "url": "https://www.youtube.com/watch?v=9gnGvXBnZI8",
    "title": "HIZA GURUMA BASICS A Classic Judo Throw Explained"
  },
  "Mune-gatame (chest hold)": {
    "url": "https://www.youtube.com/watch?v=RLpcMvQ8GTI",
    "title": "Mune Gatame - Chest Hold for Judo"
  },
  "Tai-otoshi (body drop)": {
    "url": "https://www.youtube.com/watch?v=t0BAmgezQWg",
    "title": "Judo Seminar: Tai Otoshi Body Drop by Neil Adams"
  },
  "Okuri-ashi-barai (double foot sweep)": {
    "url": "https://www.youtube.com/watch?v=Q2SU_CZUNFg",
    "title": "How to do a Classic Okuri-Ashi-Barai"
  },
  "Ushiro-kesa-gatame (reverse scarf hold)": {
    "url": "https://www.youtube.com/watch?v=dfcnBQnz4ag",
    "title": "Ushiro Kesa Gatame - Reverse Scarf Hold"
  },
  "Grip breaks (two-hands-on-one sleeve strip)": {
    "url": "https://www.youtube.com/watch?v=RSWgSqdZaeM",
    "title": "Best 5 Grip Sleeve Grip Breaks For Judo & BJJ"
  },
  "Uchi-mata (inner-thigh throw)": {
    "url": "https://www.youtube.com/watch?v=CyOF4CIUHQ8",
    "title": "Uchimata by Shintaro Higashi"
  },
  "Hadaka-jime (rear naked choke)": {
    "url": "https://www.youtube.com/watch?v=1cCd52pgArA",
    "title": "HADAKA JIME. JUDO Rear Naked Choke by G Spinks 7dan"
  },
  "Choke defense (chin tuck and two-on-one grip strip)": {
    "url": "https://www.youtube.com/watch?v=0ubZ65hvM2M",
    "title": "Rear Naked Choke Defense"
  },
  "Tomoe-nage (circle throw)": {
    "url": "https://www.youtube.com/watch?v=g5COoc6BNVc",
    "title": "Tomoe Nage - JUDO Throwing Techniques and MISTAKES (Tutorial in Motion)"
  },
  "Sode-tsurikomi-goshi (sleeve lifting-pulling hip throw)": {
    "url": "https://www.youtube.com/watch?v=gFP9sD_M9gQ",
    "title": "Perfect Your Sode Tsuri Komi Goshi - Travis Stevens Basic Judo Techniques"
  },
  "Juji-gatame turnover from turtle": {
    "url": "https://www.youtube.com/watch?v=ZqR8fx4vwzc",
    "title": "Juji Gatame attack / Armbar from the turtle position with Marti Malloy"
  },
  "Nage-no-kata — te-waza and koshi-waza sets": {
    "url": "https://www.youtube.com/watch?v=HDOcXn3B1II",
    "title": "Judo || Nage-no-kata: Te-waza (Teil 1)"
  },
  "Soto-makikomi (outer wrap-around throw)": {
    "url": "https://www.youtube.com/watch?v=ddlz9VOlOWA",
    "title": "The Go-To Old Man Judo Technique - Soto Makikomi"
  },
  "Koshi-jime (hip/clock choke from turtle)": {
    "url": "https://www.youtube.com/watch?v=BYGOZXOEmZA",
    "title": "Clock Choke: 3 Grips for a Stronger Strangle (Koshi Jime) BJJ/JUDO"
  },
  "Sankaku-jime defense (posture up, clear the elbow)": {
    "url": "https://www.youtube.com/watch?v=uQ6AVCaf_so",
    "title": "Sankaku Jime: quelques defenses efficaces"
  },
  "Tokui-waza mastery (signature throw with setups both sides)": {
    "url": "https://www.youtube.com/watch?v=7BFMb9RC35w",
    "title": "JUDO Tokui-waza Development I (Tokai University Judo Club)"
  },
  "Zenpo-kaiten-ukemi (forward roll breakfall)": {
    "url": "https://www.youtube.com/watch?v=4d0hLQmoGwk",
    "title": "Mae Mawari Ukemi || Forward Rolling Breakfall"
  },
  "Yoko-shiho-gatame escape (frame and shrimp)": {
    "url": "https://www.youtube.com/watch?v=lOMiYZzvH-s",
    "title": "Escape Any Yoko Shiho Gatame - Travis Stevens Basic Judo Techniques"
  },
  "Grip breaks (two-hands-on-one)": {
    "url": "https://www.youtube.com/watch?v=spX9X81ESQg",
    "title": "Two Handed Grip Break by Katelyn Jarrell"
  },
  "De-ashi-barai counter timing (tsubame-gaeshi intro)": {
    "url": "https://www.youtube.com/watch?v=I-TCNSVwg0g",
    "title": "Tsubame Gaeshi || Swallow Counter"
  },
  "Bodyweight box squat to parallel with controlled tempo": {
    "url": "https://www.youtube.com/watch?v=7LpLZOdz68A",
    "title": "Bodyweight Box Squat | Step-by-Step Tutorial"
  },
  "Bench press with empty bar, controlled touch and press": {
    "url": "https://www.youtube.com/watch?v=4Y2ZdHCOXok",
    "title": "How to PROPERLY Bench Press for Growth (5 Easy Steps)"
  },
  "Barbell deadlift from blocks with light plates": {
    "url": "https://www.youtube.com/watch?v=F6cZbkUOBiI",
    "title": "The Block Pull: Gym Shorts (How To)"
  },
  "Couch stretch for hip flexors": {
    "url": "https://www.youtube.com/watch?v=WKo4APrwfXQ",
    "title": "Couch Stretch Progressions: Beginner To Advanced"
  },
  "Back squat 1x bodyweight": {
    "url": "https://www.youtube.com/watch?v=8PMjqgR8Wa8",
    "title": "How to Barbell Back Squat | A Tutorial for Beginners"
  },
  "Overhead press 0.5x bodyweight": {
    "url": "https://www.youtube.com/watch?v=nNMR9fRGRjQ",
    "title": "How to Press: Proper Overhead Press Form (Step-by-Step Tutorial)"
  },
  "Kettlebell swing 3x15": {
    "url": "https://www.youtube.com/watch?v=bDCeXbMJVNs",
    "title": "How To Kettlebell Swing (in 3 minutes)"
  },
  "Thoracic spine foam rolling before pressing": {
    "url": "https://www.youtube.com/watch?v=NS73eSohTbc",
    "title": "Self Myofascial Release: Foam Rolling - Thoracic Spine"
  },
  "Bench press 1x bodyweight": {
    "url": "https://www.youtube.com/watch?v=gRVjAtPip0Y",
    "title": "How to Perform Bench Press - Tutorial & Proper Form"
  },
  "Deficit deadlift 3x5": {
    "url": "https://www.youtube.com/watch?v=3KQP-CNKr9U",
    "title": "Deficit Deadlift: Gym Shorts (How To)"
  },
  "Weighted pull-up 3x5": {
    "url": "https://www.youtube.com/watch?v=fnJ0F1Xsu7Y",
    "title": "Weighted Pull-Ups (How To)"
  },
  "Pigeon pose 2 minutes per side": {
    "url": "https://www.youtube.com/watch?v=M1gEGLtF1p0",
    "title": "How To Do Pigeon Pose | The Right Way | Well+Good"
  },
  "Paused competition bench press, motionless on the chest": {
    "url": "https://www.youtube.com/watch?v=K4BIkKGKy9k",
    "title": "Paused Bench Press: Gym Shorts (How To)"
  },
  "Power clean 1.25x bodyweight": {
    "url": "https://www.youtube.com/watch?v=lI35socHJ4k",
    "title": "How To Power Clean: Step by Step Beginner's Tutorial"
  },
  "Belt squat or leg press volume work for joint-friendly hypertrophy": {
    "url": "https://www.youtube.com/watch?v=h_ok0J0y5j4",
    "title": "Belt Squat Breakdown: How, Why & When to Use It"
  },
  "Competition squat executed on squat and rack commands to IPF depth": {
    "url": "https://www.youtube.com/watch?v=MGD0UmsZnek",
    "title": "Squats In 60 Seconds - IPF Rules Simplified"
  },
  "Overhead press 1.25x bodyweight": {
    "url": "https://www.youtube.com/watch?v=zoN5EH50Dro",
    "title": "Perfect Overhead Press Form (DO THIS!)"
  },
  "Snatch at bodyweight for athletic power maintenance": {
    "url": "https://www.youtube.com/watch?v=3O7JjPr0_ok",
    "title": "How to Snatch (Step-by-Step Olympic Weightlifting Tutorial)"
  },
  "Landmine press for shoulder-friendly overhead work": {
    "url": "https://www.youtube.com/watch?v=7Sv6hfQNFAA",
    "title": "How to Perform the Landmine Press"
  },
  "Safety bar squat as a knee- and shoulder-friendly variation": {
    "url": "https://www.youtube.com/watch?v=CMn1Z9pzZAk",
    "title": "Safety Squat Bar Squat (SSB Squat): How To (Gym Shorts)"
  },
  "Chin-up 5 strict reps": {
    "url": "https://www.youtube.com/watch?v=e1YSApl-QcM",
    "title": "PERFECT CHIN-UPS | The Only Chin-up Tutorial You'll Ever Need"
  },
  "Paused bench press to competition standard": {
    "url": "https://www.youtube.com/watch?v=IChCJIGfmQI",
    "title": "Paused Bench Press | Proper Form Tutorial for Strength & Control"
  },
  "Daily hip and shoulder maintenance routine": {
    "url": "https://www.youtube.com/watch?v=gDG9QoYpqtU",
    "title": "Unlock Tight Hips & Shoulders in 8 Minutes - Beginner Follow Along"
  },
  "Goblet squat 3x10 with dumbbell or kettlebell": {
    "url": "https://www.youtube.com/watch?v=BR4tlEE_A98",
    "title": "Goblet Squat | Proper Form Tutorial"
  },
  "Dumbbell overhead press 3x8": {
    "url": "https://www.youtube.com/watch?v=prP9rHHp0tg",
    "title": "Dumbbell Overhead Press | Exercise Technique Library"
  },
  "Overhead squat with PVC pipe": {
    "url": "https://www.youtube.com/watch?v=mkG9HzfT9P4",
    "title": "Teaching the Overhead Squat (PVC)"
  },
  "Ankle dorsiflexion wall drill": {
    "url": "https://www.youtube.com/watch?v=Y1IZXkdPPdw",
    "title": "Knee to Wall Ankle Mobility Drill"
  },
  "Front squat technique with light load": {
    "url": "https://www.youtube.com/watch?v=v-mQm_droHg",
    "title": "HOW TO FRONT SQUAT: Build Bigger Quads & A Stronger Squat"
  },
  "Deadlift 1x5 top set, resetting each rep on the floor": {
    "url": "https://www.youtube.com/watch?v=GxsLrTzyGUU",
    "title": "How to Do A Conventional Deadlift Correctly"
  },
  "Barbell row 3x8": {
    "url": "https://www.youtube.com/watch?v=A1tmBJKKfVs",
    "title": "How To Barbell Row: Programming & Proper Form"
  },
  "90/90 hip stretch": {
    "url": "https://www.youtube.com/watch?v=t4Zz6-aG8Iw",
    "title": "90 90 Hip Stretch (Best Hip Mobility Exercise!)"
  },
  "Overhead press 0.75x bodyweight": {
    "url": "https://www.youtube.com/watch?v=a81SaIpjGlA",
    "title": "Overhead Press (Barbell) - Proper Form & Technique"
  },
  "Barbell hip thrust 3x8": {
    "url": "https://www.youtube.com/watch?v=S_uZP4UH6J0",
    "title": "How To Do A Barbell Hip Thrust The RIGHT Way!"
  },
  "Dips 3x10": {
    "url": "https://www.youtube.com/watch?v=K5JxupmoLW4",
    "title": "PERFECT DIPS | The Only Dip Tutorial You'll Ever Need"
  },
  "Competition squat with walkout, depth below parallel, and rack command": {
    "url": "https://www.youtube.com/watch?v=MGD0UmsZnek",
    "title": "Squats In 60 Seconds - IPF Rules Simplified"
  },
  "Overhead press 1x bodyweight": {
    "url": "https://www.youtube.com/watch?v=iJ0py9JQIZY",
    "title": "How To Barbell Press | The Starting Strength Method"
  },
  "Power snatch with moderate load": {
    "url": "https://www.youtube.com/watch?v=ydHHsju1-Nc",
    "title": "Power Snatch | Olympic Weightlifting Exercise Library"
  },
  "Banded shoulder dislocates and pass-throughs": {
    "url": "https://www.youtube.com/watch?v=riVxa9By-pM",
    "title": "How To Do Band Dislocates / Pass-Throughs (Shoulder Mobility)"
  },
  "Heavy single at RPE 9 with handoff and spotter team": {
    "url": "https://www.youtube.com/watch?v=LXsd_rKFz9s",
    "title": "How to Hand Off a Powerlifting Bench Press"
  },
  "Deadlift 3x bodyweight": {
    "url": "https://www.youtube.com/watch?v=Y1IGeJEXpF4",
    "title": "How To Deadlift"
  },
  "Box squat to parallel with controlled tempo": {
    "url": "https://www.youtube.com/watch?v=j4Tu3rVThFM",
    "title": "How to Box Squat CORRECTLY (SAVE YOUR KNEES!)"
  },
  "Trap bar deadlift 3x8": {
    "url": "https://www.youtube.com/watch?v=Vu4oXIRzx7w",
    "title": "Trap Bar Deadlift: Gym Shorts (How To)"
  },
  "Overhead press 0.6x bodyweight if shoulders allow, otherwise landmine press": {
    "url": "https://www.youtube.com/watch?v=3gYz0bLG-wY",
    "title": "Proper Technique for The Landmine Press"
  },
  "Back squat 1.75x bodyweight": {
    "url": "https://www.youtube.com/watch?v=UFs6E3Ti1jg",
    "title": "How To Squat - Any Style"
  },
  "Block pulls to manage weekly pulling volume": {
    "url": "https://www.youtube.com/watch?v=jfSxbT-65ow",
    "title": "The Block/Rack Pull: Untamed Special"
  },
  "Barbell back squat to depth with empty bar": {
    "url": "https://www.youtube.com/watch?v=SW_C1A-rejs",
    "title": "How To: Deep Barbell Back Squat"
  },
  "Hip hinge drill with dowel rod along the spine": {
    "url": "https://www.youtube.com/watch?v=2TDgzIpR96Y",
    "title": "Hip Hinge with Dowel | Spine Alignment & Hinge Mechanics"
  },
  "Box jump with soft landing mechanics": {
    "url": "https://www.youtube.com/watch?v=NUiFHMvUmKk",
    "title": "Box Jumps: Soft Landing"
  },
  "World's greatest stretch flow": {
    "url": "https://www.youtube.com/watch?v=-CiWQ2IvY34",
    "title": "The World's Greatest Stretch (Mobility Exercise)"
  },
  "Bench press 3x5 with spotter or safety arms": {
    "url": "https://www.youtube.com/watch?v=gRVjAtPip0Y",
    "title": "How to Perform Bench Press - Tutorial & Proper Form"
  },
  "Romanian deadlift 3x8": {
    "url": "https://www.youtube.com/watch?v=5bJEigM5iVg",
    "title": "FIX Your RDL Form! (Ultimate Romanian Deadlift Tutorial)"
  },
  "Chin-up 3 strict reps": {
    "url": "https://www.youtube.com/watch?v=e1YSApl-QcM",
    "title": "PERFECT CHIN-UPS | The Only Chin-up Tutorial You'll Ever Need"
  },
  "Pause squat 3x3 with 2-second hold in the hole": {
    "url": "https://www.youtube.com/watch?v=nknf16JJTZo",
    "title": "The Paused Squat: Gym Shorts (How To)"
  },
  "Close-grip bench press 3x8": {
    "url": "https://www.youtube.com/watch?v=cXbSJHtjrQQ",
    "title": "CLOSE GRIP PRESS | Triceps | How-To Exercise Tutorial"
  },
  "Power clean 1x bodyweight": {
    "url": "https://www.youtube.com/watch?v=YG8M_-11C2A",
    "title": "Power Clean | Olympic Weightlifting Exercise Library"
  },
  "Farmer's carry, heavy for 40 meters": {
    "url": "https://www.youtube.com/watch?v=lLAw6fUccKA",
    "title": "Farmer's Carry Tutorial - Proper Form and Technique"
  },
  "Tempo squat with 3-second eccentric": {
    "url": "https://www.youtube.com/watch?v=mmb618X9Ieg",
    "title": "The Tempo Squat: Gym Shorts (How To)"
  },
  "Block pull overload above knee": {
    "url": "https://www.youtube.com/watch?v=F6cZbkUOBiI",
    "title": "The Block Pull: Gym Shorts (How To)"
  },
  "Clean and jerk technique refinement": {
    "url": "https://www.youtube.com/watch?v=bNCXgyosXlc",
    "title": "Clean & Jerk | Olympic Weightlifting Exercise Library"
  },
  "Hip airplane balance drill": {
    "url": "https://www.youtube.com/watch?v=4XCbYaQGF2o",
    "title": "Hip Airplanes"
  },
  "Bench press 1.75x bodyweight": {
    "url": "https://www.youtube.com/watch?v=vcBig73ojpE",
    "title": "How To Get A Huge Bench Press with PERFECT Technique"
  },
  "Competition deadlift with clean lockout and no hitching": {
    "url": "https://www.youtube.com/watch?v=QpSJhj1SPbY",
    "title": "How to Pass All Your Powerlifting Lifts (Squat, Bench, Deadlift Rules Explained)"
  },
  "Goblet squat 3x10": {
    "url": "https://www.youtube.com/watch?v=BR4tlEE_A98",
    "title": "Goblet Squat | Proper Form Tutorial"
  },
  "Romanian deadlift with dumbbells 3x10": {
    "url": "https://www.youtube.com/watch?v=aa57T45iFSE",
    "title": "How to do a Dumbbell Romanian Deadlift | NASM"
  },
  "Trap bar or conventional deadlift 1.5x bodyweight": {
    "url": "https://www.youtube.com/watch?v=Vu4oXIRzx7w",
    "title": "Trap Bar Deadlift: Gym Shorts (How To)"
  },
  "Competition-depth squat practice with squat and rack commands": {
    "url": "https://www.youtube.com/watch?v=MGD0UmsZnek",
    "title": "Squats In 60 Seconds - IPF Rules Simplified"
  },
  "Power clean 0.75-1x bodyweight": {
    "url": "https://www.youtube.com/watch?v=lI35socHJ4k",
    "title": "How To Power Clean: Step by Step Beginner's Tutorial"
  },
  "Push-up 3x10 with full range of motion": {
    "url": "https://www.youtube.com/watch?v=WDIpL0pjun0",
    "title": "How to do a Push-Up | Proper Form & Technique | NASM"
  },
  "Kettlebell deadlift 3x8 with neutral back": {
    "url": "https://www.youtube.com/watch?v=MJPGkNqAXzg",
    "title": "How to Do a Kettlebell Deadlift | Proper Form & Technique | NASM"
  },
  "Plank 60 seconds": {
    "url": "https://www.youtube.com/watch?v=mwlp75MS6Rg",
    "title": "How to do a Plank | Proper Form & Technique | NASM"
  },
  "Back squat 3x5 linear progression, adding 2.5 kg per session": {
    "url": "https://www.youtube.com/watch?v=my0tLDaWyDU",
    "title": "How To Squat Correctly (NO BACK PAIN)"
  },
  "Bench press 0.75x bodyweight": {
    "url": "https://www.youtube.com/watch?v=gRVjAtPip0Y",
    "title": "How to Perform Bench Press - Tutorial & Proper Form"
  },
  "Power clean technique with light load": {
    "url": "https://www.youtube.com/watch?v=lI35socHJ4k",
    "title": "How To Power Clean: Step by Step Beginner's Tutorial"
  },
  "Face pulls for shoulder health": {
    "url": "https://www.youtube.com/watch?v=CU4Xc2qlLC0",
    "title": "How To PROPERLY Do Face Pulls For Prehab & Shoulder Health"
  },
  "Front squat 1x bodyweight": {
    "url": "https://www.youtube.com/watch?v=npVgCT7NznU",
    "title": "Front Squat 101: Beginner's Guide"
  },
  "Deadlift 1.75-2x bodyweight": {
    "url": "https://www.youtube.com/watch?v=XxWcirHIwVo",
    "title": "How to PROPERLY Deadlift for Growth (5 Easy Steps)"
  },
  "Push press 3x5": {
    "url": "https://www.youtube.com/watch?v=a8HQo8z20Uo",
    "title": "How to PUSH PRESS: exercise demo with proper technique"
  },
  "Jefferson curl with light load": {
    "url": "https://www.youtube.com/watch?v=_C9CdHrXmww",
    "title": "JEFFERSON CURL GUIDE | How To, Benefits, and Mistakes!"
  },
  "Bench press 1.5x bodyweight": {
    "url": "https://www.youtube.com/watch?v=hWbUlkb5Ms4",
    "title": "How To Bench Press With Perfect Technique (5 Steps)"
  },
  "Snatch-grip deadlift 3x5": {
    "url": "https://www.youtube.com/watch?v=GP6VNoIZyF4",
    "title": "Increase Your Deadlift : How To Snatch Grip Deadlift"
  },
  "Weighted pull-up with 0.5x bodyweight added": {
    "url": "https://www.youtube.com/watch?v=fnJ0F1Xsu7Y",
    "title": "Weighted Pull-Ups (How To)"
  },
  "Back squat 2.5x bodyweight": {
    "url": "https://www.youtube.com/watch?v=Uv_DKDl7EjA",
    "title": "The Official Squat Form Checklist"
  },
  "Competition bench with start, press, and rack commands": {
    "url": "https://www.youtube.com/watch?v=KuQHIBeTI6I",
    "title": "Powerlifting Competition Commands For Bench Press"
  },
  "Power clean 1.5x bodyweight": {
    "url": "https://www.youtube.com/watch?v=ORGBFvyUwGs",
    "title": "How To Power Clean For Beginners | Tutorial"
  },
  "Dumbbell bench press 3x10 with neutral grip": {
    "url": "https://www.youtube.com/watch?v=fZuQpjhaR_M",
    "title": "How To Do A Neutral Grip Dumbbell Press"
  },
  "Medicine ball throw and low box jump for power maintenance": {
    "url": "https://www.youtube.com/watch?v=fGWz51bKPMM",
    "title": "Juggernaut Training Systems - Medicine Ball Throw Tutorial"
  },
  "Hang power clean with light load": {
    "url": "https://www.youtube.com/watch?v=22XonEeuRjk",
    "title": "Movement Demo - Hang Power Clean"
  },
  "Bench press 1.25x bodyweight": {
    "url": "https://www.youtube.com/watch?v=4Y2ZdHCOXok",
    "title": "How to PROPERLY Bench Press for Growth (5 Easy Steps)"
  },
  "Weighted carries and sled drags for low-impact conditioning": {
    "url": "https://www.youtube.com/watch?v=AUbTajVA_Cg",
    "title": "10 Sled Dragging Variations for Strength, Health, and Performance"
  }
};
