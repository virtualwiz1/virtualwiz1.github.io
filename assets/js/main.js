let getCurrentTimeStamp = () => {
    let currentTimeStamp = new Date();
    document.getElementById("current-timestamp").setAttribute("title", currentTimeStamp.toLocaleDateString("en-us", {weekday:'long', month:'long', day:'2-digit', year:'numeric'}));
    document.getElementById("current-time").innerText = currentTimeStamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById("current-date").innerText = currentTimeStamp.toLocaleDateString();
    setTimeout(getCurrentTimeStamp,1000);
}

getCurrentTimeStamp();

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
}, false);

const mainArea = document.querySelector("main");
const mainDesktop = document.querySelector('#desktop');

const aboutSection = document.querySelector('.about');
const skillsSection = document.querySelector('.skills');
const projectsSection = document.querySelector('.projects');
const contactSection = document.querySelector('.contact');

const powerOff = document.querySelector('#powerOff');
const textEditor = document.querySelector('#text-editor');
const terminal = document.querySelector('#terminal');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');

const startMenuSection = document.querySelector('#start-menu-icon');
const startMenuBox = document.querySelector('.start-menu-elements');

const upArrowSection = document.querySelector('#up-arrow');
const upArrowBox = document.querySelector('.up-arrow-elements');

const messageIcon = document.querySelector('#message-icon');
const messageBox = document.querySelector('.message-box-elements');

document.body.addEventListener('click', (event) => {
    if(startMenuSection.contains(event.target)){
        if(startMenuSection.hasAttribute("clicked")){
            startMenuSection.removeAttribute("clicked");
            startMenuSection.removeAttribute("style");
            startMenuBox.style.display = "none";
            return;
        }
        startMenuSection.setAttribute("clicked", "true");
        startMenuSection.setAttribute("style", "background-color: rgba(255, 255, 255, 0.1) !important");
        startMenuBox.style.display = "flex";
    } else if(!startMenuSection.contains(event.target) && !startMenuBox.contains(event.target)){
        if(startMenuSection.hasAttribute("clicked")) startMenuSection.removeAttribute("clicked");
        if(startMenuSection.hasAttribute("style")) startMenuSection.removeAttribute("style");
        startMenuBox.style.display = "none";
    }

    if(upArrowSection.contains(event.target)){
        if(upArrowSection.hasAttribute("clicked")){
            upArrowSection.removeAttribute("clicked");
            upArrowBox.style.display = "none";
            return;
        }
        upArrowSection.setAttribute("clicked", "true");
        upArrowBox.style.display = "flex";
    } else if(!upArrowBox.contains(event.target)){
        if(upArrowSection.hasAttribute("clicked")) upArrowSection.removeAttribute("clicked");
        upArrowBox.style.display = "none";
    }

    if(messageIcon.contains(event.target)){
        if(messageIcon.hasAttribute("clicked")){
            messageIcon.removeAttribute("clicked");
            messageBox.style.display = "none";
            return;
        }
        messageIcon.setAttribute("clicked", "true");
        messageBox.style.display = "flex";
    } else if(!messageBox.contains(event.target)){
        if(messageIcon.hasAttribute("clicked")) messageIcon.removeAttribute("clicked");
        messageBox.style.display = "none";
    }
}, true)

const minimizeAllWindows = () => {
    let openWindows = document.querySelectorAll('.wb-min');
    for(let i=0; i<openWindows.length; i++){
        openWindows[i].click();
    }
}

powerOff.addEventListener('click', () => {
    powerOff.style = "pointer-events: none;";
    const powerOffBox = new WinBox("🤖 | System Alert |", {
        class: ["modal", "powerOffDesign"],
        background: "#8754ff",
        border: 2,
        x: "center",
        y: "center",
        html: "The system will restart in&nbsp;<span id='restartDuration'></span>&nbsp;seconds.",
        width: "80%",
        height: "20%",
        bottom:48,
        onfocus: () => {
            setTimeout(() => {
                location.reload();
            }, 10000);
            let restartTime = 10;
            setInterval(() => {
                if(restartTime==0) return;
                document.getElementById("restartDuration").innerHTML = restartTime;
                restartTime--;
            }, 1000);
        },
        onclose: () => {
            powerOff.style = "pointer-events: initial";
        }
    })
})

