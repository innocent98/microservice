# microservice
# Instruction for running the application
1. npm install in each of the folder (auth, todo, gateway) to install dependencies used
2. npm start in each of the folder to start the server
3. baseUrl is http://localhost:8080/ ("/auth_api/auth_api/" for auth routes, "/todo_api/todo_api/" for todo routes)
4. body params for user registration and login (email & password)
5. body params for todolist creation (title & body)
6. /register to register, /login to login, /create to create todo. method POST
7. to get list of todo of logged in user "/todolist"
8. to get all todos "/todolist/all"
9. header {token: Bearer ${token}}
10. no 9 is applicable to no 7 & no 8
11. .env file can be created and inside will be MONGO_URL & JWT_SEC for only auth & todo folder
