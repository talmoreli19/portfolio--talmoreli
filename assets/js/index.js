

//nav bar 

const navLinks = [
    { text: "Home", href: "#" },
    { text: "About", href: "#section1" },
    { text: "Contact", href: "#contact-us" },
];

const navbarList = document.getElementById("navbar-list");

navLinks.forEach(linkData => {
    const listItem = document.createElement("li");
    listItem.className = "nav-item";
    const anchor = document.createElement("a");
    anchor.className = "nav-link";
    anchor.textContent = linkData.text;
    anchor.href = linkData.href;
    listItem.appendChild(anchor);
    navbarList.appendChild(listItem);
});




//about me section

const aboutParagraph1 = document.getElementById("about-paragraph-1");
const aboutParagraph2 = document.getElementById("about-paragraph-2");

aboutParagraph1.textContent = "Hi, I'm Tal Moreli, a passionate Fullstack Developer based in [Israel]. I specialize in JavaScript, TypeScript, Sass, CSS, Bootstrap, and React. I love building web applications and creating elegant solutions to complex problems.";

aboutParagraph2.textContent = "With a strong foundation in both front-end and back-end development, I enjoy turning ideas into functional and user-friendly websites and applications. I'm constantly learning and staying up-to-date with the latest web development trends and technologies.";

const technologiesList = document.getElementById("technologies-list");
const technologies = [
    { iconClass: "fab fa-html5", imgSrc: "/assets/images/html5.png" },
    { iconClass: "fab bo-css3", imgSrc: "/assets/images/bootstarp.png" },
    { iconClass: "fab ja-css2", imgSrc: "/assets/images/java.png" },
    { iconClass: "fab ts-css4", imgSrc: "/assets/images/ts.png" },
    { iconClass: "fab re-css5", imgSrc: "/assets/images/react.png" }
];

technologies.forEach(tech => {
    const icon = document.createElement("i");
    icon.className = tech.iconClass;

    const img = document.createElement("img");
    img.src = tech.imgSrc;
    img.alt = "";

    icon.appendChild(img);
    technologiesList.appendChild(icon);
});


//project setion
const projectsContainer = document.querySelector(".project-cards");

const projects = [
    {
        imageUrl: "/assets/images/drawingapp.png",
        title: "Drawing App",
        description: "Here's my drawing app built with Bootstrap, JavaScript, and CSS.",
        githubLink: "https://github.com/talmoreli19/drawingapp.git",
    },
    {
        imageUrl: "/assets/images/tictactoe.png",
        title: "Tic Tac Toe Game",
        description: "Here's my tic-tac-toe game built with CSS and JavaScript.",
        githubLink: "https://github.com/talmoreli19/tic-tac-toe.git",
    },
    {
        imageUrl: "/assets/images/notetaking.png",
        title: "Note-taking-app",
        description: "Here's my note-taking app built with Sass, CSS, and JavaScript.",
        githubLink: "https://github.com/talmoreli19/note-taking.git",
    },
    {
        imageUrl: "/assets/images/todolist.png",
        title: "To-do-list",
        description: "Here's my to-do-list app built with Bootstrap, JavaScript, and CSS.",
        githubLink: "https://github.com/talmoreli19/Todo-list.git",
    },
    {
        imageUrl: "/assets/images/snakegame.png",
        title: "Snake-game",
        description: "Here's my snake game built with JavaScript and CSS.",
        githubLink: "https://github.com/talmoreli19/snake-game.git",
    },
    {
        imageUrl: "/assets/images/calculatorapp.png",
        title: "Calculator",
        description: "Here's my calculator app built with TypeScript and CSS.",
        githubLink: "https://github.com/talmoreli19/calculatorproject.git",
    },
];

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.className = "col-md-4 col-sm-12";

    const projectCardContent = `
        <div class="project-card">
            <img class="project-image img-fluid" src="${project.imageUrl}" alt="${project.title} Image">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.githubLink}" class="bi bi-github">To Github</a>
        </div>
    `;

    projectCard.innerHTML = projectCardContent;
    projectsContainer.appendChild(projectCard);
});

