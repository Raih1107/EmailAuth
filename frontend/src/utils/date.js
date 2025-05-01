export const formatDate = (dateString) => {


	const date = new Date(dateString);
	if (isNaN(date.getTime())) {
		console.warn("Invalid date string:", dateString);
		return "Invalid Date";
	}

	return date.toLocaleString("en-IN", {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
};
