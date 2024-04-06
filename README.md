
SOCKETTALKER
This is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack along with Socket.IO for WebSocket-based communication.

Features
Real-time Messaging: Experience real-time messaging with Socket.IO, enabling instant communication between users.
User Authentication: Secure user authentication using JSON Web Tokens (JWT).
Persistent Data Storage: Messages are stored in a MongoDB database, ensuring data persistence.
Responsive Design: Utilizes React with Tailwind CSS and DaisyUI for a responsive and modern UI design.
Installation
Clone the repository:

bash
Copy code
git clone [https://github.com/SACHINKUMAR1728/SOCKETTALKER.git](https://github.com/SACHINKUMAR1728/SOCKETTALKER.git)
Navigate to the project directory:

bash
Copy code
cd SOCKETTALKER
Install dependencies for both client and server:

bash
Copy code
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../frontend
npm install
Set up environment variables:

Create a .env file in the server directory and define the following variables:

PORT=<>
SECRET_KEY=<>
MONGO_URI=<>

bash
Copy code
# Start server
npm run server

# Start client
cd ../frontend
npm run dev
Open your browser and visit http://localhost:5173 to view the application.

Technologies Used
Frontend:

React.js
Tailwind CSS
DaisyUI
Socket.IO Client
Backend:

Node.js
Express.js
MongoDB
Socket.IO
Contributing
Contributions are welcome! Please follow the contribution guidelines.
