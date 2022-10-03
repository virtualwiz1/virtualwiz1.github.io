const initialSection = document.querySelector("#initial");

const initialPrompt = "<span class='prompt'>PS C:\\web\\VirtualWiz></span> <input type='text' id='userInput' placeholder='Type a command!' autofocus autocomplete='off'><br/><div class='systemOutput'></div>";
initialSection.innerHTML = initialPrompt;

let inputField = document.querySelector("#userInput");
let outputField = document.querySelectorAll(".systemOutput");

let keepValue = inputField.value;

const terminalCommands = {
    "help": "Use commands like <strong>whoami</strong>, <strong>intro</strong>, <strong>about</strong>, <strong>age</strong>, <strong>birthday</strong>, <strong>hobbies</strong>, <strong>skills</strong>, <strong>profession</strong>, <strong>company</strong>, <strong>font</strong>, and some other system commands!",

    "whoami": "<strong>Virtual Wiz<strong> (Virtualwiz)",

    "intro": "Web/Mobile Development and Web/Network Penetration Testing enthusiast with an experience of over 2 years in the field of Technology, with deep enthusiasm towards Development, Security, Networking and Programming.",
    "about": "<p>Hi! I am <strong>Virtual Wiz</strong>.<br>I am a Tech Enthusiastic, web and mobile developer, programmer and also Cyber Security enthusiast from Nepal.<br>",
    "age": "Twenty (20)",
    "birthday": "Jne 24, 2002",
    
    "hobbies": "Reading research papers and blogs, documentations and RFCs; playing CTFs; building knowledge; developing Mobile apps; and contributing to <strong><a onclick=\"window.open('https://www.askmitra.com', '_blank')\">Ask Mitra</a></strong>, a Technology community, as a Community Moderator!",

    "skills": "<ul><li>Web programming with HTML5, CSS3, JavaScript, PHP and MySQL,</li><li>Mobile development with Flutter and Dart,</li><li>React Js and React native,</li><li>Graphics Design</li><li>Web application and Network penetration testing,</li><li>Linux/UNIX (RedHat, Debian, Fedora),</li><li>Scripting in Bash, Batch, PowerShell and Python,</li><li>Programming in C, C++ and C#,</li><li>Git Version Control Systems,</li><li>Cryptography,</li><li>Digital Forensics and Incident Response,</li><li>Intelligence Gathering and Reconnaissance,</li><li>Reverse Engineering.</li></ul>",

    "profession": "Undergraduate student | Independent Web and Mobile Developer, Programmer and Web/Network Penetration Tester",

    "company": "None! I am open to exploring new opportunities.",

    "font": "<strong>Fira Code</strong> <<a onclick=\"window.open('https://fonts.google.com/specimen/Fira+Code', '_blank')\">Find on Google Fonts!</a>>",
    "uname": "WizOS",
    "uname -a": "WizOS | VirtualWiz 2.0",
    "hostname": "virtualwiz.who",
    "pwd": "C:\\web\\VirtualWiz",
    "ls": "<p><strong>Directory:</strong> C:\\web\\VirtualWiz</p><strong>Elements:</strong> assets/, wiz.webmanifest, index.html, terminal.html",
    "sudo": "This isn't a UNIX-based Operating System.",
    "cd": "You aren't permitted to change directories.",
    "rm": "Before running this command, make sure you know that the web front-end can't perform actions in the server."
}

Object.assign(terminalCommands, {
    "main": terminalCommands["about"],
    "who": terminalCommands["about"],

    "get skills": terminalCommands["skills"],
    "get --skills": terminalCommands["skills"],
    "find skills": terminalCommands["skills"],
    "find --skills": terminalCommands["skills"],
    "know skills": terminalCommands["skills"],
    "know --skills": terminalCommands["skills"],
    "your skills": terminalCommands["skills"],
    "my skills": terminalCommands["skills"],

    "get font": terminalCommands["font"],
    "get --font": terminalCommands["font"],
    "which font": terminalCommands["font"],
    "which --font": terminalCommands["font"],
});

const eventListener = () => {
    inputField.addEventListener("keyup", (event) => {
        if(event.keyCode === 13) {
            inputField.setAttribute("readonly", "true");
            keepValue = inputField.value;
            event.preventDefault();
            inputField.disabled = true;
            inputField.setAttribute("value", keepValue);
            inputField.removeAttribute("id");
            if(keepValue.toLowerCase() == "clear" || keepValue.toLowerCase() == "cls") initialSection.innerHTML = initialPrompt;
            else {
                let systemOutput = executeCommand(keepValue.toLowerCase());
                outputField[outputField.length - 1].innerHTML = systemOutput;
                initialSection.innerHTML += "<br />" + initialPrompt;
            }
            inputField = document.querySelector("#userInput");
            outputField = document.querySelectorAll(".systemOutput");
            inputField.focus();
            eventListener();
        } else if(event.keyCode === 38){
            inputField.value = keepValue;
        }
    });
}

eventListener();

document.body.addEventListener('click', () => {
    inputField.focus();
}, true);

const executeCommand = (userInput) => {
    if(userInput == "exit" || userInput == "quit"){
        window.parent.postMessage("closeTerminal", '*');
        return "Now, the Terminal will be closed.";
    } else if(terminalCommands.hasOwnProperty(userInput)){
        return terminalCommands[userInput];
    } else{
        return "The term isn't recognized as the name of a cmdlet, function, script file, or operable program."
    }
}