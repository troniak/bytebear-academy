# Unit 4: Conditionals - Ride Rush

## Workshop Overview

**Team size:** Four students  
**Slide source:** Use the named slides/steps from the official LEGO facilitation-note print/PDF pages embedded in the agendas below.

The core combines B116-B119. Hour 1 builds colour-password logic with `wait until` and `if/then`. Hour 2 applies `if/then` and `if/then/else` to a rescue-ship game. The optional extension adapts both parts of B120 Ride Rush into a user-centred amusement-park design challenge.

## Facilitation Notes Reference

| Lesson | Context | Learning Outcome Or Skill | Student Prompt |
| --- | --- | --- | --- |
| [B116 Secret Solver](https://teach.legoeducation.com/en-gb/computer-science/lesson/secret-solver/facilitation-notes) | Crack and strengthen a colour password. | Use conditionals and connect them to security. | What must become true before the program continues? |
| [B117 Password Problem](https://teach.legoeducation.com/en-gb/computer-science/lesson/password-problem/facilitation-notes) | Build a memorable but difficult-to-guess password. | Develop an `if/then` program. | How can a secure password remain memorable? |
| [B118 Sailing to Safety](https://teach.legoeducation.com/en-gb/computer-science/lesson/sailing-to-safety/facilitation-notes) | Detect stranded sailors with a rescue ship. | Combine `if/then` with keyboard input. | When does the program check for the sailor? |
| [B119 All Hands on Deck](https://teach.legoeducation.com/en-gb/computer-science/lesson/all-hands-on-deck/facilitation-notes) | Turn rescue into a game with consequences. | Modify a program with `if/then/else`. | What happens after a missed pickup? |
| [B120 Ride Rush](https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes) | Design an amusement-park ride for a chosen user. | Decompose a challenge, use conditionals and iterate. | Who are you designing for, and what do they need? |

## Team Roles

Rotate user designer, builder, programmer and safety tester at `1:00`, after lunch and at extension `1:00`.

## 2-Hour Core Agenda

<table>
<thead>
<tr>
<th>Time</th>
<th>Source &amp; slides</th>
<th>Activity</th>
<th>Student Output</th>
<th>Introduction · Skills · Question</th>
</tr>
</thead>
<tbody>
<tr>
<td>0:00-0:08</td>
<td>B116<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/secret-solver/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/secret-solver/facilitation-notes#:~:text=Introduction">Introduction</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/secret-solver/facilitation-notes#:~:text=Context">Context</a></td>
<td>Assign roles. Discuss passwords and conditions that become true or false.</td>
<td>Real-world conditional examples.</td>
<td rowspan="2"><strong>Introduce:</strong> Open with the idea that a program can make a decision only after checking whether something is true. Use the color password as a concrete condition students can test. Have teams say the condition aloud before they run the model.<br><strong>Skills:</strong> Condition, true/false test, password, security.<br><strong>Ask:</strong> What must become true before the program continues?</td>
</tr>
<tr>
<td>0:08-0:25</td>
<td>B116<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/secret-solver/facilitation-notes#:~:text=Build%20Together">Build Together</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/secret-solver/facilitation-notes#:~:text=Predict">Predict</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/secret-solver/facilitation-notes#:~:text=Try%20It">Try It</a></td>
<td>Build and test a colour-based secret solver.</td>
<td>Working conditional model.</td>
</tr>
<tr>
<td>0:25-0:38</td>
<td>B117<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/password-problem/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/password-problem/facilitation-notes#:~:text=Introduction">Introduction</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/password-problem/facilitation-notes#:~:text=Predict">Predict</a></td>
<td>Predict when an <code>if/then</code> check runs.</td>
<td>Code prediction.</td>
<td rowspan="2"><strong>Introduce:</strong> Extend the password context into a design tradeoff: secure passwords still need to be usable. Students create an <code>if/then</code> rule, predict what it will accept and revise the rule when tests expose a weakness.<br><strong>Skills:</strong> <code>if/then</code>, condition design, prediction, security tradeoff.<br><strong>Ask:</strong> How can a secure password remain memorable?</td>
</tr>
<tr>
<td>0:38-0:52</td>
<td>B117<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/password-problem/facilitation-notes#:~:text=Try%20It">Try It</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/password-problem/facilitation-notes#:~:text=Check%20In">Check In</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/password-problem/facilitation-notes#:~:text=Elaborate">Elaborate</a></td>
<td>Program and test a colour password.</td>
<td>Password program.</td>
</tr>
<tr>
<td>0:52-1:00</td>
<td>B116-B117<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/password-problem/facilitation-notes#:~:text=Show%20What%20You%20Know">Show What You Know</a></td>
<td>Explain why the password works and how to strengthen it.</td>
<td>Security reflection.</td>
<td><strong>Introduce:</strong> Close the first hour by having teams explain why their password works and one way to strengthen it. Prompt them to state the condition and the tradeoff between security and memorability.<br><strong>Skills:</strong> Conditions, security tradeoff, reflection, communication.<br><strong>Ask:</strong> Why does your password work, and how would you make it stronger?</td>
</tr>
<tr>
<td>1:00-1:08</td>
<td>B118<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/sailing-to-safety/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/sailing-to-safety/facilitation-notes#:~:text=Introduction">Introduction</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/sailing-to-safety/facilitation-notes#:~:text=Context">Context</a></td>
<td>Rotate roles. Plan rescue-ship conditions and keyboard events.</td>
<td>Rescue logic plan.</td>
<td rowspan="2"><strong>Introduce:</strong> Shift to a rescue mission where the program must check for a stranded sailor at the right moment. Connect keyboard input and model behavior to the conditional rule. Ask students to identify the trigger and the condition separately.<br><strong>Skills:</strong> Keyboard input, condition check, rescue logic, sensor or state.<br><strong>Ask:</strong> When does the program check for the sailor?</td>
</tr>
<tr>
<td>1:08-1:28</td>
<td>B118<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/sailing-to-safety/facilitation-notes#:~:text=Predict">Predict</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/sailing-to-safety/facilitation-notes#:~:text=Try%20It">Try It</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/sailing-to-safety/facilitation-notes#:~:text=Check%20In">Check In</a></td>
<td>Build and program sailor detection.</td>
<td>Working <code>if/then</code> rescue response.</td>
</tr>
<tr>
<td>1:28-1:42</td>
<td>B119<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/all-hands-on-deck/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/all-hands-on-deck/facilitation-notes#:~:text=Context">Context</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/all-hands-on-deck/facilitation-notes#:~:text=Try%20It">Try It</a></td>
<td>Add success and failure behavior with <code>if/then/else</code>.</td>
<td>Game consequence logic.</td>
<td rowspan="2"><strong>Introduce:</strong> Introduce the game version as a branching program. Explain that <code>if/then/else</code> gives the program two possible paths: success and consequence. Students should explain both paths during their demo.<br><strong>Skills:</strong> <code>if/then/else</code>, branching, game consequence, testing.<br><strong>Ask:</strong> What happens after a missed pickup?</td>
</tr>
<tr>
<td>1:42-1:52</td>
<td>B119<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/all-hands-on-deck/facilitation-notes#:~:text=Check%20In">Check In</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/all-hands-on-deck/facilitation-notes#:~:text=Elaborate">Elaborate</a></td>
<td>Run two test cases and debug.</td>
<td>Two-case test record.</td>
</tr>
<tr>
<td>1:52-2:00</td>
<td>B116-B119<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/all-hands-on-deck/facilitation-notes#:~:text=Show%20What%20You%20Know">Show What You Know</a></td>
<td>Share condition, outcome and one revision.</td>
<td>Core demonstration.</td>
<td><strong>Introduce:</strong> Close the core by having each team share one condition, its outcome and one revision they made. Prompt them to trace which path the program takes and why.<br><strong>Skills:</strong> Synthesis, conditionals, branching, testing, communication.<br><strong>Ask:</strong> What condition did you build, what outcome does it produce, and what did you revise?</td>
</tr>
</tbody>
</table>

## Optional Extension: B120 Ride Rush

<table>
<thead>
<tr>
<th>Time</th>
<th>Phase &amp; slides</th>
<th>Activity</th>
<th>Student Output</th>
<th>Introduction · Skills · Question</th>
</tr>
</thead>
<tbody>
<tr>
<td>0:00-0:10</td>
<td>Plan<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Introduction">Introduction</a></td>
<td>Rotate roles. Choose a ride user and gather preferences.</td>
<td>User profile.</td>
<td rowspan="4"><strong>Introduce:</strong> Reopen after lunch with a user-centered amusement-ride brief. Teams choose a rider, decompose the ride behavior and build a first prototype that uses one conditional.<br><strong>Skills:</strong> User need, decomposition, conditional behavior.<br><strong>Ask:</strong> Who are you designing for, and what do they need from the ride?</td>
</tr>
<tr>
<td>0:10-0:22</td>
<td>Plan<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Context">Context</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Plan">Plan</a></td>
<td>Decompose the ride into build, input, output and condition tasks.</td>
<td>Task plan.</td>
</tr>
<tr>
<td>0:22-0:48</td>
<td>Prototype<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Prototype">Prototype</a></td>
<td>Build and program a minimum ride with one conditional.</td>
<td>Working ride prototype.</td>
</tr>
<tr>
<td>0:48-1:00</td>
<td>Prototype<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Share">Share</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Check%20In">Check In</a></td>
<td>Test with the chosen user need and record feedback.</td>
<td>First feedback note.</td>
</tr>
<tr>
<td>1:00-1:08</td>
<td>Iterate<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Feedback">Feedback</a></td>
<td>Rotate roles and exchange peer feedback.</td>
<td>One peer suggestion.</td>
<td rowspan="5"><strong>Introduce:</strong> Open the second half by refining the ride from user feedback. Teams improve the motion, signal or conditional, run normal and unusual input cases and prepare to explain their decomposition and logic.<br><strong>Skills:</strong> Iteration, safety testing, conditional logic, communication.<br><strong>Ask:</strong> Which change made the ride safer or more meaningful for your user, and why?</td>
</tr>
<tr>
<td>1:08-1:30</td>
<td>Iterate<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Iterate">Iterate</a></td>
<td>Improve ride motion, signal or conditional behavior.</td>
<td>Revised ride.</td>
</tr>
<tr>
<td>1:30-1:42</td>
<td>Test<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Check%20In">Check In</a></td>
<td>Run normal and unusual input cases.</td>
<td>Safety test record.</td>
</tr>
<tr>
<td>1:42-1:52</td>
<td>Prepare<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Share%202">Share 2</a></td>
<td>Finalise the model and explanation.</td>
<td>Showcase-ready ride.</td>
</tr>
<tr>
<td>1:52-2:00</td>
<td>Share<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/ride-rush/facilitation-notes#:~:text=Reflect">Reflect</a></td>
<td>Demonstrate and explain decomposition and logic.</td>
<td>Capstone showcase.</td>
</tr>
</tbody>
</table>

## Adapted B120 Rubric

| Criterion | Workshop Target | Stretch |
| --- | --- | --- |
| Decomposition | Explain how the challenge was split into tasks. | Explain why those tasks were chosen. |
| User needs | Include user preferences in the plan. | Revise the plan after feedback. |
| Conditionals | Create a conditional. | Explain the programmed logic clearly. |
| Prototype | Build an amusement-park ride. | Personalise and iterate on it. |
