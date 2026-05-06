// ===== DADOS DOS PROJETOS =====
const projects = [
   {
    title: "Site Divinus Artis",
    description: "Site e-commerce para loja de arte",
    image: "assets/Site Divinus Artis.png",
    tags: ["Wix", "Low Code", "E-commerce"],
    liveUrl: "https://www.divinusartis.com/"
  },
  {
    title: "Site Heacher",
    description: "Site para startup de jogos",
    image: "assets/Site Heacher Games.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://heacher-games.vercel.app/"
  },
  {
    title: "Site Qema Design",
    description: "Site para empresa de design de interiores",
    image: "assets/Site Qema.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://qema-design-interiores.vercel.app/"
  },
   {
    title: "Site Hat Games",
    description: "Site estúdio de jogos indie",
    image: "assets/Site Hat Games.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://hatgames.vercel.app/"
  },
  {
    title: "Bug Royale",
    description: "Boardgame de battle royale com insetos",
    image: "assets/Bug Royale.png",
    tags: ["Game Design", "Boardgame", "Prototipagem"],
    liveUrl: "https://hatgames.vercel.app/bugRoyale.html"
  },
  {
    title: "Libroom",
    description: "Mobile Game de libras com puzzles",
    image: "assets/Libroom.png",
    tags: ["Game Design", "Mobile Game", "UI/UX Design"],
    liveUrl: "https://henrique-ambiel.itch.io/libroom"
  },
  {
    title: "Life Blaster",
    description: "Multiplayer online com temática de saúde",
    image: "assets/Life Blaster.png",
    tags: ["Game Design", "Multiplayer Game", "Enviroment Art"],
    liveUrl: "https://henrique-ambiel.itch.io/life-blaster"
  },
  {
    title: "Picadas Vorazes",
    description: "Boardgame integrado com aplicativo",
    image: "assets/Picadas Vorazes.png",
    tags: ["Game Design", "Boardgame", "Vetorial Art"],
    liveUrl: "https://henrique-ambiel.itch.io/picadas-vorazes-aplicativo"
  },
  {
    title: "Bionautica",
    description: "3D Game com temática ambiental",
    image: "assets/Bionautica.png",
    tags: ["Game Design", "3D Game", "3D Modeling"],
    liveUrl: "https://henrique-ambiel.itch.io/bionautica-versao-final"
  },
  {
    title: "Fast Snacks",
    description: "2D Game com temática social",
    image: "assets/Fast Snacks.png",
    tags: ["Game Design", "2D Game", "Pixel Art"],
    liveUrl: "https://henrique-ambiel.itch.io/fast-snacks"
  },
  {
    title: "Chroma",
    description: "Design gráfico de marca de música",
    image: "assets/Chroma.png",
    tags: ["Design Gráfico", "Branding", "Identidade Visual"],
    liveUrl: "https://www.behance.net/gallery/243038955/Chroma"
  },
];

