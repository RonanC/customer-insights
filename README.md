# Customer Insights Web App
###### web app connecting to the aib datathon api in order to display the information in a pleasant and consumable form.
**by Ronan Connolly & John Frizzell**  

![Customer Insights Logo](https://www.iiflw.com/files/assets/prelogin/insightanalysis/images/NewsandInsights_header_banner.jpeg "Customer Insights")

Contents:
---------
1. About
2. Datasets used
3. How to use the web app
4. How we are using the Banking API
5. Tools & Environment used
6. Installation
7. References
8. Team
  
1 - About
---
The aim of this web application is to showcase the use of consuming an api.  
The [project](https://gist.github.com/ianmcloughlin/53d5f1655bc276373625) is for Dr Ian Mc'Loughlin, Semantic Web & Linked Data Module, GMIT.    
  
We created are own back-end api to host the data to be consumed by this web app.  
Both the front-end web app and the back-end api are hosted on different servers.  
For information on the datasets used refer to the api github repository:   [Banking-API](https://github.com/JohnMalmsteen/aib-datathon).  
  
The front end (web app) is hosted on heroku:  
[http://customer-insights.herokuapp.com/](http://customer-insights.herokuapp.com/)  
  
The back end (api) is hosted on digital ocean:  
[http://178.62.9.141:5000/](http://178.62.9.141:5000/)  
  
We chose to use node and express to host the web application and manage the view routes.  
We used angular and bootstrap for the web application logic, structure, design and presentation.  

  
2 - Datasets used
---
We recieved the data from AIB during the [AIB Datahack competition](https://www.aibdatahack.com/) on the 7th of November.

The banking-api that we are consuming has much data.
We combined five csv files into a JSON object via MongoDB.
We tried couch initially but we had queue errors to the vast amount of data being processed.

**Balances:**  
10'001 rows  

**Income:**  
10'001 rows  

**Demographics:**  
10'001 rows  
  
**Rent:**   
158'923 rows  
  
**Transactions:**  
5'067'090 rows    

  
3 -  How use the web app
---
Enter an id between 0 and 10'000 into the search box and click the search button.
You will then see a profile panel, rent-transactions table and transacations table appear.
You can hide any of these via the checkboxes.

You can also show the JSON Request and Response messages via the checkboxes.
  
  
4 - How we are using the Banking API
---

This web app is consuming a RESTful api with self-describing urls.  
With which we are using the GET, PUT, POST and DELETE HTTP verbs on to do various actions.  
When the urls are queried a JSON object is passed back.  
  
## Routes
### general actions  
 - /  
 - /datathon/customer/
  
### specific actions  
 - /datathon/customer/:id
 
## Queries
### Basic website message  
**req**  
```
datathon/  
```
**res**  
```html
Welcome to our website, check out the Banking API at the link below
```

### Basic api message  
**req**  
```
datathon/  
```
**res**  
```html
Welcome to the Banking-API
```

### Retrieves all items  
**req**  
```
datathon/customer  
```
**res**  
```json
[{"_id":"34","balance":1500,"status":"open","income":2500,"payday":20,"age":33,"sex":"F","county":"CORK"}, {"_id":"23","balance":6000,"status":"open","income":1250,"payday":21,"age":34,"sex":"F","county":"CARLOW"}, {"_id":"3434","balance":2500,"status":"open","income":2500,"payday":20,"age":51,"sex":"F","county":"CORK"}, {"_id":"1212","balance":4500,"status":"open","income":2750,"payday":21,"age":36,"sex":"M","county":"DUBLIN"}]
```
  
### Specific api query  
**req**   
```
/datathon/customer/3    
```
**res**  
```json
{"_id":"34","balance":1500,"status":"open","income":2500,"payday":20,"age":33,"sex":"F","county":"CORK","rent_transactions":[{"rent_date":"2015-05-24T23:00:00.000Z","ammount":700},{"rent_date":"2015-08-23T23:00:00.000Z","ammount":700},{"rent_date":"2015-02-23T00:00:00.000Z","ammount":700},{"rent_date":"2015-03-23T00:00:00.000Z","ammount":700},{"rent_date":"2014-08-24T23:00:00.000Z","ammount":700},{"rent_date":"2014-11-24T00:00:00.000Z","ammount":700},{"rent_date":"2014-09-22T23:00:00.000Z","ammount":700},{"rent_date":"2015-09-22T23:00:00.000Z","ammount":700},{"rent_date":"2014-10-22T23:00:00.000Z","ammount":700},{"rent_date":"2015-07-22T23:00:00.000Z","ammount":700},{"rent_date":"2014-07-22T23:00:00.000Z","ammount":700},{"rent_date":"2015-04-22T23:00:00.000Z","ammount":700},{"rent_date":"2015-06-22T23:00:00.000Z","ammount":700},{"rent_date":"2015-10-22T23:00:00.000Z","ammount":700},{"rent_date":"2014-12-23T00:00:00.000Z","ammount":700},{"rent_date":"2015-01-23T00:00:00.000Z","ammount":700}]}
```

### Specific api query (error)  
**req**   
```
/datathon/customer/e2    
```
**res**  
```json
{"error":"Customer with id 'e2' not found"}
```
  
5 - Tools & Environment used
---
### Front-end website 
 - Created the web service with node and express
 - Angular front end
 - Bootstrap styling
 - Deployed to Heroku
  
6 - Installation
---
### Dependencies  
Once you have cloned the git repo, you need to run the 'npm install' command.  
This will install all the dependencies that are listed in the package.json file.  
```sh
> npm install
```
  
Next to get the server up and running run:  
```sh
> npm start
```

7 - References
---
- We relied heavily on the [Angular](https://docs.angularjs.org/api), [Bootstrap](http://getbootstrap.com/css/) and [W3 Schools](http://www.w3schools.com/html/default.asp) websites.
  
8 - Team
---
This project was created by Ronan Connolly & John Frizzell,  
Software Development students in fourth year, term 1, GMIT  
for the Semantic Web & Linked Data Module.

<a href="https://github.com/RonanC"><img src="https://github.com/RonanC/DodgySpike/blob/master/PromoImages/Ronan.png" width="100px" height="100px" title="Ronan" alt="Ronan Image"/></a> <a href="https://github.com/JohnMalmsteen"><img src="https://avatars1.githubusercontent.com/u/7085486?v=3&s=400" width="100px" height="100px" title="Ronan" alt="Ronan Image"/></a>
