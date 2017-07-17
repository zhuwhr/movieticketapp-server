import express, { Router } from 'express';
// Import index action from movies controller
import movieController from './controllers/movies.controller';
import Movie from './models/movie';

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/movies/:movie_title')
  .get(movieController.show);

router.route('/movies')
  .get(movieController.list)
  .post(movieController.create);

export default router;
