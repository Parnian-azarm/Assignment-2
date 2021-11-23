/* This file is where all your work should go for Assignment 2.  Please remove this comment. */
function cleanUpIndex() {
    const elementNodes = document.querySelectorAll('title, h1, h2, .contact');
    for(let i = 0; i < elementNodes.length; i++) {
        elementNodes[i].remove();
    }
}

let contactList = [
    {
        name: "Roberta Dobbs",
        phone: "778-555-1234",
        address: "101 Main St, Anytown, USA",
        email: "subgenius@slack.example.com",
    },
    {
        name: "Bugs Bunny",
        phone: "123-867-5309",
        address: "Warner Brothers Animation Lot",
        email: "whatsup@doc.example.com",
    },
];
function createSingleIndex(contactList) {
    const singlenodeelement = document.createElement('div');
    singlenodeelement.className= "contact";
    const contactlink = document.createElement('a');
    const contact = document.createElement('p');
    contact.textContent = "Barry Allen";
    const contacts = document.createTextNode(contactList);
    singlenodeelement.appendChild(contactlink);
    contactlink.appendChild(contact);
    contact.appendChild(contacts);
    contactlink.setAttribute("href", "page3.html")
    console.log(singlenodeelement)
}

function renderIndex(contactList) {

    let index = document.querySelector(".main");
    for (let i = 0; i < contactList.length; i++) {
        let page = createSingleIndex(contactList[i]);
        index.appendChild(page);
    }
    
}


function cleanUpView() {
    const viewNodes = document.querySelectorAll('h1, h2, div');
    for(let i = 0; i < viewNodes.length; i++) {
        viewNodes[i].remove();
    }
}

function renderView(contactList) {
    let doc = document.querySelector(".main");
    view = createSingleIndex(contactList[0]);
        doc.appendChild(view);
}


function cleanUpCreate() {
    const page2Nodes = document.querySelectorAll('h1, h2, .inputcontainer, .buttons, img');
    for(let i = 0; i < page2Nodes.length; i++) {
        page2Nodes[i].remove();
    }
}

function renderCreate(contactList) {
    let pagec = document.querySelector(".main");
    create = createSingleIndex(contactList);
        pagec.appendChild(create);
}