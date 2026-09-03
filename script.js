const filterButtons = document.querySelectorAll('.filter-button');
const careerCards = document.querySelectorAll('.career-card');
const filterStatus = document.querySelector('#filter-status');

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
