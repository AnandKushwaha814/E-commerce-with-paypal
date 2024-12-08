const paypal = require("paypal-rest-sdk");
require("dotenv").config();

paypal.configure({
  // mode: process.env.PAYPAL_MODE,
  // client_id: process.env.PAYPAL_CLIENT_ID,
  // client_secret: process.env.PAYPAL_CLIENT_SECRET,
  mode :'sandbox',
  client_id: 'AfVQ-redD0dYsDUWn-YjXjX4-oKcaL4xmLiZDqjl0cCPTTTVdt42R2FyRaUlhC6ZBHJxV9KsSEvDOMwS',
  client_secret:'EANJt09Y8naR_WVHAHkWgPn7qYgGFDlVi1w4YEEdhXX_l-KqzXsaCUfI4ve6p71RCSExCc3D0_T2OAHM'

});

module.exports = paypal;
