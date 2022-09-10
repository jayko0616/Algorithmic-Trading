module.exports = app =>{
    const customers = require("../controller/customer.js");

    app.post("/customers", customers.create);
    app.get("/customers", customers.findAll());
    app.get("/customers/:customerId", customers.findOne);
    app.put("/customers/:customerId", customers.update);
    app.delete("/customers/:customersId", customers.delete);
    app.delete("/customers", customers.deleteAll);
}