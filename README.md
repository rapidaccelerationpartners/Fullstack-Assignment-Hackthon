# Assignment:

## Developing a Train Search Web Application

### Problem Statement:

The task is to develop a train search application that allows users to select source and destination stations from the available options and view a list of trains that operate on that route. The application should enable users to sort the list of trains based on prices and timings for entered route.

### Requirements:

The train search application should meet the following requirements:
* Allow users to select source and destination stations from a dropdown menu
* Display a clear and concise list of available trains, including information on train name, departure and arrival times, and ticket prices for the entered route.
* Allow users to sort the list of trains based on  price
* Price should be determined based on distance of the journey (Rs 1.25/km).
* Be scalable and able to handle a large number of stations and train routes
* Be user-friendly and easy to navigate
* For ease of testing, develop a test data generation script, that generates 1000 trains and thier routes in your application db. 

### Example:
* Suppose you have these trains in your db:

#### Train A 
| Stop     | Distance from previous station | Depature Timing |
| ----------- | ----------- | ----------- | 
| Chennai      | 0       | 09:00             |
| Vellore   | 170        | 11:00  |
| Bangalore   | 200        | 15:30 |
| Mysuru   | 120       | 17:30 |
| Mangalore   | 300       | 21:45 | 
#### Train B
| Stop     | Distance from previous station | Depature Timing | 
| ----------- | ----------- |  ----------- |
| Bangalore   | 0        | 09:00 |
| Shimoga   | 180       | 12:00 |
| Mangalore   | 250       | 17:30 |
#### Train C
| Stop     | Distance from previous station | Depature Timing | 
| ----------- | ----------- |  ----------- |
| Bangalore   | 0        | 16:00 |
| Shimoga   | 180       | 19:00 |
| Mangalore   | 250       | 23:45 |

* If user input is Bangalore to Mangalore, the output should be 
  * Train A -> starting -> 15:30; reaching -> 21:45, distance -> 420Kms , price -> Rs 525 
  * Train B -> staring -> 09:00; reaching -> 17:30, distance -> 430Kms, price -> Rs 537.5

* If user input is Chennai to Mangalore, the output should be combination of two trains
  * Take 
    * Train A -> starting from chennai -> 09:00; reaching bangalore -> 15:30, distance -> 370Kms , price -> Rs 462.5
  * Then
    * Train c -> staring from bangalore -> 16:00; reaching mangalore -> 23:45, distance -> 430Kms, price -> Rs 537.5
  
* If user input is Bangalore to Chennai, the output should be 
  * No trains available for selected route

### Proposed Solution:

You are free to use any technology stack to develop the train search application. However, we recommend using modern web development technologies like React, Node.js, and MongoDB.

Your solution should include the following:

* A frontend UI that allows users to select source and destination stations, and displays the list of available trains
* A backend API that fetches data on train schedules and ticket prices
* A database that stores data on available trains, schedules, and ticket prices
### Good to Have

* Dockerize the solution 
* Deploy the application
### Evaluation Criteria

Your solution will be evaluated based on the following criteria:

* Functionality: Does the application meet the specified requirements?
* User Interface: Is the application user-friendly and easy to navigate?
* Scalability: Can the application handle a large number of stations and train routes?
* Code Quality: Is the code well-organized and easy to maintain?
* Creativity: Does the solution showcase your creativity and problem-solving skills?

### Submission Guidelines

* Your solution should be submitted as a GitHub repository.
* Your repository should include a README file with instructions on how to run the application.
* Your solution should be submitted by the deadline specified at the hackathon.