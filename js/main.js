window.addEventListener('scroll', () => {
  const gradient = document.querySelector('.bottom-gradient');
  
  const distanceToBottom = document.documentElement.scrollHeight - (window.innerHeight + window.scrollY);

  if (distanceToBottom < 50) {
    gradient.classList.add('hidden');
  } else {
    gradient.classList.remove('hidden');
  }
});

document.querySelectorAll('.pill-nav-bar .nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    document.querySelectorAll('.pill-nav-bar .nav-link').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});

const projects = [
  {
    title: "KPA-KPI",
    image: "../assets/kpa-kpi.png",
    tags: ["Godot", "GDScript", "BASH", "FISH"],
    description: "A modular and dynamic KPA-KPI project built on Godot using GDScript. Works across multiple platforms and servers work across Linux and Windows. Secured using IPC calls and Cryptography. The project is designed to be easily extendable and customizable, allowing for the addition of new features and functionality as needed."
  },
  {
    title: "RUNEAK",
    image: "../assets/runeak.png",
    tags: ["Roblox", "LUAU", "Blender"],
    description: "A fully 1 click deployment solution for Roblox games that intend to use custom characters with different properties or attributes. This system is extremely modular and robust. It is designed in mind to be extended, used, and customized. No module is inter-dependent and it is encouraged to either iterate on the current modules or replace them for better ones. It also handles specific client-server replication in the backend without the developer having to worry about it."
  }
];

function renderWorkGrid() {
  const container = document.getElementById("work-grid");
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <article class="floating-card" style="width: 100%; height: auto; padding: 1.5rem; display: flex; flex-direction: column;">
        <h2 style="font-size: 1.35rem; font-weight: 600; line-height: 1.4; color: #ffffff; margin-bottom: 1rem; margin-top: 0;">
          ${project.title}
        </h2>
        <div style="width: 100%; height: 100%; border-radius: 100px; margin-bottom: 1rem;">
          <img src="${project.image}" alt="${project.title}" class="card-img" style="width: 100%; height: 100%; object-fit: contain; padding-top: 0;">
        </div>
        <div style="display: flex; gap: 12px; font-size: 0.85rem; color: rgba(255, 255, 255, 0.55);">
          ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
      </article>
      <p style="font-size: 0.95rem; line-height: 1.5; color: rgba(255, 255, 255, 0.7); padding: 0 0.5rem; margin: 0;">
        ${project.description}
      </p>
    </div>
  `).join('');
}

document.addEventListener("DOMContentLoaded", renderWorkGrid);