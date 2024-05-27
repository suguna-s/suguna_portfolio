import ProjectCard from './ProjectCard';
import { projects } from './data';

const Projects = () => {
  return (
    <section className="bg-sky-200" id="projects">
      <div className="py-24 px-16 mx-auto max-w-7xl ">
        <h3 className="py-6 text-3xl text-center tracking-wide font-semibold">
          Projects
        </h3>
        <div className=" py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
