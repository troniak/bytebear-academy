# Unit 2: Events - Putt and Play

## Workshop Overview

**Team size:** Four students  
**Slide source:** Use the named slides/steps from the official LEGO facilitation-note print/PDF pages embedded in the agendas below.

The core workshop combines B106-B109. Hour 1 introduces events through a bee and colour messages. Hour 2 uses music machines to program and debug key-press and colour events. The optional extension adapts both parts of B110 Putt and Play into an interactive mini-golf design challenge.

## Facilitation Notes Reference

| Lesson | Context | Learning Outcome Or Skill | Student Prompt |
| --- | --- | --- | --- |
| [B106 Bee-haviour](https://teach.legoeducation.com/en-gb/computer-science/lesson/beehavior/facilitation-notes) | A bee responds when it sees a flower. | Model and describe how events work. | What happens when the bee sees a flower? |
| [B107 Buzz and Bloom](https://teach.legoeducation.com/en-gb/computer-science/lesson/buzz-and-bloom/facilitation-notes) | Colours communicate messages to a bee. | Use events to activate different behaviors. | When the sensor sees a colour, then what happens? |
| [B108 Spin a Song](https://teach.legoeducation.com/en-gb/computer-science/lesson/spin-a-song/facilitation-notes) | Debug a music machine. | Program and debug key-press and colour events. | What did you expect, and what happened instead? |
| [B109 Rhythm Rescue](https://teach.legoeducation.com/en-gb/computer-science/lesson/rhythm-rescue/facilitation-notes) | Conflicting music events produce errors. | Use debugging practices to find and fix problems. | What steps helped you find the bug? |
| [B110 Putt and Play](https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes) | Design a mini-golf putter for a user. | Create an event-driven program and explain design decisions. | Which event controls the putter, and why? |

## Team Roles

Rotate designer, builder, programmer and tester-documenter at `1:00`, after lunch and at extension `1:00`.

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
<td>B106<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/beehavior/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/beehavior/facilitation-notes#:~:text=Introduction">Introduction</a></td>
<td>Assign roles. Act out events and responses using a bee-and-flower scenario.</td>
<td>Event-response examples.</td>
<td rowspan="2"><strong>Introduce:</strong> Start by positioning events as "when this happens, the program responds." Use the bee and flower context to make the event visible: a sensor or condition starts an action. Teams should be able to name the event trigger and the response before they build.<br><strong>Skills:</strong> Event, trigger, input, output, response.<br><strong>Ask:</strong> What happens when the bee sees a flower?</td>
</tr>
<tr>
<td>0:08-0:22</td>
<td>B106<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/beehavior/facilitation-notes#:~:text=Context">Context</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/beehavior/facilitation-notes#:~:text=Build%20Together">Build Together</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/beehavior/facilitation-notes#:~:text=Check%20In">Check In</a></td>
<td>Build a bee model and identify input and output behavior.</td>
<td>Minimum bee prototype.</td>
</tr>
<tr>
<td>0:22-0:38</td>
<td>B107<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/buzz-and-bloom/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/buzz-and-bloom/facilitation-notes#:~:text=Context">Context</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/buzz-and-bloom/facilitation-notes#:~:text=Try%20It">Try It</a></td>
<td>Program colour-detected events that produce different motions.</td>
<td>Two event-driven behaviors.</td>
<td rowspan="2"><strong>Introduce:</strong> Extend the bee story by making color the message that changes behavior. Explain that different colors can trigger different program responses, so teams need to decide which color means which action. Ask them to test one event at a time.<br><strong>Skills:</strong> Color sensor, event-response pair, message, behavior.<br><strong>Ask:</strong> When the sensor sees a colour, then what should happen?</td>
</tr>
<tr>
<td>0:38-0:50</td>
<td>B107<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/buzz-and-bloom/facilitation-notes#:~:text=Check%20In">Check In</a></td>
<td>Use the frame: <code>When</code> the bee sees..., <code>then</code> it....</td>
<td>Clear event explanation.</td>
</tr>
<tr>
<td>0:50-1:00</td>
<td>B106-B107<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/buzz-and-bloom/facilitation-notes#:~:text=Show%20What%20You%20Know">Show What You Know</a></td>
<td>Test, revise and record one confusing response.</td>
<td>Working bee and one revision.</td>
<td><strong>Introduce:</strong> Close the first hour by having teams demonstrate their bee and name the event that drives it. Prompt them to describe one response that surprised them and the revision they made.<br><strong>Skills:</strong> Event-response, testing, revision, communication.<br><strong>Ask:</strong> Which event drives your bee, and what did you change after testing?</td>
</tr>
<tr>
<td>1:00-1:08</td>
<td>B108<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/spin-a-song/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/spin-a-song/facilitation-notes#:~:text=Introduction">Introduction</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/spin-a-song/facilitation-notes#:~:text=Predict">Predict</a></td>
<td>Rotate roles. Introduce a music-machine bug and predict the result.</td>
<td>Bug prediction.</td>
<td rowspan="2"><strong>Introduce:</strong> Reframe events through sound and debugging. Students should predict how the music machine will respond to a key press or color event, then use mismatches between prediction and result to locate bugs. Keep teams focused on one testable cause at a time.<br><strong>Skills:</strong> Key-press event, color event, bug, prediction, debugging evidence.<br><strong>Ask:</strong> What did you expect, and what happened instead?</td>
</tr>
<tr>
<td>1:08-1:28</td>
<td>B108<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/spin-a-song/facilitation-notes#:~:text=Try%20It">Try It</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/spin-a-song/facilitation-notes#:~:text=Check%20In">Check In</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/spin-a-song/facilitation-notes#:~:text=Elaborate">Elaborate</a></td>
<td>Build and debug key-press and colour events.</td>
<td>Working music-machine events.</td>
</tr>
<tr>
<td>1:28-1:42</td>
<td>B109<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/rhythm-rescue/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/rhythm-rescue/facilitation-notes#:~:text=Introduction">Introduction</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/rhythm-rescue/facilitation-notes#:~:text=Predict">Predict</a></td>
<td>Introduce conflicting triggers and isolate the error.</td>
<td>Debugging record.</td>
<td rowspan="2"><strong>Introduce:</strong> Introduce this as a debugging rescue mission. Conflicting or incorrect events can make the music machine behave unpredictably, so students must explain the bug before changing code. Their share-out should name the test, the bug and the fix.<br><strong>Skills:</strong> Debugging process, event conflict, isolate-and-test strategy.<br><strong>Ask:</strong> What steps helped you find the bug?</td>
</tr>
<tr>
<td>1:42-1:52</td>
<td>B109<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/rhythm-rescue/facilitation-notes#:~:text=Try%20It">Try It</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/rhythm-rescue/facilitation-notes#:~:text=Check%20In">Check In</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/rhythm-rescue/facilitation-notes#:~:text=Elaborate">Elaborate</a></td>
<td>Fix, retest and explain the strategy used.</td>
<td>Reliable program.</td>
</tr>
<tr>
<td>1:52-2:00</td>
<td>B106-B109<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/rhythm-rescue/facilitation-notes#:~:text=Show%20What%20You%20Know">Show What You Know</a></td>
<td>Share one event and one debugging lesson.</td>
<td>Core demonstration.</td>
<td><strong>Introduce:</strong> Close the core by having each team share one event-response pair and one debugging lesson. Prompt them to name the trigger, the response and the strategy that found the bug.<br><strong>Skills:</strong> Synthesis, events, debugging, communication.<br><strong>Ask:</strong> What is one event you built and one debugging lesson you learned?</td>
</tr>
</tbody>
</table>

## Optional Extension: B110 Putt And Play

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
<td>Plan<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Introduction">Introduction</a></td>
<td>Rotate roles. Discuss mini-golf and the needs of different players.</td>
<td>Chosen user and need.</td>
<td rowspan="4"><strong>Introduce:</strong> Reopen the extension as a user-centered event-design challenge. Teams design a mini-golf putter, choose the event that controls the swing and build a first playable prototype for their chosen player.<br><strong>Skills:</strong> User need, event-controlled program, prototype.<br><strong>Ask:</strong> Which event controls the putter, and why is it the right event for your user?</td>
</tr>
<tr>
<td>0:10-0:22</td>
<td>Plan<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Context">Context</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Plan">Plan</a></td>
<td>Sketch a putter, select input events and define swing outputs.</td>
<td>Design plan.</td>
</tr>
<tr>
<td>0:22-0:48</td>
<td>Prototype<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Prototype">Prototype</a></td>
<td>Build the putter and create one event-controlled swing.</td>
<td>Playable minimum prototype.</td>
</tr>
<tr>
<td>0:48-1:00</td>
<td>Prototype<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Share">Share</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Check%20In">Check In</a></td>
<td>Test accuracy and explain the event-response pair.</td>
<td>Test result and revision note.</td>
</tr>
<tr>
<td>1:00-1:08</td>
<td>Iterate<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Feedback">Feedback</a></td>
<td>Rotate roles and exchange feedback.</td>
<td>One peer suggestion.</td>
<td rowspan="5"><strong>Introduce:</strong> Open the second half by refining the control from player feedback. Teams add events or usability improvements, run repeated playtests and prepare to justify why their chosen trigger fits the user.<br><strong>Skills:</strong> Feedback, iteration, usability testing, communication.<br><strong>Ask:</strong> Which change made the putter easier or more fun to play, and why?</td>
</tr>
<tr>
<td>1:08-1:30</td>
<td>Iterate<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Iterate">Iterate</a></td>
<td>Add a second swing, event or usability improvement.</td>
<td>Improved putter.</td>
</tr>
<tr>
<td>1:30-1:42</td>
<td>Test<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Check%20In">Check In</a></td>
<td>Run three playtests and record reliability.</td>
<td>Playtest evidence.</td>
</tr>
<tr>
<td>1:42-1:52</td>
<td>Prepare<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Share%202">Share 2</a></td>
<td>Finalise the model and explanation.</td>
<td>Showcase-ready putter.</td>
</tr>
<tr>
<td>1:52-2:00</td>
<td>Share<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/putt-and-play/facilitation-notes#:~:text=Reflect">Reflect</a></td>
<td>Demonstrate and justify one design choice.</td>
<td>Capstone showcase.</td>
</tr>
</tbody>
</table>

## Adapted B110 Rubric

| Criterion | Workshop Target | Stretch |
| --- | --- | --- |
| Events | Demonstrate an event controlling motor speed. | Use multiple events for different swings. |
| Design choices | Explain the reason for one choice. | Explain multiple choices and user needs. |
| Prototype | Build a usable putter. | Personalise and improve it after feedback. |
| Collaboration | Participate and listen actively. | Help the team organise decisions. |
