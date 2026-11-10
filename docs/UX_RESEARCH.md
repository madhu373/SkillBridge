# SkillBridge: UX Research Methodology & Field Templates

> **Academic Internship Case Study Workbook**  
> *Notice: In accordance with academic research integrity standards, this document provides the formal research framework, evaluation criteria, interview protocols, and survey instruments. It does not fabricate participant responses or competitor audit scores; it is designed to capture and synthesize empirical research findings.*

---

## 1. Research Objectives & Problem Scoping

### 1.1 Academic Context
The research focuses on an online upskilling academy operating within the Indian EdTech landscape (centered in Bengaluru, Karnataka). Despite sustained top-of-funnel traffic from university campuses and professional networks, platform analytics indicate that **over 65% of potential learners abandon the site during course discovery and enrolment**.

### 1.2 Core Research Goals
1. **Identify Discovery Friction**: Pinpoint specific user hesitations when searching, filtering, and comparing course offerings.
2. **Evaluate Information Clarity**: Determine whether users can locate critical decision data (detailed curriculum, hands-on outcomes, instructor credentials, and total tuition fee) within 90 seconds.
3. **Diagnose Enrolment Drop-Off**: Analyze where prospective learners abandon form flows and how cognitive load or distrust impacts conversion.
4. **Assess Accessibility & Inclusivity**: Investigate how low-vision learners and regional language (Hindi) speakers navigate course discovery.

---

## 2. Competitor Evaluation Framework & Template

Use this structured matrix to evaluate competing EdTech and upskilling platforms (e.g., Coursera, Udemy, UpGrad, Scaler Academy, NPTEL).

### Competitor Audit Matrix Template

| Evaluation Parameter | Competitor A: [Platform Name] | Competitor B: [Platform Name] | Competitor C: [Platform Name] | SkillBridge Design Target |
| :--- | :--- | :--- | :--- | :--- |
| **URL / App Checked** | *[Insert URL]* | *[Insert URL]* | *[Insert URL]* | `skillbridge-india.edu` |
| **Search & Autocomplete Speed** | *[Document observation]* | *[Document observation]* | *[Document observation]* | Instant debounced keyword search + quick suggestion tags |
| **Filter Multi-Select Capability** | *[Single vs. Multi-select]* | *[Single vs. Multi-select]* | *[Single vs. Multi-select]* | Category, Level, Price (₹), Duration, Rating |
| **Pricing Transparency** | *[Hidden behind login / monthly sub?]* | *[Upfront price displayed?]* | *[Hidden subscription traps?]* | Explicit ₹ tuition upfront; no recurring subscription traps |
| **Syllabus Detail Level** | *[Broad outline vs. lesson-by-lesson]* | *[Broad outline vs. lesson-by-lesson]* | *[Broad outline vs. lesson-by-lesson]* | Interactive accordion with lesson durations & preview tags |
| **Enrolment Steps Count** | *[Count steps to confirm access]* | *[Count steps to confirm access]* | *[Count steps to confirm access]* | 1 single-page step (4 fields); < 60 seconds |
| **Mobile Responsiveness** | *[Responsive / Broken elements?]* | *[Responsive / Broken elements?]* | *[Responsive / Broken elements?]* | 100% mobile-friendly with slide-out filter drawer |
| **Accessibility (WCAG 2.1)** | *[High-contrast / font scaling available?]* | *[High-contrast / font scaling available?]* | *[High-contrast / font scaling available?]* | Dedicated Low-Vision Mode + WCAG 2.1 AA contrast |
| **Language Localization** | *[English only vs. Indic languages]* | *[English only vs. Indic languages]* | *[English only vs. Indic languages]* | English & Hindi switchable across discovery & nav |

---

## 3. User Interview Protocols

Three distinct user cohorts were defined based on target persona demographics in the Bengaluru EdTech market:

### Cohort 1: College Students (Final Year / Pre-Final Year)
*Target: Undergraduate engineering and computer science students seeking industry-ready skill sets.*

1. **Background & Warm-up**:
   - What degree and year are you currently studying, and where are you located?
   - How do you currently prepare for upcoming campus placements or technical internships?
2. **Current Discovery Behaviors**:
   - Walk me through the last time you searched for an online programming or data course. What website did you visit first?
   - What was the very first piece of information you looked for on that page?
3. **Pain Points & Frustrations**:
   - Have you ever started signing up for a course and then abandoned it? What caused you to leave?
   - How do you verify whether a course syllabus is actually up-to-date with current hiring expectations?
4. **Pricing & Trust Factors**:
   - How do you prefer course pricing to be shown (monthly subscription vs. one-time cohort fee)?
   - What makes you trust that an online certificate will hold value with employers?

---

### Cohort 2: Fresh Graduates (Actively Seeking Tech Roles)
*Target: Recent graduates seeking career-oriented upskilling programs to secure an entry-level position.*

1. **Background & Career Goals**:
   - What specific roles are you applying for (e.g., SDE-1, UI/UX Designer, Data Analyst)?
   - What gap in your college education are you hoping an upskilling platform will bridge?
