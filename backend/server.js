//MongoDB
require('./config/db');


const app = require('express')();
const port = 3000;
const UserRouter = require('./api/User');


const bodyParser = require('express').json;
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:8080' 
}));

app.use(bodyParser());

app.use('/user', UserRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})