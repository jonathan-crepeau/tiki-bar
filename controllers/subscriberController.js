const db = require('../models');

// GET Index Users Controller

const index = (request, response) => {
    db.Subscriber.find({}, (error, indexSubscribers) => {
        if (error) return response.status(500).json({message: 'Something is not right.'})
        response.status(200).json(indexSubscribers);
    });
};

// POST Create Single User

const create = (request, response) => {
    db.Subscriber.create(request.body, (error, createSubscriber) => {
        if (error) return response.status(500).json({message: 'Something went wrong. Please try again.'})
        response.status(200).json(createSubscriber);
    });
};

// DELETE Remove Single User

const destroy = (request, response) => {
    db.Subscriber.findByIdAndDelete(request.params.id, (error, deleteSubscriber) => {
        if (error) return response.status(500).json({message: 'Something is wrong, girl.'})
        response.status(200).json(deleteSubscriber);
    });
};



module.exports = {
    index,
    create,
    destroy,
};