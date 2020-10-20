import { bootstrap } from 'vesper';
import { PostController } from "./controller/PostController";
import { UserController } from './controller/UserController';

bootstrap({
  port: 3000,
  controllers: [
    PostController,
    UserController
  ],
  schemas: [
    __dirname + "/schema/**/*.graphql",
  ],
}).then(() => {
  console.log(`
    Your app is up and running on http://localhost:3000.
    You can use playground in development mode on http://localhost:3000/playground
  `);
}).catch((error) => {
  console.error(error.stack ? error.stack : error);
});
