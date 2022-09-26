import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyA-7PbGUQbfv1vm2GBCh3sySyFKmMa5JP4",
    authDomain: "playtank-fa75d.firebaseapp.com",
    databaseURL: "https://playtank-fa75d-default-rtdb.firebaseio.com",
    projectId: "playtank-fa75d",
    storageBucket: "playtank-fa75d.appspot.com",
    messagingSenderId: "824707566752",
    appId: "1:824707566752:web:9456f29564210169774dc5",
    measurementId: "G-N83Z9HFFCC",
  };

  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;
