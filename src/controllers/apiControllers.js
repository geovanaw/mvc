import apis from '../models/api.js';

class ApiController {

    static getAllApis = (req, res) => {
        apis.find((err, apis) => {
            res.status(200).json(apis)
        })
    } 
}

export default ApiController;