const downloadButtonContainer = document.getElementById("download-button-container");
const downloadButton = document.createElement("a");
downloadButton.href = "/assets/SixProjects.zip";
downloadButton.download = "javascriptprojects.zip";
downloadButton.className = "btn btn-primary";
downloadButton.textContent = "Download All Projects";

downloadButtonContainer.appendChild(downloadButton);



// contact section

function createContactSection() {
    
    const contactSection = document.createElement("section");
    contactSection.id = "contact-us";
    contactSection.className = "contact-section";

    const contactContent = document.createElement("div");
    contactContent.className = "contact-content";
    
   
    const contactForm = document.createElement("div");
    contactForm.className = "contact-form";
    
 
    const formTitle = document.createElement("h2");
    formTitle.textContent = "Contact Me";
    
    const form = document.createElement("form");
    form.action = "https://formspree.io/f/xleybojk";
    form.method = "POST";
    
    const nameLabel = document.createElement("label");
    nameLabel.htmlFor = "name";
    nameLabel.textContent = "Name:";
    
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.required = true;
    
    const emailLabel = document.createElement("label");
    emailLabel.htmlFor = "email";
    emailLabel.textContent = "Email:";
    
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;
    
    const subjectLabel = document.createElement("label");
    subjectLabel.htmlFor = "subject";
    subjectLabel.textContent = "Subject:";
    
    const subjectInput = document.createElement("input");
    subjectInput.type = "text";
    subjectInput.id = "subject";
    subjectInput.name = "subject";
    subjectInput.required = true;
    
    const messageLabel = document.createElement("label");
    messageLabel.htmlFor = "message";
    messageLabel.textContent = "Message:";
    
    const messageTextarea = document.createElement("textarea");
    messageTextarea.id = "message";
    messageTextarea.name = "message";
    messageTextarea.rows = "4";
    messageTextarea.required = true;
    
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Send";
    

    const imageIconsContainer = document.createElement("div");
    imageIconsContainer.className = "image-icons-container";
   
    const facebookLink = document.createElement("a");
    facebookLink.href = "https://www.facebook.com/tal.moreli.1/";
    facebookLink.target = "_blank";
    
    const facebookIcon = document.createElement("img");
    facebookIcon.src = "/assets/images/facebook.png";
    facebookIcon.alt = "Facebook Icon";
    
  
    const whatsappLink = document.createElement("a");
    whatsappLink.href = "https://wa.me/+9720508562651?text=hi,%20i%20have%20some%20questions%20on%20your%20projects";
    whatsappLink.target = "_blank";
    
    const whatsappIcon = document.createElement("img");
    whatsappIcon.src = "/assets/images/whatapp.png";
    whatsappIcon.alt = "WhatsApp Icon";
    
    const instagramLink = document.createElement("a");
    instagramLink.href = "https://www.instagram.com/tal__moreli/";
    instagramLink.target = "_blank";
    
    const instagramIcon = document.createElement("img");
    instagramIcon.src = "/assets/images/instgram3.png";
    instagramIcon.alt = "Instagram Icon";
    
   
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(subjectLabel);
    form.appendChild(subjectInput);
    form.appendChild(messageLabel);
    form.appendChild(messageTextarea);
    form.appendChild(submitButton);
    
    facebookLink.appendChild(facebookIcon);
    whatsappLink.appendChild(whatsappIcon);
    instagramLink.appendChild(instagramIcon);
    
    imageIconsContainer.appendChild(facebookLink);
    imageIconsContainer.appendChild(whatsappLink);
    imageIconsContainer.appendChild(instagramLink);
    
    contactForm.appendChild(formTitle);
    contactForm.appendChild(form);
    contactForm.appendChild(imageIconsContainer);
    
    contactContent.appendChild(contactForm);
    
    contactSection.appendChild(contactContent);

    document.body.appendChild(contactSection);
}

createContactSection();





 // footer section
function createFooter() {
 
    const footer = document.createElement("footer");
    footer.className = "footer";
    
    const containerDiv = document.createElement("div");
    containerDiv.className = "container";
    
    
    const paragraph = document.createElement("p");
    paragraph.className = "text-center";
    paragraph.textContent = "Generated by Tal Moreli";
    

    containerDiv.appendChild(paragraph);
    footer.appendChild(containerDiv);
    
    document.body.appendChild(footer);
}


createFooter();








