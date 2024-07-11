import projects from '../../data/project.json'
import { useLoaderData } from "react-router-dom";
import Frise_story from '../../components/Frise/Frise_story';
import "./Story.css"

export async function getStory(storyId) {
    let story = projects[0].story.find(project => project.storyId === storyId);
    return story ?? null;
}

export async function loader({ params }) {
    const project = await getStory(params.storyId);
    return { project };
}

function Story() {
    const { project } = useLoaderData();
    return ([
        <div className="timeline">
            <Frise_story id_story={project.id}/>
        </div>,
        <ul className='ul_history'>
            <h2>{project.storyTitle}</h2>
        </ul>,
        project.content.map(project => (
            <div key={project.id} className='div_story'>
                <h3 id={project.id}>{project.title}</h3>
                { project.content.map(description => (
                    <p className='p_story'>{description}</p>
                ))}
            </div>
        ))]);
}

export default Story;