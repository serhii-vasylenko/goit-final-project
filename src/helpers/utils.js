//function for styling registration form elements
export const getStatus = (err, touched, isVal, isSub) => {
	if (err && touched) return 'error';
	if (!isVal && !isSub && !err) return 'correct';
 };