/* This file is where all your work should go for Assignment 2.  Please remove this comment. */
document.querySelector('.nav-home').addEventListener('click', function() {
    Array.from(document.querySelectorAll('.main > *')).map(elt => elt.remove());
});


function createSingleIndex(contact) {
    let a = document.createElement('a');
    a.setAttribute('href', 'page3.html');
    let div = document.createElement('div');
    div.className = "contact";
    let p = document.createElement('p');
    p.textContent = contact.name;
    div.append(p);
    a.append(div);
  
    return a;
}

let contacts = [
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

function renderIndex(contacts) {

    let main = document.querySelector('.main');
    for (let contact of contacts) {
      main.append(createSingleIndex(contact));
    }
}


document.querySelector('header').addEventListener('click', function() {
    Array.from(document.querySelectorAll('.main > *')).map(elt => elt.remove());
});

const form = document.querySelector('form');
const closeButton = document.querySelector('.button cancel');
closeButton.addEventListener('click', () => {
    form.close();
});


function renderCreate(contacts) {
    let main = document.querySelector('.main');
    let template = `
      <div class="contactedit">
        <div class="contactimg">
            <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
        </div>
        <div class="form">
            <form>
                <div class="inputcontainer">
                    <input type="text" id="contactname" name="contactname" placeholder="Contact Name">
                    <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
                </div>
  
                <div class="inputcontainer">
                    <input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
                    <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
                </div>
  
                <div class="inputcontainer">
                    <input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
                    <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
                </div>
                
                <div class="inputcontainer">
                    <input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
                    <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
                </div>
  
                <div class="buttons">
                    <button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
                    <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
                </div>
            </form>
        </div>
      </div>
    `
    main.innerHTML = template;
}


function renderView(contacts) {
    let main = document.querySelector('.main');
    let template = `
      <div class="contactinfo">
        <div class="contactname">
            <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
        </div>
        <div class="contactemail">email: x@x.com</div>
        <div class="contactphone">cell: +1 xxx xxx-xxxx</div>
        <div class="contactaddress">address: 123 front st, Unit #1, Dakota City</div>
        <div class="buttons">
            <button class="button edit" value="Edit">Edit</button>
            <button class="button close" value="Close">Close</button>
        </div>
      </div>
    `;
    main.innerHTML = template;
    document.querySelector('.main .contactname').prepend(document.createTextNode(contacts.name));
    document.querySelector('.main .contactemail').textContent = "email: " + contacts.email;
    document.querySelector('.main .contactphone').textContent = "phone: " + contacts.phone;
    document.querySelector('.main .contactaddress').textContent = "address: " + contacts.address;
  

};

const form = document.querySelector('.main');
const closeButton = document.querySelector('.button close');
closeButton.addEventListener('click', () => {
    form.close();
});


