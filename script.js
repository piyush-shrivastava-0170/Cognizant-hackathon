// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('projectTitle').value;
    const description = document.getElementById('projectDescription').value;
    const teamMembers = [
        document.getElementById('teamMember1').value,
        document.getElementById('teamMember2').value,
        document.getElementById('teamMember3').value,
        document.getElementById('teamMember4').value
    ].filter(member => member !== "");

    const theme = document.getElementById('theme').value;

    const project = {
        title: title,
        description: description,
        teamMembers: teamMembers,
        theme: theme
    };

    addProjectToList(project);
    clearForm();
});

let projects = [];

function addProjectToList(project) {
    projects.push(project);
    displayProjects();
}

function displayProjects() {
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = '';

    projects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <strong>Title:</strong> ${project.title}<br>
            <strong>Description:</strong> ${project.description}<br>
            <strong>Team:</strong> ${project.teamMembers.join(', ')}<br>
            <strong>Theme:</strong> ${project.theme}
        `;
        projectList.appendChild(projectItem);
    });
}

function searchProject() {
    const searchTitle = document.getElementById('searchTitle').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    const filteredProjects = projects.filter(project => project.title.toLowerCase().includes(searchTitle));

    if (filteredProjects.length > 0) {
        filteredProjects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.innerHTML = `
                <strong>Title:</strong> ${project.title}<br>
                <strong>Description:</strong> ${project.description}<br>
                <strong>Team:</strong> ${project.teamMembers.join(', ')}<br>
                <strong>Theme:</strong> ${project.theme}
            `;
            searchResults.appendChild(projectItem);
        });
    } else {
        searchResults.innerHTML = 'No projects found with that title.';
    }
}

function clearForm() {
    document.getElementById('projectTitle').value = '';
    document.getElementById('projectDescription').value = '';
    document.getElementById('teamMember1').value = '';
    document.getElementById('teamMember2').value = '';
    document.getElementById('teamMember3').value = '';
    document.getElementById('teamMember4').value = '';
    document.getElementById('theme').value = 'Gama';
}
