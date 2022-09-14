import sanityClient from "utils/sanityClient";

const ProjectsPage = () => {
  return <div>ProjectsPage</div>;
};

export async function getStaticProps() {
  const projects = await sanityClient.fetch(`*[_type == "project"]`);
  console.log("projects: ", projects);
  return {
    props: {
      projects,
    },
  };
}

export default ProjectsPage;
