const express = require('express'); 
const router = express.Router(); 
const request = require('request');


// Signup Route
router.post('/', (req, res) => {
  const {  email } = req.body;
  console.log('request is running')

  // Make sure fields are filled
  if (!email) {
    res.json({error : "stay in you limit"});
    return;
  }

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
      }
    ]
  };

  const postData = JSON.stringify(data);

  const options = {
    url: 'https://us20.api.mailchimp.com/3.0/lists/661efcff7c',
    method: 'POST',
    headers: {
      Authorization: 'auth 7684013e604f023d32e96d8270e0c521-us20'
    },
    body: postData
  };

  request(options, (err, response, body) => {
    if (err) {
      console.log('get a life');
    } else {
      if (response.statusCode === 200) {
        console.log('get has been send');
      } else {
        console.log('get a life');
      }
    }
  });


});


module.exports = router;

/* 
  const { firstName, lastName, email } = req.body;
  console.log('request is running')

  // Make sure fields are filled
  if (!firstName || !lastName || !email) {
    res.json({error : "stay in you limit"});
    return;
  }

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  const options = {
    url: 'https://us20.api.mailchimp.com/3.0/lists/661efcff7c',
    method: 'POST',
    headers: {
      Authorization: 'auth 7684013e604f023d32e96d8270e0c521-us20'
    },
    body: postData
  };

  request(options, (err, response, body) => {
    if (err) {
      console.log('get a life');
    } else {
      if (response.statusCode === 200) {
        alert('get has been send');
      } else {
        console.log('get a life');
      }
    }
  });


*/