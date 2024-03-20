import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import { appStore } from "../../store";

onAuthStateChanged(auth, (user) => {
	console.warn(user, "onAuthStateChanged");
	// if (user) {
	// 	appStore.dispatch(setLoggedIn(true));
	// 	appStore.dispatch(setUser(user.toJSON()));
	// } else {
	// 	appStore.dispatch(setLoggedIn(false));
	// 	appStore.dispatch(setUser(null));
	// }
	return !!user;
});
