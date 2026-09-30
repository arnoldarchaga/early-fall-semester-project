const careerDetails = {
  "support": {
    "name": "IT Support",
    "role": "Help Desk Technician",
    "focus": "Help people solve computer, software, account, and connection problems.",
    "skills": [
      "Computer troubleshooting",
      "Windows and Microsoft 365",
      "Networking basics",
      "Clear customer communication"
    ],
    "daily": "Respond to support tickets, ask questions to narrow down a problem, document fixes, and pass complex issues to the right team.",
    "education": "Computer support courses, hands-on practice, or an IT-related degree can build a foundation. Read individual job postings to understand employer requirements.",
    "cert": "CompTIA A+ is an option to explore for foundational IT knowledge. Check the official exam objectives before choosing study materials.",
    "project": "Create a troubleshooting journal with five sample problems. For each one, record the symptoms, tests, solution, and a plain-language explanation for a user.",
    "steps": [
      "Learn how operating systems, hardware, and basic networks fit together.",
      "Practice solving a connection, software, or account problem on a device you own.",
      "Turn your troubleshooting notes into a small portfolio and review help desk job descriptions."
    ],
    "resource": [
      "CompTIA A+ overview",
      "https://www.comptia.org/en-us/certifications/a/"
    ],
    "resourceNote": "Review the certification overview and official preparation information.",
    "tasks": [
      "Explain the parts of a computer",
      "Troubleshoot a basic connection problem",
      "Document a sample support ticket",
      "Explain a solution without technical jargon"
    ]
  },
  "development": {
    "name": "Software Development",
    "role": "Junior Web Developer",
    "focus": "Build and maintain websites and applications by writing, testing, and improving code.",
    "skills": [
      "HTML and CSS",
      "JavaScript",
      "Git and GitHub",
      "Debugging and collaboration"
    ],
    "daily": "Translate designs into pages, fix bugs, review code, and test how features behave across screen sizes.",
    "education": "A computing degree, structured courses, or independent practice can help develop the basics. Build projects you can explain and keep learning from feedback.",
    "cert": "A certification is optional for this starting plan. Prioritize a working portfolio and readable code before paying for a credential.",
    "project": "Build a responsive three-page website with navigation and one useful JavaScript feature. Publish it and document how to use it.",
    "steps": [
      "Learn semantic HTML and responsive CSS, then add JavaScript fundamentals.",
      "Build one small project and track changes with Git.",
      "Publish a live version, test it on different screens, and write a clear README."
    ],
    "resource": [
      "MDN Learn Web Development",
      "https://developer.mozilla.org/en-US/docs/Learn_web_development"
    ],
    "resourceNote": "Follow structured lessons on the foundations of web development.",
    "tasks": [
      "Build a semantic HTML page",
      "Create a responsive CSS layout",
      "Add and debug a JavaScript interaction",
      "Publish a project with a README"
    ]
  },
  "data": {
    "name": "Data Analysis",
    "role": "Junior Data Analyst",
    "focus": "Clean, organize, and explain information to help teams make decisions.",
    "skills": [
      "Spreadsheets",
      "SQL",
      "Data visualization",
      "Explaining findings clearly"
    ],
    "daily": "Check data quality, query records, build reports, and explain what the numbers do and do not show.",
    "education": "Courses in spreadsheets, statistics, databases, or business analytics can help. Practice explaining results as well as using tools.",
    "cert": "Start with introductory training. A tool-specific certification may be useful later if it matches the roles you want; it is not required for this practice plan.",
    "project": "Use a public dataset to answer one specific question. Clean the data, create three useful charts, and write a short explanation of your findings and limitations.",
    "steps": [
      "Practice formulas, sorting, filtering, and checking missing values in a spreadsheet.",
      "Learn SQL SELECT, WHERE, GROUP BY, and JOIN with a sample database.",
      "Create a small dashboard and explain one useful conclusion without overstating it."
    ],
    "resource": [
      "Microsoft Learn: Prepare Data for Analysis",
      "https://learn.microsoft.com/en-us/training/paths/prepare-data-power-bi/"
    ],
    "resourceNote": "Explore an official learning path for preparing data in Power BI.",
    "tasks": [
      "Clean a small spreadsheet dataset",
      "Write a SQL query with a filter",
      "Build a chart with clear labels",
      "Explain a finding and its limitations"
    ]
  },
  "security": {
    "name": "Cybersecurity",
    "role": "Security Operations Analyst (junior)",
    "focus": "Help monitor systems, investigate suspicious activity, and protect access to information.",
    "skills": [
      "Networking basics",
      "Security fundamentals",
      "Access management",
      "Careful investigation and documentation"
    ],
    "daily": "Review alerts and logs, document suspicious activity, and help apply security procedures under team guidance.",
    "education": "Build networking and operating-system knowledge first. Some security roles expect prior IT experience, so support or networking work can be a useful first step.",
    "cert": "CompTIA Security+ is an option to research after building IT and networking fundamentals. A credential alone does not guarantee a security job.",
    "project": "In an authorized home lab, review sample login logs, identify unusual activity, and write a short incident report with evidence and recommended next steps.",
    "steps": [
      "Learn IP addressing, common network services, and operating-system basics.",
      "Practice account permissions and interpreting logs in an environment you own or are authorized to use.",
      "Write up a small lab and compare junior security postings with IT support opportunities."
    ],
    "resource": [
      "CompTIA Security+ overview",
      "https://www.comptia.org/en-us/certifications/security/"
    ],
    "resourceNote": "Review the scope of the credential and its recommended experience.",
    "tasks": [
      "Explain basic networking concepts",
      "Set appropriate account permissions",
      "Identify suspicious activity in sample logs",
      "Write a short lab incident report"
    ]
  }
};

