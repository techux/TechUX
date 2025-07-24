// Dark mode toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Load GitHub projects
const username = 'techux';
const projectsContainer = document.getElementById('projectsContainer');

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  .then(res => res.json())
  .then(repos => {
    projectsContainer.innerHTML = '';
    repos.forEach(repo => {
      if (!repo.fork) {
        const project = document.createElement('div');
        project.classList.add('project');
        project.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || 'No description'}</p>
          <p><strong>⭐ ${repo.stargazers_count}</strong></p>
        `;
        projectsContainer.appendChild(project);
      }
    });
  })
  .catch(err => {
    projectsContainer.innerHTML = 'Failed to load projects.';
    console.error(err);
  });
