const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const homeTestRouter = require('./routes/homeTestRouter');
const userRouter = require('./routes/userRouter');
const talentRouter = require('./routes/talentRouter');
const categoryRouter = require('./routes/categoryRouter');
app.use('/hometest', homeTestRouter);
app.use('/user', userRouter);
app.use('/talent', talentRouter);
app.use('/category', categoryRouter);