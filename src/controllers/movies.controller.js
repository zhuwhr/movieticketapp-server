import Movie from '../models/movie';

module.exports = {
  list: (req, res) => {
    // Find all movies and return json response
    Movie.find((err, movies) => {
      if (err) {
        res.send(err);
      }
      res.json(movies);
    });
  },

  show: (req, res) => {
    Movie.findOne({ title: req.params.movie_title }, (err, movies) => {
      if (err) {
        res.send(err);
      }
      res.json(movies);
    });
  },

  create: (req, res) => {
    const movie = new Movie(req.body);
    movie.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json('movie created!');
      }
    });
  },

  update: (req, res) => {
    Movie.findOne({ title: req.params.movie_title }, (err, movie) => {
      if (err) res.send(err);
      Object.assign(movie, req.body).save((err1, movie1) => {
        if (err1) res.send(err1);
        res.json({ message: 'Movie updated!', movie1 });
      });
    });
  },

  //TODO: add remove method
  remove: (req, res) => {

  }
};
