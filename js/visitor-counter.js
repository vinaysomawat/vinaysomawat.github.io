import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { firebaseConfig } from "../user-data/firebase.js";

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const db = getFirestore(app);
const counterRef = doc(db, "visitors", "counter");
const visitorCount = document.getElementById("visitorCount");

async function updateVisitorCount() {
  if (!visitorCount) return;

  try {
    const docSnap = await getDoc(counterRef);

    if (docSnap.exists()) {
      const newCount = docSnap.data().count + 1;
      await updateDoc(counterRef, { count: newCount });
      visitorCount.innerText = newCount;
      return;
    }

    await setDoc(counterRef, { count: 1 });
    visitorCount.innerText = "Visitor Count: 1";
  } catch (error) {
    console.error("Error updating visitor count:", error);
  }
}

updateVisitorCount();
