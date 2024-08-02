import express from 'express';
import helmet from 'helmet';
import config from './config';
import employeeRouter from './api/routes/employeeRouter';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/api/v1/employees', employeeRouter);

app.use(errorHandler);

if (require.main === module) {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
}

export default app;