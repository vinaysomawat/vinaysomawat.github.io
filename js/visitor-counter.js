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

const SESSION_KEY = "portfolio-visited";

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const db = getFirestore(app);
const counterRef = doc(db, "visitors", "counter");
const visitorCount = document.getElementById("visitorCount");

async function updateVisitorCount() {
  if (!visitorCount) return;

  try {
    const docSnap = await getDoc(counterRef);
    const alreadyCounted = sessionStorage.getItem(SESSION_KEY);

    if (docSnap.exists()) {
      const current = docSnap.data().count;

      if (alreadyCounted) {
        visitorCount.innerText = current;
        return;
      }

      const newCount = current + 1;
      await updateDoc(counterRef, { count: newCount });
      sessionStorage.setItem(SESSION_KEY, "1");
      visitorCount.innerText = newCount;
    } else {
      await setDoc(counterRef, { count: 1 });
      sessionStorage.setItem(SESSION_KEY, "1");
      visitorCount.innerText = 1;
    }
  } catch (error) {
    console.error("Visitor counter error:", error);
  }
}

updateVisitorCount();
