// const http = require('http');
// const { MongoClient } = require('mongodb');

// // MongoDB Connection URI and Database Name
// const uri = 'mongodb://localhost:27017';
// const dbName = 'testdb';

// // Create a MongoDB client
// const client = new MongoClient(uri);

// // Connect to MongoDB
// async function connectToMongoDB() {
//     try {
//         await client.connect();
//         console.log('Connected to MongoDB');
//         return client.db(dbName);
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         process.exit(1);
//     }
// }

// // Start the HTTP server
// const server = http.createServer(async (req, res) => {
//     const db = await connectToMongoDB();

//     // Collections for different routes
//     const dataCollection = db.collection('testCollection');
//     const usersCollection = db.collection('usersCollection');

//     const { method, url } = req;

//     // Set the JSON response header
//     res.setHeader('Content-Type', 'application/json');

//     // Route for /api/data
//     if (url === '/api/data') {
//         if (method === 'GET') {
//             // Handle GET request for /api/data
//             try {
//                 const data = await dataCollection.find({}).toArray();
//                 res.writeHead(200);
//                 res.end(JSON.stringify({ success: true, data }));
//             } catch (error) {
//                 res.writeHead(500);
//                 res.end(JSON.stringify({ success: false, error: error.message }));
//             }
//         } else if (method === 'POST') {
//             // Handle POST request for /api/data
//             let body = '';
//             req.on('data', chunk => (body += chunk));
//             req.on('end', async () => {
//                 try {
//                     const parsedBody = JSON.parse(body);
//                     const result = await dataCollection.insertOne(parsedBody);
//                     res.writeHead(201);
//                     res.end(JSON.stringify({ success: true, insertedId: result.insertedId }));
//                 } catch (error) {
//                     res.writeHead(500);
//                     res.end(JSON.stringify({ success: false, error: error.message }));
//                 }
//             });
//         } else {
//             res.writeHead(405); // Method Not Allowed
//             res.end(JSON.stringify({ success: false, error: 'Method not allowed for /api/data' }));
//         }
//     }

//     // Route for /api/users
//     else if (url === '/api/users') {
//         if (method === 'GET') {
//             // Handle GET request for /api/users
//             try {
//                 const users = await usersCollection.find({}).toArray();
//                 res.writeHead(200);
//                 res.end(JSON.stringify({ success: true, users }));
//             } catch (error) {
//                 res.writeHead(500);
//                 res.end(JSON.stringify({ success: false, error: error.message }));
//             }
//         } else if (method === 'POST') {
//             // Handle POST request for /api/users
//             let body = '';
//             req.on('data', chunk => (body += chunk));
//             req.on('end', async () => {
//                 try {
//                     const parsedBody = JSON.parse(body);
//                     const result = await usersCollection.insertOne(parsedBody);
//                     res.writeHead(201);
//                     res.end(JSON.stringify({ success: true, insertedId: result.insertedId }));
//                 } catch (error) {
//                     res.writeHead(500);
//                     res.end(JSON.stringify({ success: false, error: error.message }));
//                 }
//             });
//         } else {
//             res.writeHead(405); // Method Not Allowed
//             res.end(JSON.stringify({ success: false, error: 'Method not allowed for /api/users' }));
//         }
//     }

//     // Unknown route
//     else {
//         res.writeHead(404);
//         res.end(JSON.stringify({ success: false, error: 'Route not found' }));
//     }
// });

// // Start the server
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
