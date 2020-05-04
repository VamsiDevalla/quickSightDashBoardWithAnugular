const express = require('express')

const app = express()

const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

app.listen(8080, () => {
    console.log('Server started!')
})

const AWS = require('aws-sdk');
const https = require('https');
 
var quicksight = new AWS.QuickSight({apiVersion: '2018-04-01'});;

app.route('/api/getEmbeddedURL').get((req, res) => {
    quicksight.getDashboardEmbedUrl({
        'AwsAccountId': '111122223333', 
        'DashboardId': '1c1fe111-e2d2-3b30-44ef-a0e111111cde',
        'IdentityType': 'IAM',
        'ResetDisabled': true,
        'SessionLifetimeInMinutes': 100,
        'UndoRedoDisabled': false
     
    }, function(err, data) {
        console.log('Errors: ');
        console.log(err);
        console.log('Response: ');
        console.log(data);
        res.send(data);
    });
})


 
