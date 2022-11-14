import { ProjectCard } from '~/components/ProjectCard';
import { DefaultLayout } from '~/layouts/default';
import { Project, Projects } from '~/lib/types';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next/types';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/luxass/luxass/main/assets/projects.json'
  );
  const { projects } = (await res.json()) as Projects;

  for (let i = projects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // projects[i] -> projects[j]
    // projects[j] -> projects[i]
    [projects[i], projects[j]] = [projects[j], projects[i]];
  }

  return {
    props: {
      projects: projects
    },
    revalidate: 3600
  };
};

const ProjectsPage: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <DefaultLayout title="Lucas Norgaard - Projects">
      <div className="p-3">
        <section className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Projects
          </h1>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            These are some of my projects, I&apos;ve been working on.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project.url} project={project} />
            ))}
        </section>
      </div>
    </DefaultLayout>
  );
};

export default ProjectsPage;
