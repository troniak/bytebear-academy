# Unit 5: Variables - Dinner Decider

## Workshop Overview

**Team size:** Four students  
**Slide source:** Use the named slides/steps from the official LEGO facilitation-note print/PDF pages embedded in the agendas below.

The core combines B121-B124. Hour 1 counts creatures with one and multiple variables. Hour 2 debugs and creates pet-state variables. The optional extension adapts both parts of B125 Dinner Decider into a random-choice and data-analysis challenge.

## Facilitation Notes Reference

| Lesson | Context | Learning Outcome Or Skill | Student Prompt |
| --- | --- | --- | --- |
| [B121 Space Scanner](https://teach.legoeducation.com/en-gb/computer-science/lesson/space-scanner/facilitation-notes) | Count creatures detected by a scanner. | Store and modify data in one variable. | What value changes when a creature is detected? |
| [B122 Counting Creatures](https://teach.legoeducation.com/en-gb/computer-science/lesson/counting-creatures/facilitation-notes) | Track different creature types visually. | Use multiple variables and represent data. | When is a graph more useful than a number? |
| [B123 Feed and Play](https://teach.legoeducation.com/en-gb/computer-science/lesson/feed-and-play/facilitation-notes) | Debug a pet-energy update rule. | Modify and debug a program with variables. | What did you expect, and what changed? |
| [B124 Happy Pet](https://teach.legoeducation.com/en-gb/computer-science/lesson/happy-pet/facilitation-notes) | Track a pet's happiness. | Create a variable to store and modify data. | What input changes your variable? |
| [B125 Dinner Decider](https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes) | Build a creature that randomly chooses dinner. | Use random variables, collect data and improve a design. | Which food appears most and least often? |

## Team Roles

Rotate creature designer, data programmer, trial runner and data recorder at `1:00`, after lunch and at extension `1:00`.

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
<td>B121<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/space-scanner/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/space-scanner/facilitation-notes#:~:text=Introduction">Introduction</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/space-scanner/facilitation-notes#:~:text=Context">Context</a></td>
<td>Assign roles. Use a human counter to introduce stored, changing values.</td>
<td>Variable explanation.</td>
<td rowspan="2"><strong>Introduce:</strong> Start by explaining that a variable is a named place for data that can change while the program runs. Use the scanner as the reason to count: every detected creature should update a value. Ask teams to identify the variable before building.<br><strong>Skills:</strong> Variable, value, data, count, update.<br><strong>Ask:</strong> What value changes when a creature is detected?</td>
</tr>
<tr>
<td>0:08-0:26</td>
<td>B121<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/space-scanner/facilitation-notes#:~:text=Build%20Together">Build Together</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/space-scanner/facilitation-notes#:~:text=Predict">Predict</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/space-scanner/facilitation-notes#:~:text=Try%20It">Try It</a></td>
<td>Build and program a space scanner counter.</td>
<td>Single-variable scanner.</td>
</tr>
<tr>
<td>0:26-0:38</td>
<td>B122<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/counting-creatures/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/counting-creatures/facilitation-notes#:~:text=Context">Context</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/counting-creatures/facilitation-notes#:~:text=Try%20It">Try It</a></td>
<td>Add a second creature category and variable.</td>
<td>Two tracked values.</td>
<td rowspan="2"><strong>Introduce:</strong> Extend the count from one creature type to multiple categories. Explain that data becomes more useful when it is organized and represented clearly. Students should decide when a visual representation is easier to read than a number.<br><strong>Skills:</strong> Multiple variables, category data, graph, data representation.<br><strong>Ask:</strong> When is a graph more useful than a number?</td>
</tr>
<tr>
<td>0:38-0:50</td>
<td>B122<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/counting-creatures/facilitation-notes#:~:text=Check%20In">Check In</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/counting-creatures/facilitation-notes#:~:text=Elaborate">Elaborate</a></td>
<td>Compare exact totals and a visual display.</td>
<td>Data-display explanation.</td>
</tr>
<tr>
<td>0:50-1:00</td>
<td>B121-B122<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/counting-creatures/facilitation-notes#:~:text=Show%20What%20You%20Know">Show What You Know</a></td>
<td>Test, trace and explain the data.</td>
<td>Trace record.</td>
<td><strong>Introduce:</strong> Close the first hour by having teams test, trace and explain their data. Prompt them to name each variable and say when a display reads more clearly than a raw number.<br><strong>Skills:</strong> Tracing, data representation, testing, communication.<br><strong>Ask:</strong> What values did you store, and when was a display clearer than a number?</td>
</tr>
<tr>
<td>1:00-1:08</td>
<td>B123<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/feed-and-play/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/feed-and-play/facilitation-notes#:~:text=Introduction">Introduction</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/feed-and-play/facilitation-notes#:~:text=Predict">Predict</a></td>
<td>Rotate roles. Predict how feeding should affect energy.</td>
<td>Expected state change.</td>
<td rowspan="2"><strong>Introduce:</strong> Introduce the pet-energy problem as a variable debugging task. Students predict how the pet's energy should change, then compare the expected value with the actual value after each input. Make the data change visible in their notes.<br><strong>Skills:</strong> Variable update, expected value, actual value, debugging.<br><strong>Ask:</strong> What did you expect, and what changed?</td>
</tr>
<tr>
<td>1:08-1:26</td>
<td>B123<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/feed-and-play/facilitation-notes#:~:text=Try%20It">Try It</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/feed-and-play/facilitation-notes#:~:text=Check%20In">Check In</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/feed-and-play/facilitation-notes#:~:text=Elaborate">Elaborate</a></td>
<td>Find and fix the variable-update bug.</td>
<td>Debugging record.</td>
</tr>
<tr>
<td>1:26-1:42</td>
<td>B124<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/happy-pet/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/happy-pet/facilitation-notes#:~:text=Context">Context</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/happy-pet/facilitation-notes#:~:text=Try%20It">Try It</a></td>
<td>Create and modify a happiness variable.</td>
<td>Named state variable.</td>
<td rowspan="2"><strong>Introduce:</strong> Shift from energy to happiness as another changing value. Explain that inputs can increase, decrease or reset a variable depending on the program's rule. Teams should be ready to explain the rule in plain language.<br><strong>Skills:</strong> Happiness variable, input, update rule, threshold, state.<br><strong>Ask:</strong> What input changes your variable, and how does it change?</td>
</tr>
<tr>
<td>1:42-1:52</td>
<td>B124<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/happy-pet/facilitation-notes#:~:text=Check%20In">Check In</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/happy-pet/facilitation-notes#:~:text=Elaborate">Elaborate</a></td>
<td>Add or discuss a threshold response and second value.</td>
<td>State-response plan.</td>
</tr>
<tr>
<td>1:52-2:00</td>
<td>B121-B124<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/happy-pet/facilitation-notes#:~:text=Show%20What%20You%20Know">Show What You Know</a></td>
<td>Share stored values, displays and bug fix.</td>
<td>Core demonstration.</td>
<td><strong>Introduce:</strong> Close the core by having each team share their stored values, displays and the bug they fixed. Prompt them to name a variable, an input that changes it and the update rule.<br><strong>Skills:</strong> Synthesis, variables, data display, debugging, communication.<br><strong>Ask:</strong> Which variable did you track, what changes it, and what bug did you fix?</td>
</tr>
</tbody>
</table>

## Optional Extension: B125 Dinner Decider

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
<td>Plan<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Introduction">Introduction</a></td>
<td>Rotate roles. Discuss dinner decisions and random values.</td>
<td>Design brief.</td>
<td rowspan="4"><strong>Introduce:</strong> Reopen the extension as a data investigation. Teams build a creature that chooses dinner, map random values to foods and run a first set of trials.<br><strong>Skills:</strong> Random variable, trial, frequency, data table.<br><strong>Ask:</strong> Which food appears most and least often, and what evidence supports that claim?</td>
</tr>
<tr>
<td>0:10-0:22</td>
<td>Plan<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Context">Context</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Plan">Plan</a></td>
<td>Choose two to four foods and map random values to outcomes.</td>
<td>Mapping and trial table.</td>
</tr>
<tr>
<td>0:22-0:48</td>
<td>Prototype<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Prototype">Prototype</a></td>
<td>Build and program a creature that chooses dinner.</td>
<td>Working random-variable creature.</td>
</tr>
<tr>
<td>0:48-1:00</td>
<td>Prototype<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Share">Share</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Check%20In">Check In</a></td>
<td>Run at least five trials and record outcomes.</td>
<td>Frequency data.</td>
</tr>
<tr>
<td>1:00-1:08</td>
<td>Iterate<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Feedback">Feedback</a></td>
<td>Rotate roles and exchange feedback.</td>
<td>One peer suggestion.</td>
<td rowspan="5"><strong>Introduce:</strong> Open the second half by using data to drive improvement. Teams improve their result display, run more trials and compare frequencies, then prepare to defend a claim about the most and least common foods.<br><strong>Skills:</strong> Iteration, repeated trials, data display, evidence, communication.<br><strong>Ask:</strong> After more trials, which food is most and least common, and how does the data show it?</td>
</tr>
<tr>
<td>1:08-1:30</td>
<td>Iterate<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Iterate">Iterate</a></td>
<td>Improve result clarity, model or data display.</td>
<td>Revised Dinner Decider.</td>
</tr>
<tr>
<td>1:30-1:42</td>
<td>Test<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Check%20In">Check In</a></td>
<td>Run at least five more trials and compare results.</td>
<td>Updated data display.</td>
</tr>
<tr>
<td>1:42-1:52</td>
<td>Prepare<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Share%202">Share 2</a></td>
<td>Identify most and least frequent foods and final revision.</td>
<td>Data explanation.</td>
</tr>
<tr>
<td>1:52-2:00</td>
<td>Share<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/dinner-decider/facilitation-notes#:~:text=Reflect">Reflect</a></td>
<td>Demonstrate and explain the variable, outcomes and iteration.</td>
<td>Capstone showcase.</td>
</tr>
</tbody>
</table>

## Adapted B125 Rubric

| Criterion | Workshop Target | Stretch |
| --- | --- | --- |
| Random variables | Set a variable to a random number. | Use the value to control dinner outcomes. |
| Data | Track frequency and identify most and least common foods. | Display and explain every frequency. |
| Prototype | Build a creature using a random value. | Use the value for clear dinner choices. |
| Iteration | Make one revision. | Explain why the revision improves the project. |
