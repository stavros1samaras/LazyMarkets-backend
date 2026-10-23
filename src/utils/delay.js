export function delay(min = 4300, max = 6500) {
	const ms = min + Math.random() * (max - min)

	const stack = new Error().stack
	const caller = stack?.split("\n")[3]?.trim().split("(")[0].trim() || ""
	console.log(`Delay ${caller} --> ${Number.parseInt(ms)}ms`)

	return new Promise((resolve) => setTimeout(resolve, ms))
}
