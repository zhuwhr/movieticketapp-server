import { Router } from 'express';
import movieController from './controllers/movies.controller';

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/movies/:movie_title')
  .get(movieController.show)
  .put(movieController.update)
  .delete(movieController.delete);

router.route('/movies')
  .get(movieController.list)
  .post(movieController.create);

export default router;
