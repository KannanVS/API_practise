import {
  addNewContact,
  getContact,
  getContactByID,
  updateContact,
  deleteContact
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

    // post endpoint
    .post(addNewContact);

  app
    .route("/contact/:contactID")

    // get specific contact
    .get(getContactByID)

    // update specific contact
    .put(updateContact)

    // delete specific contact
    .delete(deleteContact);
};

export default routes;
