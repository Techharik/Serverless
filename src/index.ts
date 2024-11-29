

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
		const { url, method } = request
		const setUrl = url.replace('http://127.0.0.1:8787/', '') // /api/v1/users

		if (setUrl == 'api/v1/users') {
			if (method === 'GET') {
				//connect with db - or from the controller file logic
				return Response.json({
					message: 'You get the response users'
				})

			} else if (method == 'POST') {
				//-- db logic for post
				return Response.json({
					message: 'Data Added Successfully users'
				})
			} else {
				return Response.json({
					message: '404not found'
				})
			}

		} else if (setUrl === 'api/v1/posts') {

			if (method === 'GET') {
				//connect with db - or from the controller file logic
				return Response.json({
					message: 'You get the response posts'
				})

			} else if (method == 'POST') {
				//-- db logic for post
				return Response.json({
					message: 'Data Added Successfully posts'
				})
			}
			else {
				return Response.json({
					message: 'Invalid routes'
				})
			}
		} else {
			return Response.json({
				message: 'Invalid routes'
			})
		}


	}

} satisfies ExportedHandler<Env>;