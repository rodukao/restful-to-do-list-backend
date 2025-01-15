const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/', async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async(req, res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

router.put('/:id', async(req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async(req, res) => {
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Task deleted'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;