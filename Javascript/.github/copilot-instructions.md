# Copilot Instructions for AI Coding Agents

## Project Overview
This repository contains JavaScript web development exercises and demos, organized by topic and task. The structure is designed for hands-on practice, with each task typically including an `index.html` and a corresponding `script.js` file. Tailwind CSS is used for rapid UI prototyping via CDN.

## Directory Structure
- `demos/` — Example solutions and phase documentation.
- `Practice/Set-1/` — Practice tasks with HTML/JS files.
- `Questions/` — Contains multiple question sets and tasks, each in its own folder.

## Key Patterns & Conventions
- **Task Organization:** Each task is self-contained in its own folder (e.g., `Questions/task5/`).
- **Frontend Only:** No build tools or backend integration; all logic is in HTML/JS files.
- **Tailwind CSS:** Included via CDN in `<head>`. Use Tailwind utility classes for styling.
- **Script Linking:** Each `index.html` links to a local `script.js` for interactivity.
- **Component Structure:** UI elements (e.g., comments, buttons) are structured with semantic HTML and Tailwind classes. Example:
  ```html
  <div class="comment bg-white p-4 rounded shadow mb-4">
    <div class="flex items-center mb-2">
      <span class="font-semibold text-gray-800 mr-2">user1</span>
      <span class="text-xs text-gray-500">2 hours ago</span>
    </div>
    <p class="text-gray-700 mb-2">This is the first comment. I love this post!</p>
    <div class="flex space-x-4 text-sm text-gray-500">
      <button class="reply hover:underline">Reply</button>
      <button class="hover:underline">Upvote</button>
      <button class="hover:underline">Downvote</button>
    </div>
  </div>
  ```
- **No Frameworks:** Do not use React, Vue, or other JS frameworks. Stick to vanilla JS and HTML.

## Developer Workflows
- **Preview:** Open `index.html` in a browser to view and test changes. No build step required.
- **Debugging:** Use browser DevTools for JS debugging and inspecting Tailwind styles.
- **No Automated Tests:** There are no test scripts or test runners in this codebase.

## External Dependencies
- **Tailwind CSS:** Only external dependency, loaded via CDN. No npm or package management.

## Integration Points
- **None:** Each task is isolated; no cross-task communication or shared state.

## Recommendations for AI Agents
- When adding new tasks, follow the existing folder structure and naming conventions.
- Use Tailwind utility classes for all styling.
- Keep JS logic in the corresponding `script.js` file for each task.
- Reference existing tasks for examples of UI and JS patterns.

---
If any section is unclear or missing important details, please provide feedback for further refinement.
