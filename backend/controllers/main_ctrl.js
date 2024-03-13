const services = require('../services/main_srv');

const getUser = async (req, res) => {
    try {
        const users = await services.findData();
        return res.json(users);
    } catch (error) {
        console.error('Error getting users from MongoDB', error);
        res.status(500).json({ error: 'An error occurred while fetching users from the database' });
    }
};

module.exports = {
    getUser,
};