textEditor.addEventListener('click', () => {
    textEditor.style = "pointer-events: none; border-bottom: 2px solid rgba(255, 255, 255, 0.5);";
    const textEditorWindow = new WinBox("📰 WizCode", {
        class: ["no-full", "modern"],
        background: "#8754ff",
        border: 2,
        url: "github1s.com/virtualwiz1/virtualwiz1.github.io/blob/main/index.html",
        x: Math.floor(Math.random() * 10)+"%",
        y: Math.floor(Math.random() * 10)+"%",
        width: "80%",
        height: "80%",
        bottom:48,
        onclose: () => {
            textEditor.style = "pointer-events: initial";
        }
    })
})

terminal.addEventListener('click', () => {
    terminal.style = "pointer-events: none; border-bottom: 2px solid rgba(255, 255, 255, 0.5);";
    const terminalWindow = new WinBox("⋤⋥ WizTerminal", {
        class: ["no-full", "modern"],
        background: "#8754ff",
        border: 2,
        url: "terminal.html",
        x: "center",
        y: "center",
        width: "70%",
        height: "70%",
        bottom:48,
        onclose: () => {
            terminal.style = "pointer-events: initial";
        }
    })
    window.addEventListener('message', function(event) {
        if(event.origin !== window.location.protocol + "//" + window.location.host) return;
        const data = event.data;
        if(data == "closeTerminal") terminalWindow.close();
    });
})

about.addEventListener('click', () => {
    about.style = "pointer-events: none;";
    const aboutWindow = new WinBox("😊 About Me", {
        class: ["no-full", "modern", "desktopElementsDesign"],
        background: "#8754ff",
        border: 2,
        mount: aboutSection,
        x: Math.floor(Math.random() * 30)+"%",
        y: Math.floor(Math.random() * 30)+"%",
        width: "60%",
        height: "60%",
        bottom:48,
        onclose: () => {
            about.style = "pointer-events: initial";
        },
    });
})

skills.addEventListener('click', () => {
    skills.style = "pointer-events: none;";
    const skillsWindow = new WinBox("👻 My Skills", {
        class: ["no-full", "modern", "desktopElementsDesign"],
        background: "#8754ff",
        border: 2,
        mount: skillsSection,
        x: Math.floor(Math.random() * 30)+"%",
        y: Math.floor(Math.random() * 30)+"%",
        width: "60%",
        height: "60%",
        bottom:48,
        onclose: () => {
            skills.style = "pointer-events: initial";
        },
    });
})

projects.addEventListener('click', () => {
    projects.style = "pointer-events: none;";
    const projectsWindow = new WinBox("🛠 My Projects", {
        class: ["no-full", "modern", "desktopElementsDesign"],
        background: "#8754ff",
        border: 2,
        mount: projectsSection,
        x: Math.floor(Math.random() * 30)+"%",
        y: Math.floor(Math.random() * 30)+"%",
        width: "60%",
        height: "50%",
        bottom:48,
        onclose: () => {
            projects.style = "pointer-events: initial";
        },
    });
})

contact.addEventListener('click', () => {
    contact.style = "pointer-events: none;";
    const contactWindow = new WinBox("📱 Contact Me", {
        class: ["no-full", "modern", "desktopElementsDesign"],
        background: "#8754ff",
        border: 2,
        mount: contactSection,
        x: Math.floor(Math.random() * 30)+"%",
        y: Math.floor(Math.random() * 30)+"%",
        width: "60%",
        height: "60%",
        bottom:48,
        onclose: () => {
            contact.style = "pointer-events: initial";
        },
    });
})