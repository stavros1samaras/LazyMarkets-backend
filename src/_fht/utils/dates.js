export function formatDateToYMD(date) {
	return date.toISOString().split("T")[0]
}

export function formatDateToDMYShortYear(dateStr) {
	const [year, month, day] = dateStr.split("-")
	const shortYear = year.slice(-2)
	return `${day}-${month}-${shortYear}`
}
