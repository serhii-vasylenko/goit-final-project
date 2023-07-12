//function for styling registration form elements
export const getStatus = (err, touched, isVal, isSub, secure = true) => {
	if (err && touched) return 'error';
	if (!isVal && !isSub && !err && secure) return 'correct';
 };