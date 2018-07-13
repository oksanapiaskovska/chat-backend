Launching:
1. Check if MongoDB is running
2. ```npm install```
3. Stat server
```npm start```
4. Server starts on port: 1428

# Routes
### Users
- Get all users
GET: ```localhost:1428/api/user``` 
- Get user by id
GET: ```localhost:1428/api/user/?id=123```
- Create user
POST: ```localhost:1428/api/user```
body JSON: 
{
    firstName: user1,
    lastName: lastname1
}
- Update user
PUT: ```localhost:1428/api/user/?id=123```
body JSON: 
{
    firstName: user1,
    lastName: lastname1
}
- Delete user
DELETE: ```localhost:1428/api/user/?id=123```
- Get all users that the user(by id) had conversations with
GET: ```localhost:1428/api/user/chats/?id=123```

### Messeges
- Get all messeges
GET: ```localhost:1428/api/messege``` 
- Get messege by id
GET: ```localhost:1428/api/messege/?id=123```
- Create messege
POST: ```localhost:1428/api/messege```
body JSON: 
{
    senderId: 123,
    receiverId: 456,
    body: text
}
- Update messege
PUT: ```localhost:1428/api/messege/?id=123```
body JSON:
{
    senderId: 123,
    receiverId: 456,
    body: text
}
- Delete messege
DELETE: ```localhost:1428/api/messege/?id=123```