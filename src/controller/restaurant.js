import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../models/restaurant';

export default({config, db}) => {
  let api = Router();

  // CRUD

  // '/v1/restaurant/add'
  api.post('/add', (req, res) => {
    let newRestaurant = new Restaurant();
    newRestaurant.name = req.body.name;

    newRestaurant.save(err => {
      if (err) res.send(err);
      res.json(
        {message: 'Restaurant saved successfully'}
      );
    });
  });

  // GET all restaurants
  api.get('/', (req, res) => {
    Restaurant.find({}, (err, restaurants) => {
      if(err) res.send(err);
      res.json(restaurants);
    });
  });

  // GET 1 restaurant
  // '/v1/restaurant/:id' - Read 1
  api.get('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurants) => {
      if(err) res.send(err);
      res.json(restaurants);
    });
  });

  // '/v1/restaurant/:id' - Update 1
  api.put('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if(err) res.send(err);
      restaurant.name = req.body.name;
      restaurant.save(err => {
        if (err) res.send(err);
        res.json(
          {message: 'Restaurant updated successfully'}
        );
      });
    });
  });

  return api;
}
