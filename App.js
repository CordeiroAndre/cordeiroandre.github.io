import data from "./Content/content.json" assert { type: "json" };
const tagBadge = 'https://img.shields.io/badge/{property}-e7e8ec?style=for-the-badge'

document.title = data["Page-Title"];
document.getElementById('main-title').innerText = data["Main-Title"];
document.getElementById('main-description').innerText = data["Main-Description"];
document.getElementById('spline').src = data["Spline-Url"];


function createListItem(unordedListID, JsonFieldName, CssClassMark) {
    var professionalProjectsList = document.getElementById(unordedListID);
    data[JsonFieldName].forEach(project => {
        var projectListElement = document.createElement("li");

        var projectTitle = document.createElement("span");
        projectTitle.classList.add(CssClassMark);
        projectTitle.innerText = project.Title;
        projectListElement.appendChild(projectTitle);

        projectListElement.appendChild(document.createElement("br"));

        var projectDescription = document.createElement("span");
        projectDescription.innerText = project.Description;
        projectListElement.appendChild(projectDescription);

        var tagsWrapper = document.createElement("div");
        tagsWrapper.classList.add('tags-wrapper');
        projectListElement.appendChild(tagsWrapper);

        project.Tags.forEach(Tag => {
            var tag = document.createElement("img");
            tag.src = tagBadge.replace('{property}', Tag);
            tagsWrapper.appendChild(tag);
        });

        professionalProjectsList.appendChild(projectListElement);
    });

}

createListItem('professional-projects', 'Professional-Projects', 'mark-pink-light');
createListItem('education', 'Education', 'mark-green-light');

