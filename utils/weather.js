const axios = require('axios');

exports.getApiAndEmit = async socket => {
    try {
        const res = await axios.get(

        );
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};