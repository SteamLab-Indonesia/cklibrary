import Dashboard from './screen/Dashboard'


//

if (firebase.apps.length === 0){
    firebase.initializeApp(config)
}

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'dashboard.js',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'dashboard.js',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };

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
        student.collection('attendance')./*where('date','==',date).*/get()
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
    db.collection("students").get()
    .then((snapshot)=>{
        let data=[];
        for(let i=0; i < snapshot.docs.length; i++){
            data.push({
                student_id:docs[i].id,
                name:docs[i].data().name
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