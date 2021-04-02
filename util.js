//jshint esversion:6

exports.parseContentToArray = (content) => {
	return content.split(/\r?\n/);
};
// possible regex
// (\r\n|\r|\n)
// /\r?\n/
