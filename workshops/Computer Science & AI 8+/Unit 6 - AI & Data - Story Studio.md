# Unit 6: AI & Data - Story Studio

## Workshop Overview

**Team size:** Four students  
**Slide source:** Use the named slides/steps from the official LEGO facilitation-note print/PDF pages embedded in the agendas below.

The core combines B126-B129. Hour 1 uses a pretrained pose classifier to direct a monster. Hour 2 creates and improves a custom pose classifier. The optional extension adapts both parts of B130 Story Studio into an interactive storytelling challenge.

## Facilitation Notes Reference

| Lesson | Context | Learning Outcome Or Skill | Student Prompt |
| --- | --- | --- | --- |
| [B126 Monster Maze](https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-maze/facilitation-notes) | Use poses to direct a monster around a maze. | Activate events with a pretrained AI classifier. | How does a pose change the monster's behavior? |
| [B127 Monster Snack Time](https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-snack-time/facilitation-notes) | Deliver snacks with pose-controlled movement. | Develop a program using a pretrained classifier. | How could a monster deliver snacks? |
| [B128 Strike a Pose](https://teach.legoeducation.com/en-gb/computer-science/lesson/strike-a-pose/facilitation-notes) | Train a robot to follow body movements. | Create and train a custom classifier. | What examples should train each class? |
| [B129 Copy That](https://teach.legoeducation.com/en-gb/computer-science/lesson/copy-that/facilitation-notes) | Improve pose classification accuracy. | Train and improve a custom classifier. | What aspects of data collection affect accuracy? |
| [B130 Story Studio](https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes) | Use AI poses to tell an interactive story. | Collaboratively create training data and tell a story with AI. | How can technology change storytelling? |

## Team Roles

Rotate story designer, model builder, AI trainer and tester-documenter at `1:00`, after lunch and at extension `1:00`.

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
<td>B126<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-maze/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-maze/facilitation-notes#:~:text=Introduction">Introduction</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-maze/facilitation-notes#:~:text=Context">Context</a></td>
<td>Assign roles. Introduce classifiers as tools that sort data into categories.</td>
<td>Classifier explanation.</td>
<td rowspan="2"><strong>Introduce:</strong> Open by explaining that the program uses a pretrained AI classifier to recognize poses. Students do not train the model yet; their task is to connect recognized poses to events in the program. Make them name the pose and behavior pair before testing.<br><strong>Skills:</strong> Pretrained classifier, pose input, event, model behavior.<br><strong>Ask:</strong> How does a pose change the monster's behavior?</td>
</tr>
<tr>
<td>0:08-0:25</td>
<td>B126<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-maze/facilitation-notes#:~:text=Build%20Together">Build Together</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-maze/facilitation-notes#:~:text=Predict">Predict</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-maze/facilitation-notes#:~:text=Try%20It">Try It</a></td>
<td>Build a monster and trigger movements with pretrained pose events.</td>
<td>Pose-controlled monster.</td>
</tr>
<tr>
<td>0:25-0:38</td>
<td>B127<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-snack-time/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-snack-time/facilitation-notes#:~:text=Context">Context</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-snack-time/facilitation-notes#:~:text=Predict">Predict</a></td>
<td>Plan snack-delivery directions.</td>
<td>Route and pose plan.</td>
<td rowspan="2"><strong>Introduce:</strong> Extend the pretrained classifier into a delivery challenge. Teams choose how the monster should respond to pose events and test whether the camera input reliably triggers the intended snack behavior.<br><strong>Skills:</strong> Pose event, camera data, program response, reliability.<br><strong>Ask:</strong> How could a monster deliver snacks using pose events?</td>
</tr>
<tr>
<td>0:38-0:52</td>
<td>B127<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-snack-time/facilitation-notes#:~:text=Try%20It">Try It</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-snack-time/facilitation-notes#:~:text=Check%20In">Check In</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-snack-time/facilitation-notes#:~:text=Elaborate">Elaborate</a></td>
<td>Develop and test forward and turn behaviors.</td>
<td>Snack-delivery program.</td>
</tr>
<tr>
<td>0:52-1:00</td>
<td>B126-B127<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/monster-snack-time/facilitation-notes#:~:text=Show%20What%20You%20Know">Show What You Know</a></td>
<td>Explain how poses trigger events.</td>
<td>Pretrained-classifier reflection.</td>
<td><strong>Introduce:</strong> Close the first hour by having teams explain how poses trigger events. Prompt them to name a pose-behavior pair and say how reliably the camera input fired it.<br><strong>Skills:</strong> Pretrained classifier, pose events, reliability, communication.<br><strong>Ask:</strong> Which pose triggers which behavior, and how reliable was it?</td>
</tr>
<tr>
<td>1:00-1:08</td>
<td>B128<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/strike-a-pose/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/strike-a-pose/facilitation-notes#:~:text=Introduction">Introduction</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/strike-a-pose/facilitation-notes#:~:text=Context">Context</a></td>
<td>Rotate roles. Define two pose classes and discuss labelled training examples.</td>
<td>Training-data plan.</td>
<td rowspan="2"><strong>Introduce:</strong> Shift from using a pretrained classifier to creating a custom classifier. Explain that the examples students collect become the training data the model learns from. Ask teams to define each pose class clearly before collecting examples.<br><strong>Skills:</strong> Custom classifier, class, training data, examples, model.<br><strong>Ask:</strong> What examples should train each class?</td>
</tr>
<tr>
<td>1:08-1:28</td>
<td>B128<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/strike-a-pose/facilitation-notes#:~:text=Build%20Together">Build Together</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/strike-a-pose/facilitation-notes#:~:text=Predict">Predict</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/strike-a-pose/facilitation-notes#:~:text=Try%20It">Try It</a></td>
<td>Capture examples, train a custom classifier and connect responses.</td>
<td>Working custom classifier.</td>
</tr>
<tr>
<td>1:28-1:42</td>
<td>B129<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/copy-that/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/copy-that/facilitation-notes#:~:text=Context">Context</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/copy-that/facilitation-notes#:~:text=Try%20It">Try It</a></td>
<td>Test with varied poses and identify accuracy issues.</td>
<td>Test record.</td>
<td rowspan="2"><strong>Introduce:</strong> Introduce accuracy as something students can improve by changing the training data, pose consistency or test conditions. Teams should record one weakness in the classifier and one deliberate change they make to improve it.<br><strong>Skills:</strong> Accuracy, training data quality, consistency, testing, iteration.<br><strong>Ask:</strong> What aspects of data collection affect accuracy?</td>
</tr>
<tr>
<td>1:42-1:52</td>
<td>B129<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/copy-that/facilitation-notes#:~:text=Check%20In">Check In</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/copy-that/facilitation-notes#:~:text=Elaborate">Elaborate</a></td>
<td>Improve training data and retest.</td>
<td>Revised classifier.</td>
</tr>
<tr>
<td>1:52-2:00</td>
<td>B126-B129<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/copy-that/facilitation-notes#:~:text=Show%20What%20You%20Know">Show What You Know</a></td>
<td>Share one accuracy improvement and one limitation.</td>
<td>Core demonstration.</td>
<td><strong>Introduce:</strong> Close the core by having each team share one accuracy improvement and one limitation of their classifier. Prompt them to connect the change they made to the training data.<br><strong>Skills:</strong> Synthesis, custom classifier, accuracy, limitations, communication.<br><strong>Ask:</strong> What improved your classifier's accuracy, and where does it still fall short?</td>
</tr>
</tbody>
</table>

## Optional Extension: B130 Story Studio

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
<td>Plan<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Objectives">Objectives</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Introduction">Introduction</a></td>
<td>Rotate roles. Discuss how technology changes storytelling.</td>
<td>Story idea.</td>
<td rowspan="4"><strong>Introduce:</strong> Reopen after lunch with an AI storytelling brief. Teams design a short story scene, choose the AI pose inputs and story outcomes and build a first interactive prototype with their own training data.<br><strong>Skills:</strong> AI input, custom classifier, training data, story branch.<br><strong>Ask:</strong> How can technology change storytelling?</td>
</tr>
<tr>
<td>0:10-0:22</td>
<td>Plan<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Context">Context</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Plan">Plan</a></td>
<td>Choose a scene, AI inputs and story outcomes.</td>
<td>Storyboard and class plan.</td>
</tr>
<tr>
<td>0:22-0:48</td>
<td>Prototype<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Prototype">Prototype</a></td>
<td>Build the scene, create training data and connect responses.</td>
<td>Interactive-story prototype.</td>
</tr>
<tr>
<td>0:48-1:00</td>
<td>Prototype<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Share">Share</a>, <a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Check%20In">Check In</a></td>
<td>Test story branches and document one limitation.</td>
<td>Test notes.</td>
</tr>
<tr>
<td>1:00-1:08</td>
<td>Iterate<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Feedback">Feedback</a></td>
<td>Rotate roles and exchange feedback.</td>
<td>One peer suggestion.</td>
<td rowspan="5"><strong>Introduce:</strong> Open the second half by refining the story from feedback. Teams improve their training data, instructions or branches, run independent peer tests and prepare to explain both their creative intent and responsible-use choices.<br><strong>Skills:</strong> Iteration, training data quality, independent testing, responsible use, communication.<br><strong>Ask:</strong> Which change made your AI story work better for a new player, and why?</td>
</tr>
<tr>
<td>1:08-1:30</td>
<td>Iterate<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Iterate">Iterate</a></td>
<td>Improve data, instructions or story branches.</td>
<td>Revised AI story.</td>
</tr>
<tr>
<td>1:30-1:42</td>
<td>Test<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Check%20In">Check In</a></td>
<td>Run peer tests without coaching and record results.</td>
<td>Independent test evidence.</td>
</tr>
<tr>
<td>1:42-1:52</td>
<td>Prepare<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Share%202">Share 2</a></td>
<td>Finalise story, explanation and responsible-use reflection.</td>
<td>Festival-ready story.</td>
</tr>
<tr>
<td>1:52-2:00</td>
<td>Share<br><a href="https://teach.legoeducation.com/en-gb/computer-science/lesson/story-studio/facilitation-notes#:~:text=Reflect">Reflect</a></td>
<td>Demonstrate and explain AI inputs, training data and revision.</td>
<td>Capstone showcase.</td>
</tr>
</tbody>
</table>

## Adapted B130 Rubric

| Criterion | Workshop Target | Stretch |
| --- | --- | --- |
| Interactive AI story | Use a custom classifier in the program. | Program multiple AI inputs. |
| Training | Contribute to the team's classifier training. | Collaborate proactively on training. |
| Story design | Create a story build and program. | Personalise and iterate on both. |
| Technology reflection | Describe a new technology-enabled form of storytelling. | Explain how storytelling has evolved. |
