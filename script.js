//Formação Acadêmica
const education = [
  {
    title: "Superior em Tecnologia de Jogos Digitais",
    institution: "PUC Campinas",
    period: "2023 - 2025",
  },
  {
    title: "Aprendizagem Industrial em Solda",
    institution: "SENAI",
    period: "2023 - 2023",
  },
  {
    title: "Ensino Técnico em Mecatrônica",
    institution: "FIEC",
    period: "2020 - 2021",
  },
];

//Cursos e Certificações
const courses = [
  {
    title: "Formação Começando em Inteligência Artificial",
    platform: "Alura",
    year: "2025",
  },
  {
    title: "Formação Aprenda a Programar em PHP com orientação a objetos",
    platform: "Alura",
    year: "2024",
  },
  {
    title: "Programação Oracle - Java Fundamentals and Foundations",
    platform: "SENAI",
    year: "2023",
  },
  {
    title: "Inglês",
    platform: "Michigan",
    year: "2018",
  },
];

//Projetos
const projects = [
  {
    title: "Site da Hat Games",
    description: "Site profissional do meu estúdio de desenvolvimento de jogos",
    tags: ["Javascript", "HTML5", "CSS"],
    link: "https://hatgames.vercel.app/"
  },
  {
    title: "Site da Qema",
    description: "Site profissional para o estúdio de design de interiores Qema",
    tags: ["Javascript", "HTML5", "CSS"],
    link: "https://qema-design-interiores.vercel.app/"
  },
  {
    title: "Bug Royale",
    description: "Primeiro jogo desenvoldido pelo estúdio de jogos Hat Games",
    tags: ["Game Design", "Arte Vetorial", "Illustrator"],
    link: "https://hatgames.vercel.app/bugRoyale.html"
  },
];

//Carregar Formação
function renderDegrees() {
  const container = document.getElementById("degrees-list");

  education.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h4>${item.title}</h4>
      <p>${item.institution} • ${item.period}</p>
    `;

    container.appendChild(card);
  });
}

//Carregar Cursos
function renderCourses() {
  const container = document.getElementById("courses-list");

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h4>${course.title}</h4>
      <p>${course.platform} • ${course.year}</p>
    `;

    container.appendChild(card);
  });
}

//Carregar Projetos
function renderProjects() {
  const container = document.getElementById("projects-grid");

  projects.forEach(project => {
    const card = document.createElement("a");
    card.href = project.link;
    card.target = "_blank"; // abre em nova aba
    card.className = "project-card";

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderDegrees();
  renderCourses();
  renderProjects();
});
