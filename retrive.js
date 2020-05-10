var firebaseConfig = {
    apiKey: "AIzaSyAhyilq6p7twuRGFaEm-kO_-pcPFhQg8MA",
    authDomain: "pankaj-671c7.firebaseapp.com",
    databaseURL: "https://pankaj-671c7.firebaseio.com",
    projectId: "pankaj-671c7",
    storageBucket: "pankaj-671c7.appspot.com",
    messagingSenderId: "476872262003",
    appId: "1:476872262003:web:a0022d7b46a174d2cf4506",
    measurementId: "G-JB1N7SYHSW"
  };



firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();




const cafelist = document.querySelector('#cafe-list');


function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let contact = document.createElement('span');
    let insta = document.createElement('span');
    let facebook = document.createElement('span');

    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    contact.textContent = doc.data().Contact;
    insta.textContent = doc.data().Insta;
    facebook.textContent = doc.data().Facebook;
    li.appendChild(name);
    li.appendChild(contact);
    li.appendChild(insta);
    li.appendChild(facebook);
    cafelist.appendChild(li);
}


db.collection('contactData').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderCafe(doc);
        })
})