2. **Course Comparison Behaviors**:
   - How do you compare two courses offering similar topics? What factors break the tie?
   - How important is knowing the specific instructor’s background or company experience?
3. **Checkout & Conversion**:
   - Describe a situation where a checkout process felt confusing or untrustworthy.
   - What information do you expect to receive immediately upon completing an enrolment?

---

### Cohort 3: Working Professionals (Upskilling / Lateral Transition)
*Target: Engineers and analysts with 1–4 years of experience transitioning into Product Management, AI, or Cloud.*

1. **Time & Flexibility Constraints**:
   - How many hours per week can you realistically commit to learning alongside a full-time job?
   - When evaluating a curriculum, how do you verify if the pace matches your schedule?
2. **Pedagogy & Hands-On Proof**:
   - What value do you place on capstone projects versus lecture videos?
   - How do you expect to showcase finished coursework on LinkedIn or your portfolio?
3. **Inclusivity & Usability**:
   - Do you experience visual fatigue during extended evening screen time? Would high-contrast or text-scaling modes assist your workflow?

---

## 4. Quantitative User Survey Instrument

Distribute this questionnaire to gather quantitative data across sample sizes ($N \ge 100$).

### Section A: Participant Demographics
1. **Current Employment / Academic Status**:
   - [ ] Undergraduate Student
   - [ ] Postgraduate Student
   - [ ] Fresh Graduate (Job Seeking)
   - [ ] Working Professional (0–2 Years Experience)
   - [ ] Working Professional (3+ Years Experience)
   - [ ] Other

2. **Primary Learning Goal**:
   - [ ] Clear campus placement interviews
   - [ ] Switch career tracks (e.g., QA to Dev, Dev to PM)
   - [ ] Upgrade skills for an upcoming job promotion
   - [ ] Personal interest / hobby projects

### Section B: Usability & Drop-off Factors (Likert Scale: 1 = Strongly Disagree to 5 = Strongly Agree)
3. *"I often abandon an online course website if I cannot see the full course syllabus without creating an account first."*
   - [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
4. *"Hidden recurring monthly subscriptions cause me to immediately distrust an EdTech platform."*
   - [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
5. *"Being able to filter courses by practical duration (e.g., short 6-week vs. long 12-week) is essential for my planning."*
   - [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
6. *"Knowing the lead instructor’s real-world company experience (e.g., former Cisco or Swiggy lead) heavily influences my decision to enrol."*
   - [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
7. *"An enrolment form that asks for more than 4–5 fields feels intrusive and causes me to hesitate."*
   - [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
8. *"Having interface labels available in Hindi makes navigation more welcoming and accessible for regional learners."*
   - [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]

---

## 5. Usability Testing Protocol & Task Scenarios

Conduct think-aloud usability testing sessions with 5–8 participants using the SkillBridge live prototype.

### Task Scenario 1: Course Discovery
> *"You are an aspiring tech worker looking for an intermediate Python course that can be completed within 8 weeks and costs under ₹3,500. Use the platform to find and compare suitable courses."*
- **Success Metric**: Time-to-find $< 60$ seconds; participant applies Category and Price filters correctly.
- **Observations to record**: Did the participant use search or sidebar filters? Did they notice active filter chips?

### Task Scenario 2: Information Inspection
> *"You want to inspect the 'UI/UX Design & Design Systems in Figma' course. Find out who teaches it, what Figma tools are covered in Module 2, and whether there are prerequisites."*
- **Success Metric**: Participant locates instructor credentials, expands Module 2 accordion, and reads prerequisites without confusion.
- **Observations to record**: Did the accordion open smoothly? Was the pricing clearly noticed?

### Task Scenario 3: Frictionless Enrolment
> *"Complete the enrolment for the course of your choice using your name and details."*
- **Success Metric**: Participant completes form submission without validation errors; lands on the confirmation page with valid ID.
- **Observations to record**: Any hesitation on phone number formatting? Did order summary instill trust?

### Task Scenario 4: Dashboard & Lesson Engagement
> *"Navigate to your student dashboard. Find your active course, launch a lesson, and locate your completion certificate."*
- **Success Metric**: Participant clicks 'Resume Learning', advances progress, switches between In Progress and Completed tabs, and opens the certificate modal.

---

## 6. Empirical Findings & Synthesis Template

*Use this section to record verified qualitative feedback and quantitative metrics gathered during your internship testing rounds.*

### Key Quantitative Benchmarks
- **Average System Usability Scale (SUS) Target**: $> 80$ (Grade A)
- **Task 1 Completion Rate**: *[Record % from your testing session]*
- **Task 2 Completion Rate**: *[Record % from your testing session]*
- **Task 3 Enrolment Flow Completion Time**: *[Record seconds (Target: < 60s)]*
- **Error Frequency**: *[Record count of form validation trips]*

### Qualitative Affinity Mapping
- **Theme 1: Discovery Experience**: *[Document recurring learner comments]*
- **Theme 2: Trust & Price Transparency**: *[Document feedback on upfront INR pricing]*
- **Theme 3: Accessibility & Vernacular Engagement**: *[Document how users responded to Low-Vision Mode and Hindi translation]*
