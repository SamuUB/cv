// Tema claro/oscuro
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
  
  // Cargar proyectos desde GitHub API
  async function loadProjects() {
    try {
      const response = await fetch('https://api.github.com/users/SamuUB/repos');
      const projects = await response.json();
      
      const container = document.getElementById('githubProjects');
      container.innerHTML = projects.map(project => `
        <div class="project">
          <h3><a href="${project.html_url}" target="_blank">${project.name}</a></h3>
          <p>${project.description || 'Sin descripción'}</p>
          <div class="tech-tags">
            <span class="tag">${project.language || 'Code'}</span>
            <span class="tag">⭐ ${project.stargazers_count}</span>
          </div>
        </div>
      `).join('');
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  }
  
  // Iniciar
  window.onload = () => {
    loadProjects();
    // Animación inicial
    document.querySelector('h1').style.opacity = '1';
  };