// ===== TIMELINE (SOBRE MIM) =====
const timelineData = [
  {
    title: "O Começo da Jornada",
    description: "Comecei na tecnologia pela base: me formei em Mecatrônica. Foi onde aprendi lógica, sistemas e resolução de problemas reais.",
    tags: ["2020–2021", "Mecatrônica", "Lógica de Programação"]
  },
  {
    title: "Realidade profissional (chão de fábrica)",
    description: "Minha primeira experiência foi na indústria. Trabalhei com manutenção, solda e produção — aprendendo trabalho em equipe e disciplina.",
    tags: ["2022–2024", "Indústria", "Trabalho em Equipe"]
  },
  {
    title: "Virada (entrada em games)",
    description: "Foi aí que comecei a construir jogos. Iniciei a graduação em Design de Games e mergulhei no desenvolvimento.",
    tags: ["2023–2025", "Design de Games", "Desenvolvimento de Jogos"]
  },
  {
    title: "Resultados em games",
    description: "Desenvolvi 5 jogos acadêmicos. Um deles conquistou 🥈 2º lugar em um hackathon da universidade.",
    tags: ["2023–2025", "Design de Games", "Desenvolvimento de Jogos"]
  },
  {
    title: "Expansão criativa (empreendedorismo)",
    description: "Também atuei como gerente de uma marca musical. Com destaque para o trabalho em branding, produção gráfica e gestão criativa.",
    tags: ["2024", "Design Gráfico", "Branding"]
  },
  {
    title: "Entrada no mercado de tecnologia",
    description: "Dei o próximo passo: atuação profissional em TI. Trabalhei como analista de infraestrutura e depois desenvolvedor PHP.",
    tags: ["2024-2025", "Desenvolvimento Web", "Suporte Técnico"]
  },
  {
    title: "Desenvolvimento avançado",
    description: "Atuei com sistemas reais e complexos. Envolvendo frameworks, automatização de processos, versionamento e arquitetura de sistemas.",
    tags: ["2024-2025", "PHP/Laravel", "Playwright"]
  },
  {
    title: "Freelancer & sistemas",
    description: "Também atuei como desenvolvedor freelancer. Criei um e-commerce digital com ferramentas low-code.",
    tags: ["2026", "Wix", "Arquitetura de Sistemas"]
  },
  {
    title: "Hoje (momento atual)",
    description: "Hoje atuo como professor e desenvolvedor. Ensino tecnologia, desenvolvimento de games e inglês.",
    tags: ["2025 - Atualmente", "Ensino", "Desenvolvimento"]
  },
  {
    title: "Evolução contínua",
    description: "Estou em constante evolução. Atualmente cursando MBA em Ciência de Dados para entender a manipulação de dados e como aplica-la.",
    tags: ["2025 - Atualmente", "Ciência de Dados", "Estudo"]
  },
  {
    title: "Projeto pessoal (futuro)",
    description: "Também desenvolvo meus próprios jogos. Fundador do meu estúdio e focado em projetos autorais, tendo já um publicado e outros em desenvolvimentio.",
    tags: ["2025 - Atualmente", "Hat Games", "Desenvolvimento de Games"]
  },
];

// ===== SKILLS =====
const skills = [
  {
    title: "Desenvolvimento Web",
    icon: "fa-code",
    description: "Criação de aplicações web modernas, responsivas e performáticas",
    skills: [
      { name: "JavaScript/HTML/CSS", level: 90 },
      { name: "PHP/Laravel", level: 85 },
      { name: "Wix", level: 80 },
      { name: "Github", level: 95 }
    ]
  },
  {
    title: "Desenvolvimento de Games",
    icon: "fa-gamepad",
    description: "Design e desenvolvimento de jogos indie",
    skills: [
      { name: "Unity / C#", level: 85 },
      { name: "Godot / GDScript", level: 75 },
      { name: "Game Design", level: 90 },
      { name: "Pixel Art", level: 70 }
    ]
  },
  {
    title: "Design & Criativo",
    icon: "fa-palette",
    description: "UI/UX, identidade visual e arte digital",
    skills: [
      { name: "Figma", level: 70 },
      { name: "UI/UX Design", level: 85 },
      { name: "Design Systems", level: 80 },
      { name: "Ilustração Digital", level: 90 }
    ]
  }
];

// ===== ESTÚDIO =====
const studioData = {
  name: "Hat Games",
  description: "Jogos feitos para conectar, ensinar e transformar experiências em memórias.",
  image: "assets/Hat Games.jpg",
  url: "https://hatgames.vercel.app/",
  stats: [
    { value: "1", label: "Jogos" },
    { value: "40+", label: "Jogadores" },
    { value: "2+", label: "Jogos em produção" }
  ]
};

