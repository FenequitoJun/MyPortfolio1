import React, {useState} from 'react';
import hangman from "../assets/hangman.png";
import dagyang from "../assets/Dagyang.png";
import witell from "../assets/witell.png";
import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import awesome from "../assets/awesome.png";
import '../styles/Projects.css';

function Proyectos() {

  const [filter, setFilter] = useState('Project');
const projects = [
  {
    id: 1,
    title: 'Dagyang(Prototype)',
    description: 'An Itinerary plan for tourist users',
    img: dagyang,
    tags: ['Figma'],
    category: 'Project',
    demo: 'https://www.figma.com/design/6VCuum000EhwclADlWQKkt/Dagyang-App--Wireframe-?node-id=0-1&p=f&t=S9IRRrJzKqj3x29U-0',
    highlight: ['Traveling'],
  },

  {
    id: 2,
    title: 'Witell',
    description: 'My personal portfolio website',
    img: witell,
    tags: ['Figma', 'Wireframe'],
    category: 'Projects',
    demo: 'https://www.figma.com/proto/yLmCi5P8qbLvMfbeY1tgGu/Untitled?node-id=76-119&p=f&t=izxNq8FczjOvKJKw-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    highlight: ['Responsive design', 'Modern UI'],
  },

  {
    id: 3,
    title: 'New Balance',
    description: 'Product Design',
    img: design1,
    tags: ['Figma', 'Design', 'Product'],
    category: 'Task',
    demo: 'https://www.figma.com/design/m5uL0wkqsZ6ecVptswIOjw/JunFenequito_UI-Challenge?node-id=7-34&t=6dnEELhG0DwAixFl-0',
    highlight: ['Design', 'Product'],
  },

  {
    id: 4,
    title: 'Music Interface',
    description: 'Simple Music player for users',
    img: design2,
    tags: ['Design', 'Product','UI'],
    category: 'Task',
    demo: 'https://www.figma.com/design/m5uL0wkqsZ6ecVptswIOjw/JunFenequito_UI-Challenge?node-id=78-6&t=6dnEELhG0DwAixFl-0',
    highlight: ['Basic math operations'],
  },

  {
    id: 5,
    title: 'MERN Stack Task',
    description: 'Full stack web app',
    img: awesome,
    tags: ['MongoDB', 'Express', 'React','Node'],
    category: 'Task',
    demo: 'https://awesometodotask.onrender.com/',
    highlight: ['Fetch weather data', 'Live updates'],
  },


];

const categories = [
  { id: 'Project', label: 'Project' },
  { id: 'Task', label: 'Task' },
  
];

  const filteredProjects = filter === 'Project'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className='projects'>
      <div className='container'>
        <h1 className='section-title'>
          <span className='number'></span> Projects
        </h1>
        <p className='section-subtitle'>
          Some projects that I have done
        </p>

        <div className='filters'>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className='projects-grid'>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}                          
              className='project-card'
              style={{animationDelay: `${index * 0.1}s`}}
            >
              
              <div className="project-image">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="project-overlay" aria-hidden="true">
                  <div className="overlay-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir GitHub de ${project.title} en nueva pestaña`}
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir demo de ${project.title} en nueva pestaña`}
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* (8) Contenido de la tarjeta */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {project.highlight?.length > 0 && (
                  <div className="project-highlights">
                    {project.highlight.map((h, i) => (
                      <span key={i} className="highlight">✓ {h}</span>
                    ))}
                  </div>
                )}

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Proyectos;   
