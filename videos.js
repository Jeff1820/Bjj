/* Curated YouTube demonstration links, keyed by exact checklist item text.
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
  }
};
