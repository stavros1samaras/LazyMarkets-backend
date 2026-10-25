// Wrapper for async route handlers to catch errors and pass them to Express error handler
export default function asyncHandler(fn) {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next)
	}
}
