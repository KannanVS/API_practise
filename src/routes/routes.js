import {
  addNewContact,
  getContact,
  getContactByID,
  updateContact,
} from "../controllers/controllers";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContact)

    .post(addNewContact);

  app
    .route("/contact/:contactID")

    .get(getContactByID)

    .put(updateContact)

    .delete((req, res) => res.send("DELETE reuest successful!"));
};

export default routes;
