const express = require('express');
const router = express.Router();
const http = require('http');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/calendar', (req, res) => {
  /*
    THIS IS UNNECESSARY AND REDUNDANT BUT INSTEAD OF SETTING UP DB
    I HAVE MOCKED ANOTHER API END POINT TO RETURN THE CALENDAR TIMES.
    NORMALLY THIS WOULD BE A DB CALL. BUT IN ALL HONESTY THE FRONTEND
    SHOULD ONLY CONNECT WHEN ONE BACKEND WHEN IT CAN. EVEN IF IT IS A
    PASSTHROUGH. JUST MAKES CODE EASIER TO DEBUG. ALL CALLS TO OUTSIDE
    RESOURCES WILL BE IN THE NODE.JS API APP NOT IN THE ANGULAR 2 APP.
    (STEPPING OFF OF SOAPBOX)
  */
  http.get("https://private-ed4e1-testapi2336.apiary-mock.com/calendar", (request, response) =>{
    res.send(response.data);  
  })
});

module.exports = router;