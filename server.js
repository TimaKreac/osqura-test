const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}!`));
