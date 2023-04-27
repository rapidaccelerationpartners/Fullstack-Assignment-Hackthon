## Train_App

It is a train-searching app, where we can search our trains for our traveling roots.

## Backend 

```
Build With
1. Node
2. Express
3. MongoDB
```
```
Routes
1. Create Roots
   - In this route, we create the starting points of the trains 
   - URL: https://train-app-backend.onrender.com/api/v1/root (post request)
   - Request Body:
    {
     "rootName":""
    }

2. Create Stations
-In this route, we create the intermediate stations in a root
-URL: https://train-app-backend.onrender.com/api/v1/station  (post request)
-Request Body:
{
 "stationName":"",
 "distance":,
 "rootId":""
}

3. Create Trains
-In this route, we create the train belongs to a root
-URL: https://train-app-backend.onrender.com/api/v1/train  (post request)
-Request Body:
{
    "trainName":"",
    "trainNumber": ,
    "startTime": , 
    "rootId":"",
    "returnTime": ,
    "speed":
}


4. Find train
-In this route, we find how many trains are available between two station
-URL: https://train-app-backend.onrender.com/api/v1/allTrains  (post request)
-Request Body:
{
 "start":"",
 "end":""
}

5. Details
-In this route, we get the details of the train and journey
-URL: https://train-app-backend.onrender.com/api/v1/details  (post request)
-Request Body:
{
    "start":"",
    "end":"",
    "trainId":""
}

```

## Frontend

```
Build With
1. React
2. Redux

```
```
Deploy: https://train-app-8cop.onrender.com/

On the home page, you can find trains for your destination.
For every train, you will find the details of the journey. 
```
```
Example:
Staring Station: plassey
End Station: bogula
```