const grid = document.querySelector('.career-grid');
const options = Object.entries(careerDetails).map(([id,c]) => `<option value="${id}">${c.name}</option>`).join('');
const list = items => `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
grid.innerHTML = Object.entries(careerDetails).map(([id,c],i) => `
  <article class="career-card" data-category="${id}">
    <span class="card-label">${c.name}</span><h3>${c.role}</h3><p>${c.focus}</p>
    <h4>Core skills</h4>${list(c.skills)}
    <details><summary>Explore this career</summary><div class="profile-detail">
      <div><h4>A typical day</h4><p>${c.daily}</p><h4>Education and preparation</h4><p>${c.education}</p></div>
      <div><h4>Certification guidance</h4><p>${c.cert}</p><h4>Try a beginner project</h4><p>${c.project}</p></div>
    </div></details><a class="text-link" href="#getting-started" data-plan="${id}">Make a ${c.name} plan →</a>
  </article>`).join('');
document.querySelector('.filter-buttons').innerHTML = '<button class="filter-button active" data-filter="all" aria-pressed="true">All Paths</button>' + Object.entries(careerDetails).map(([id,c])=>`<button class="filter-button" data-filter="${id}" aria-pressed="false">${c.name}</button>`).join('');
document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
  const selected=button.dataset.filter;
  document.querySelectorAll('.filter-button').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  grid.classList.toggle('filtered',selected!=='all');
  document.querySelectorAll('.career-card').forEach(card=>{card.hidden=selected!=='all' && card.dataset.category!==selected;});
  document.querySelector('#filter-status').textContent=selected==='all'?'Showing all 4 career paths.':`Showing ${careerDetails[selected].name}. Explore the profile or create a practice plan.`;
}));
const first=document.querySelector('#first-path'), second=document.querySelector('#second-path');
first.innerHTML=second.innerHTML=options; second.value='development';
function compare(){
  [first,second].forEach((select,i)=>{
    const c=careerDetails[select.value];
    document.querySelector(i===0?'#first-result':'#second-result').innerHTML=`<p class="compare-label">${i===0?'First':'Second'} choice</p><h3>${c.name}</h3><p class="compare-role">Role to explore: ${c.role}</p><h4>What the work involves</h4><p>${c.focus}</p><h4>Core skills</h4>${list(c.skills)}<h4>Certification guidance</h4><p>${c.cert}</p><h4>A useful first step</h4><p>${c.steps[0]}</p>`;
  });
  document.querySelector('#compare-status').textContent=first.value===second.value?`Both choices are ${careerDetails[first.value].name}. Select another path to see the differences.`:`Comparing ${careerDetails[first.value].name} and ${careerDetails[second.value].name}.`;
}
first.addEventListener('change',compare);second.addEventListener('change',compare);compare();
const plan=document.querySelector('#plan-path');plan.innerHTML=options;
const storageKey='tech-career-guide-progress-v1';
let saved={}, persistent=true;
try { const raw=JSON.parse(localStorage.getItem(storageKey)||'{}'); if(raw && typeof raw==='object' && !Array.isArray(raw)) saved=raw; localStorage.setItem(storageKey,JSON.stringify(saved)); } catch { persistent=false; }
function showProgress(){
  const c=careerDetails[plan.value];
  const completed=c.tasks.filter((_,i)=>saved[`${plan.value}-${i}`]===true).length;
  document.querySelector('#progress-count').textContent=`${completed} of ${c.tasks.length} practice tasks completed`;
  document.querySelector('#progress').value=completed;
  document.querySelector('#save-status').textContent=persistent?'Progress saves automatically in this browser. It does not sync across devices.':'Browser storage is unavailable. Progress will last only while this page stays open.';
}
function renderPlan(){
  const c=careerDetails[plan.value];
  document.querySelector('#plan-title').textContent=`Your ${c.name} starting plan`;
  document.querySelector('#plan-steps').innerHTML=c.steps.map((s,i)=>`<article><span>0${i+1}</span><h3>${['Learn the basics','Practice with purpose','Show your work'][i]}</h3><p>${s}</p></article>`).join('');
  document.querySelector('#checklist').innerHTML=c.tasks.map((task,i)=>`<label class="task"><input type="checkbox" data-task="${plan.value}-${i}" ${saved[`${plan.value}-${i}`]===true?'checked':''}><span>${task}</span></label>`).join('');
  showProgress();
}
plan.addEventListener('change',renderPlan);
document.querySelector('#checklist').addEventListener('change',event=>{
  if(!event.target.matches('input[data-task]'))return;
  saved[event.target.dataset.task]=event.target.checked;
  try{localStorage.setItem(storageKey,JSON.stringify(saved));}catch{persistent=false;}
  showProgress();
});
document.querySelector('#reset-progress').addEventListener('click',()=>{
  careerDetails[plan.value].tasks.forEach((_,i)=>delete saved[`${plan.value}-${i}`]);
  try{localStorage.setItem(storageKey,JSON.stringify(saved));}catch{persistent=false;}
  renderPlan();
});
document.querySelectorAll('[data-plan]').forEach(link=>link.addEventListener('click',()=>{plan.value=link.dataset.plan;renderPlan();}));
renderPlan();
document.querySelector('#resource-grid').innerHTML=Object.values(careerDetails).map(c=>`<article class="resource-card"><p class="compare-label">${c.name}</p><h3><a href="${c.resource[1]}">${c.resource[0]} ↗</a></h3><p>${c.resourceNote}</p></article>`).join('');
