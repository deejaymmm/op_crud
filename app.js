const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const app = express();
const port = 8080;

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.send('Homepage');
});

app.listen(port, () => {
    console.log('app now listening for requests on port ' + port);
});