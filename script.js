const filterButtons = document.querySelectorAll('.filter-button');
const careerCards = document.querySelectorAll('.career-card');
const filterStatus = document.querySelector('#filter-status');

const careerDetails = {
  support: {
    name: 'IT Support',
    role: 'Help Desk Technician',
    focus: 'Help users solve hardware, software, account, and network problems.',
    skills: ['Computer troubleshooting', 'Windows and Microsoft 365', 'Customer service'],
    firstStep: 'Practice troubleshooting on a home computer and study the basics covered by CompTIA A+.'
  },
  development: {
    name: 'Software Development',
    role: 'Junior Web Developer',
    focus: 'Build and maintain websites and applications by writing and testing code.',
    skills: ['HTML and CSS', 'JavaScript', 'Git and GitHub'],
    firstStep: 'Build a small responsive website and publish the code and live project through GitHub.'
  },
  data: {
    name: 'Data Analysis',
    role: 'Junior Data Analyst',
    focus: 'Organize, clean, and study information so teams can make better decisions.',
    skills: ['Excel or Google Sheets', 'SQL', 'Data visualization'],
    firstStep: 'Analyze a public dataset and create a short dashboard that explains your findings.'
  },
  security: {
    name: 'Cybersecurity',
    role: 'Cybersecurity Technician',
    focus: 'Monitor systems, recognize threats, and help protect company information.',
    skills: ['Networking basics', 'Security fundamentals', 'Access management'],
    firstStep: 'Learn basic networking and complete beginner security labs in a safe practice environment.'
  }
};

const firstPathSelect = document.querySelector('#first-path');
const secondPathSelect = document.querySelector('#second-path');
const firstResult = document.querySelector('#first-result');
const secondResult = document.querySelector('#second-result');
const compareStatus = document.querySelector('#compare-status');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;
    let visibleCards = 0;

    filterButtons.forEach((currentButton) => {
      const isSelected = currentButton === button;
      currentButton.classList.toggle('active', isSelected);
      currentButton.setAttribute('aria-pressed', isSelected);
    });

    careerCards.forEach((card) => {
      const shouldShow = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.hidden = !shouldShow;

      if (shouldShow) {
        visibleCards += 1;
      }
    });

    const selectedName = button.textContent.trim();
    filterStatus.textContent = selectedFilter === 'all'
      ? `Showing all ${visibleCards} career paths.`
      : `Showing ${visibleCards} ${selectedName} career path.`;
  });
});

function updateComparisonCard(card, career) {
  card.querySelector('[data-field="name"]').textContent = career.name;
  card.querySelector('[data-field="role"]').textContent = `Common starting role: ${career.role}`;
  card.querySelector('[data-field="focus"]').textContent = career.focus;
  card.querySelector('[data-field="first-step"]').textContent = career.firstStep;

  const skillsList = card.querySelector('[data-field="skills"]');
  skillsList.replaceChildren();

  career.skills.forEach((skill) => {
    const listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.append(listItem);
  });
}

function updateComparison() {
  const firstCareer = careerDetails[firstPathSelect.value];
  const secondCareer = careerDetails[secondPathSelect.value];

  updateComparisonCard(firstResult, firstCareer);
  updateComparisonCard(secondResult, secondCareer);

  compareStatus.textContent = firstPathSelect.value === secondPathSelect.value
    ? `Both choices are ${firstCareer.name}. Select a different path to compare.`
    : `Comparing ${firstCareer.name} and ${secondCareer.name}.`;
}

firstPathSelect.addEventListener('change', updateComparison);
secondPathSelect.addEventListener('change', updateComparison);
updateComparison();