// ===== SERVIÇOS =====
const services = [
  {
    icon: "fa-gamepad",
    title: "Desenvolvimento de Games",
    description: "Criação de jogos 2D e 3D para PC, mobile e web.",
    audience: "Empresas, marcas e projetos pessoais que querem gamificar experiências.",
    tags: ["Game Design Document", "Prototipagem", "Desenvolvimento Completo"]
  },
  {
    icon: "fa-code",
    title: "Desenvolvimento Web",
    description: "Sites e aplicações modernas, responsivas e otimizadas.",
    audience: "Startups, pequenas empresas e profissionais que precisam de presença digital.",
    tags: ["Landpages", "E-commerce", "Web Apps"]
  },
  {
    icon: "fa-graduation-cap",
    title: "Aulas Particulares",
    description: "Mentoria personalizada em programação, game dev e design.",
    audience: "Iniciantes ou profissionais buscando evolução.",
    tags: ["Programação", "Game Dev", "Design"]
  }
];

// ===== RENDER PROJETOS =====
function renderProjects() {
  const container = document.getElementById("projects-grid");

  container.innerHTML = "";

  projects.forEach(project => {

    const card = document.createElement("div");
    card.className = "project-card-new";

    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">

        <div class="project-overlay">
          <a href="${project.liveUrl}" target="_blank" class="btn-primary small">
            Ver Projeto
          </a>
        </div>
      </div>

      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}
 // ===== RENDER TIMELINE =====
function renderTimeline() {
  const container = document.querySelector(".timeline");

  container.innerHTML = "";

  timelineData.forEach((item, index) => {

    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";

    timelineItem.innerHTML = `
      <div class="timeline-dot"></div>

      <div class="timeline-card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>

        <div class="tags">
          ${item.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    `;

    container.appendChild(timelineItem);
  });
}

// ===== RENDER SKILLS =====
function renderSkills() {
  const container = document.getElementById("skills-container");

  container.innerHTML = "";

  skills.forEach(category => {

    const card = document.createElement("div");
    card.className = "skill-card";

    card.innerHTML = `
      <div class="skill-icon">
        <i class="fas ${category.icon}"></i>
      </div>

      <h3>${category.title}</h3>
      <p class="skill-desc">${category.description}</p>

      <div class="skill-list">
        ${category.skills.map(skill => `
          <div class="skill-item">
            <div class="skill-header">
              <span>${skill.name}</span>
              <span>${skill.level}%</span>
            </div>

            <div class="skill-bar">
              <div class="skill-fill" data-width="${skill.level}%"></div>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(card);
  });
}
function animateSkills() {
  const fills = document.querySelectorAll(".skill-fill");

  fills.forEach(fill => {
    const width = fill.getAttribute("data-width");

    setTimeout(() => {
      fill.style.width = width;
    }, 100);
  });
}

//RENDER ESTÚDIO
function renderStudio() {
  const container = document.getElementById("studio-preview");

  container.innerHTML = `
    <a href="${studioData.url}" target="_blank" class="studio-card">

      <div class="studio-window">
        <div class="studio-image">
          <img src="${studioData.image}" alt="Hat Games">
        </div>

      </div>

      <div class="studio-stats">
        ${studioData.stats.map(stat => `
          <div class="stat">
            <h3>${stat.value}</h3>
            <p>${stat.label}</p>
          </div>
        `).join("")}
      </div>

    </a>
  `;
}

//RENDER SERVIÇOS
function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  container.innerHTML = "";

  services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";

    card.innerHTML = `
      <div class="service-icon">
        <i class="fas ${service.icon}"></i>
      </div>

      <h3>${service.title}</h3>
      <p class="service-desc">${service.description}</p>

      <div class="service-box">
        <span>PARA QUEM:</span>
        <p>${service.audience}</p>
      </div>

      <div class="tags">
        ${service.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>

      <a href="#contato" class="btn-outline service-btn">
        Contato →
      </a>
    `;

    container.appendChild(card);
  });
}

// ===== MENU MOBILE =====
function initMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// ===== FORM =====
function initForm() {
  const form = document.getElementById("form-contato");

  emailjs.init("SUA_PUBLIC_KEY"); // pega no EmailJS

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", this)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Erro ao enviar. Tente novamente.");
      });
  });
}

// ===== NOVO: RENDER TIMELINE E HABILIDADES =====
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderTimeline();
  renderSkills();
  animateSkills();
  renderStudio();
  renderServices();
  initMenu();
  initForm();

  setTimeout(animateSkills, 200);
});