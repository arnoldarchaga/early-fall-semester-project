# Entry-Level Tech Career Guide

**Arnold Archaga · CMPA 4303 · Project 02: Final MVP**

## What is this?

This is a beginner-friendly website for exploring IT Support, Software Development, Data Analysis, and Cybersecurity. Visitors can filter career profiles, compare two paths, read about preparation and beginner projects, and build a starting plan. Each path has a practice checklist that saves in the same browser.

## Why does it exist?

Choosing a direction in technology can be confusing when different jobs use different tools and skills. I wanted a guide that helps students and career changers understand the work and take a small, practical next step. The site focuses on exploring options and building skills. It does not treat a checklist or certification as a guarantee of getting hired.

## What tools did I use?

- **HTML:** Semantic sections, navigation, labeled controls, and the page structure.
- **CSS:** The blue color palette, typography, responsive grids, focus styles, and mobile spacing. Media queries adapt the page without a framework.
- **Vanilla JavaScript:** Filtering, comparison updates, career-specific plans, and checklist interactions. A shared career data object keeps names and information consistent across features.
- **localStorage:** Saves practice progress without accounts or a database. If storage is blocked, the checklist still works for the current page session and explains that progress will not persist.
- **VS Code:** Editing and organizing the project files.
- **GitHub and GitHub Desktop:** Tracking changes and publishing updates from the project repository.
- **GitHub Pages:** Hosting the static site without a separate application server.
- **Browser developer tools:** Checking responsive layouts and interactions.

Plain HTML, CSS, and JavaScript fit the size of this project and keep it easy to understand and maintain.

## How to access it

**Website:** [Entry-Level Tech Career Guide](https://arnoldarchaga.github.io/early-fall-semester-project/)

**Repository:** [early-fall-semester-project](https://github.com/arnoldarchaga/early-fall-semester-project)

Use Career Paths to explore profiles, Compare Paths to review two options, My Plan to track practice, and Resources to continue learning. JavaScript must be enabled for the interactive guide. Saved progress belongs to the current browser and device; clearing browser data removes it.

For local development, run `python3 -m http.server 8000` in the project folder and open `http://localhost:8000`.

## What changed from Project 01 to Project 02?

The improvements follow my Assignment 02 iteration plan:

- **Expanded all four profiles:** Added typical responsibilities, education and preparation guidance, certification considerations, and a concrete beginner project. P01's short descriptions were useful introductions but did not give visitors enough direction.
- **Made career labels consistent:** Software Development, Data Analysis, and Cybersecurity now use the same names in the filters, profiles, comparison tool, and plans.
- **Improved the filtered layout:** A single selected profile uses the available width. Expanded details use two columns on larger screens and stack on phones.
- **Extended the comparison feature:** The comparison tool was added during the iteration phase after P01. The final version includes certification guidance and pulls information from the same data object as the profiles and plans.
- **Added specific starting plans:** Each path has its own learning, practice, and portfolio steps instead of the same general advice for every visitor.
- **Added a saved practice checklist:** Visitors can track four tasks per path, see their progress, and reset one path without clearing the others.
- **Added official resources:** Links to MDN, Microsoft Learn, and CompTIA connect visitors to learning and certification information.
- **Polished usability:** Added a skip link, visible keyboard focus, labeled checklist controls, responsive plan layouts, and reduced-motion support. Browser storage failures are handled without breaking the page.
- **Kept the scope manageable:** The career quiz was cut as planned. The final MVP focuses on useful information, comparison, and practice rather than trying to recommend a career from a short quiz. A theme toggle remains outside this release.

The site uses no build step or third-party JavaScript dependencies. Its core files are `index.html`, `style.css`, and `script.js`.
