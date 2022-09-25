import express from 'express';

const app = express();

app.listen(process.env.PORT, () => {
	console.info(`[INFO] App running at http://localhost:${process.env.PORT!}`);
});

app.get('/', (req, res) => {
	res.send({message: 'Hello, world!'});
});
