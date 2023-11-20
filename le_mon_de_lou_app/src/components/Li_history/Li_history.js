function Li_history({ projects }) {
    return (
        projects.map(project => (
            <li key={project.id} className="">
                <h3 className=''>{project.title}</h3>
                <img className="" src={project.image} alt={project.title}/>
                <p>{project.content}</p>
            </li>
    )));
}

export default Li_history