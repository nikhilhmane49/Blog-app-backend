# Blog-app-backend
blog-app


🌠 Tech Stack:🔮

-Node js -express -mongodb

🌈 Installation process

-Node js -Postmane -Mongodb compass

📂 Project Structure:

(1) Open the project folder in your command prompt and then put this command #(npm init -y)

(2) Then open this folder in your code editor(vs code) and then open the terminal and then put this command #(npm i express) #(npm i mongoose) #(npm i dotenv)...for installation

(3)create your own .env file and defined your PORT and MONGODB-URL

(4) Create your own database url form mongodb compass and put it in to .env file--->>(YOUR MONGODB-CAMPASS-URL)

(5) Then at the end open the terminal and then put this command #(index.js)

(6) Then you can use the postmane to hit the request (delete,put,push..) then you can this the results in your database(mongodb compass)

📂Folder and File's description

index.js ----->> main file

config(databse.js)----->>datebase connection

controller[

    (1)createpost.js
    (2)createcommente.js
    (3)createlike.js
    (4)reterievingpost.js
    (5)reterievingcomment.js
    
    ]------>opertion perform such as insertions,upadting,fetching...
   

routes(blogroutes)----->>routing the controllers

models[

    (1)postschema.js
    (2)commentschema.js
    (3)likeschema.js
       

]----->>schema of database

🚀!!Thank you for visiting! Feel free to explore the codebase and experience the todo-app!!🚀
