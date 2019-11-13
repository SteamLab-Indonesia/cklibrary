import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCU_cTDPjLWJ9nds25kV4NlgT0bOAMBmwg",
    authDomain: "school-77e72.firebaseapp.com",
    databaseURL: "https://school-77e72.firebaseio.com",
    projectId: "school-77e72",
    storageBucket: "school-77e72.appspot.com",
    messagingSenderId: "232550425420",
    appId: "1:232550425420:web:543fbd08cd4499fd88e5e9",
    measurementId: "G-DMVS7Q35Z6"
    
  };

if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}

// var ui = new firebase.ui.auth.AuthUI(firebase.auth());
// var uiConfig = {
    
//     callbacks: {
//       signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//         // User successfully signed in.
//         // Return type determines whether we continue the redirect automatically
//         // or whether we leave that to developer to handle.
//         return true;
//       },
//       uiShown: function() {
//         // The widget is rendered.
//         // Hide the loader.
//         document.getElementById('loader').style.display = 'none';
//       }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: 'dashboard.js',
//     signInOptions: [
//       // Leave the lines as is for the providers you want to offer your users.
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       firebase.auth.GithubAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ],
//     // Terms of service url.
//     tosUrl: 'dashboard.js',
//     // Privacy policy url.
//     privacyPolicyUrl: '<your-privacy-policy-url>'
//   };
export function callDate(){
    return new Promise((resolve, reject) => {
        const db=firebase.firestore();
        let startDate= new Date('2019-09-01 00:00:00')
        let endDate= new Date('2019-12-01 21:59:59')
        let endOfMonth = new Date(2019, 12, 0);
        console.log(endOfMonth.toDateString());

        console.log('query date:');
        console.log(startDate);
        console.log(endDate);
        db.collection('attendance')
        .where('Date','>=',startDate)
        .where('Date','<=',endDate)
        .get()
        .then((snapshot)=>{
            let data = [];
            console.log('data length: ' + snapshot.docs.length);
            for(let i=0; i < snapshot.docs.length; ++i)
            {
                data.push({
                    id: snapshot.docs[i].id,
                    data: snapshot.docs[i].data()
                })
            }
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        });    
    })
}

export function ArrangeDate(){
    return new Promise((resolve, reject) => {
        let attendance = []
        for (let x=0; x<12; x++){
            attendance[x]=[]
            for (let y=0; y<31; y++){
                attendance[x][y]=0
            }
        }
        callDate().then((data) => {
            for (let i =0; i < data.length; ++i)
            {
                let statData = data[i].data.Date.toDate()
                console.log(statData)
                attendance[statData.getMonth()][statData.getDate()-1]++
            }
            console.log(attendance)
            resolve(attendance)
        })
        .catch((err) => {
            console.log(err);
        });
    })
}

export function Login(email,password){
var uid=null
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          uid=user.uid
        }
        else{
            uid=null
            alert("Please re-input data.")
        }
      });
}

export function Logout(){
    firebase.auth().signOut()
}

export function getUser(date){
    return new Promise((resolve,reject)=>{
        const students=firebase.firestore()
        students.collection('attendance')./*where('date','==',date).*/get()
        .then((snapshot)=>{
            if (snapshot.empty){
                resolve(null);
            }
            else
            {resolve({
                id: snapshot.docs[0].id,
                data: snapshot.docs[0].data()
            })}
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

export function addStudent(name, grade){
    return new Promise((resolve,reject)=>{
        const db=firebase.firestore();
        db.collection('students').add({
            name,
            grade
        })
        .then(()=>{
            resolve('success')
        })
        .catch((err) =>{
            reject(err)
        })
    })
}

export function getStudent(){
    const db=firebase.firestore()
    db.collection("students").get()
    .then((snapshot)=>{
        let data=[];
        for(let i=0; i < snapshot.docs.length; i++){
            data.push({
                student_id:snapshot.docs[i].id,
                name:snapshot.docs[i].data().name
            })
        }
    })
}
export function deleteStudent(student_id){
    return new Promise((resolve,reject)=>{
        const db=firebase.firestore();
        db.collection('students').docs(student_id).delete()
        .then(()=>{
            resolve('success');
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

export function addAttendance(date){
    let students=[]
    return new Promise((resolve,reject)=>{
        const db=firebase.firestore();
        db.collection('attendance').add({
            date, students
        })
        .then(()=>{
            resolve('success')
        })
        .catch((err) =>{
            reject(err)
        })
    })
}


export default firebase