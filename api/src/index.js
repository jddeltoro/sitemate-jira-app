const express = require('express');
const bodyParser = require('body-parser');
const v1TicketsRouter = require('./v1/routes/ticketRoutes');
const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/v1/tickets', v1TicketsRouter);

app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});