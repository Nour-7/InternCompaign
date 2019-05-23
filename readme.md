**Compaign API**
----
    This a restful API with a MVC model, also it comes with basic dataset included, and provied report endpoint with chart.

* **URL**

  http://localhost:3000

* **Usage:**

  `GET` | `POST` | `DELETE` | `PUT`

  -Get all data via GET request in this route /api/compaigns

  -Get spicifice data acording to name via GET request in this route /api/compaign/:name

  -Get report data with dimentions, fields and duration via GET request with quary string in this 
  route api/reportData?dimentions=<your dimention>,fields =<your fields> , duration = <your duration>

  -DELETE spicifice data acording to name via DELET request in this route /api/compaign/:name

  -POST new data  POST request in this route /api/compaign

  -Update date with spicific name via PUT request in this route /api/compaign/:name

 