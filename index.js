import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import jobsRoute from './routes/Jobs.js';
import deptsRoute from './routes/Dept.js';
import usersRoute from './routes/Users.js';
import applicantdetailsRoute from './routes/Applicantdetails.js';

dotenv.config();

const app = express();
const PORT = 3000;
const corsOptions = {
  origin: "*",
 }


app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/api/jobs_link', jobsRoute);
app.use('/api/depts_link', deptsRoute);
app.use('/api/users_link', usersRoute);
app.use('/api/applicantdetails_link', applicantdetailsRoute);



app.get('/', (req, res) => {
  res.send('Hello, World! OKOT GABRIEL OBILIL');
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});