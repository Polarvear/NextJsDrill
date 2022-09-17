const express = require('express')
const cors = require('cors') // 동일 domain 정책이 아닐 때 사용하는 미들웨어
const app = express();
const PORT = 8080;
const { posts }

app.use(cors());
app.get('/api/post', (req, res) => {
    res.json('')
})

app.listen(PORT, () => console.log(`server running on ${PORT}`))