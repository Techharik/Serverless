

// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		console.log(request.headers)

// 		if (request.method == 'GET') {
// 			return Response.json({
// 				message: 'You get the response'
// 			})
// 		} else {
// 			return Response.json({
// 				message: 'method' + request.method
// 			})
// 		}
// 	},
// } satisfies ExportedHandler<Env>;

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({
			message: 'You get the response'
		})

	},
} satisfies ExportedHandler<Env>;