# multiple-dbs-example

1. Make sure you installed NodeJs on your machine

2. Install MongoDb on your machine : https://docs.mongodb.com/manual/installation/
For Ubuntu 18.04 users go through this one : https://websiteforstudents.com/install-mongodb-on-ubuntu-18-04-lts-beta-server/

3. Install Robo 3T on your machine : https://robomongo.org/download

4. Once you have installed everything successfully, Clone this project : https://github.com/chandulella23/multiple-dbs-example.git

5. Install node modules : npm i

6. Create a .env file in root directory by setting SECRET = 'your secret key'

7. Start the project : node index

8. To get all the details of users as well as their respective posts & comments that are to be stored in our local database : http://localhost:3000/ 
(prefer postman for better exp)(public route)

9. Once you have instantiated main route '/' now there would be seperate db's created for each user and all the users data would be saved in one        another master db

10. Now you can login through : http://localhost:3000/api/v1/login (send email and password properties in body)

11. To update user image : http://localhost:3000/api/v1/updateImage (send userImage property in body by setting Authorization in headers with token that we received while login)

12. To get user posts : http://localhost:3000/api/v1/getPosts (send Authorization in headers with token that we received while login)

13.  So in this case logout functionality has nothing to do as it would be done from client side by removing it from cookies and from headers.

