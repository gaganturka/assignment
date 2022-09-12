//schema
 { name  : String,
  email  : {String, unique}
              
  dob : Date,
   isAdmin : Boolean ,
    password : String,
    createdAt : time,
    UpdatedAt : time
}

in schema all fileds are compulsory

user API post/auth/register
create a user document from request body with that schema fields 
Return http status 201 on a sucessfull user creation. also document will returned
Return http status 400 if no params or invalid fields recived in request body 

post/auth/login
an user allow to login with there email and password
on sucess full login atten a jwt token will be recived in body and header, in body mongoodb id also recived
if credentisl are incorrect got a sutiable error message

GET/users/:_id

user can fetch details of profile
make sure that userid in will be in url params 

response formate 
on successful - return a http status 200 and user getails document
on error return a sutable a error


PUT//users/:_id
an user can update theire profile 
a user can send id froms params and other fields in request body

response formate 
on successful - return a http status 200 and also got a message "user updated"
on error return a sutable a error



REGISTER RESPONSE LIKE
    "status": true,
    "message": "user registered succesfully",
    "data": {
        "name": "Gagan",
        "email": "gagan1@gmail.com",
        "dob": "2010-01-01T18:30:00.000Z",
        "isAdmin": true,
        "password": "$2b$10$4bVeKcpDFP8pZX9Q4Pgz/eKPmBTtR60SKQhN52YI/1diFQt6vZm4.",
        "_id": "6301eee20816e45d9b1d1a7e",
        "createdAt": "2022-08-21T08:37:54.866Z",
        "updatedAt": "2022-08-21T08:37:54.866Z",
        "__v": 0
    }
}


LOGIN RESPONSE LIKE
{
    "status": true,
    "message": "user logIn",
    "data": {
        "userId": "6301eee20816e45d9b1d1a7e",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzAxZWVlMjA4MTZlNDVkOWIxZDFhN2UiLCJpYXQiOjE2NjEwNzEwODQsImV4cCI6MTY2MTA3ODI4NH0.721Mh6l8-uCbltAXx0kP2FxHf7qLpg9gbyAg-X2-Cc4"
    }
}


USER DETAILS RESPONSE LIKE
{
    "status": false,
    "message": "user profi
    le details",
    "data": {
        "_id": "6301e7363a2a2c29b1f931cc",
        "name": "hg",
        "email": "gjvguyggyv@gmail.com",
        "dob": "2010-01-01T18:30:00.000Z",
        "isAdmin": true,
        "password": "gagan11",
        "createdAt": "2022-08-21T08:05:10.486Z",
        "updatedAt": "2022-08-21T08:55:39.384Z",
        "__v": 0
    }
}

UPDATED DOCUMENT DETAILS LIKE
{
    "status": true,
    "message": "user updated"
}