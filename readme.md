**Compaign API**
----
    This a restful API with a MVC model, also it comes with basic dataset included, and provied report endpoint with chart.

# Get the latest snapshot
git clone https://github.com/Nour-7/InternCompaign.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
node app.js

# For testing
npm test

# For Linting
npm run lint

```
```

* **URL**

http://localhost:3000/api/compaigns
http://localhost:3000/api/compaigns/:name
http://localhost:3000/api/reportData
http://localhost:3000/report

* **Usage:**

  `GET` | `POST` | `DELETE` | `PUT`

  -Get all data via GET request in this route /api/compaigns

  -Get spicifice data acording to name via GET request in this route /api/compaign/:name

  -Get report data with dimentions, fields and duration via GET request with quary string in this 
  route api/reportData?dimentions=<your dimention>,fields =<your fields> , duration = <your duration>

  -DELETE spicifice data acording to name via DELET request in this route /api/compaign/:name

  -POST new data  POST request in this route /api/compaign

  -Update date with spicific name via PUT request in this route /api/compaign/:name
  
  -To view report charter via PUT request in this route /api/report



 