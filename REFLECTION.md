# Project 02 Reflection

**Arnold Archaga · CMPA 4303**

## Decisions

One of the main decisions for my Entry-Level Tech Career Guide was keeping the project focused on four paths: IT Support, Software Development, Data Analysis, and Cybersecurity. I wanted someone who is interested in technology to have a starting point without having to sort through a huge list of jobs. Since I am also working toward a technology career, that purpose made sense to me. I wanted the site to explain what someone could actually practice, instead of only listing job titles.

I kept HTML, CSS, and JavaScript instead of switching to a framework. The project did not need user accounts or a database, and changing tools would have added more work without solving the main problems. I also followed my iteration plan by leaving out the career quiz. A few questions would not give someone enough information to choose a career. Comparing the paths and trying a small project seemed more useful.

Another important decision was using one career data object for the profiles, comparison tool, and starting plans. Before that, some information was written in the HTML while other information was in JavaScript. That made it easier for names and descriptions to become inconsistent. Keeping the information together makes future updates more manageable.

## What worked

The filter and comparison tool gave the site a clear purpose beyond reading a page. A visitor can focus on one path or compare two options without opening separate pages. The final version builds on those interactions by adding responsibilities, preparation guidance, certification information, and beginner projects. I am most satisfied with how the information now leads into an action someone can take.

The practice checklist also fits the project well. Visitors can choose a path, mark completed practice tasks, and return to their progress in the same browser. Using localStorage made that possible without adding a login process. It was important to explain that progress does not follow someone to another device, because otherwise the feature could give the wrong impression.

Keeping the original blue color scheme helped the final version feel connected to Project 01. The improvements are mostly in the organization, content, and interactions. A selected career card now uses the available space, and the plans and checklists stack on smaller screens.

## What I would do differently

If I started over, I would organize the career content before spending as much time on the appearance. I would make a list of the information every profile needed, then build the layout around that list. That would have helped avoid the early version where the cards looked consistent but only included a short description and a few skills.

I would also plan the repeated information earlier. Choosing consistent labels and a shared data structure at the beginning would have reduced the cleanup later. Another improvement would be checking the small-screen layout as each feature was added, especially longer labels and comparison sections. A layout that looks balanced with short content can change quite a bit when more useful information is added.

## What I learned

This project showed me that finishing a website involves more than making its buttons work. The content needs to answer the visitor's next question. In P01, someone could identify a career that sounded interesting, but the guide did not explain enough about how to begin. Adding projects and path-specific steps made the experience more complete.

I also learned to think about what happens outside the normal interaction. Both comparison selections can be the same, browser storage can be unavailable, and people can navigate with a keyboard. Those situations need clear behavior too.

Working full time while taking classes makes it important for me to keep the scope realistic. The iteration plan helped separate useful improvements from extra features. The final project is stronger because the main flow is more complete: explore a career, compare it with another option, choose a starting plan, and practice the skills.
