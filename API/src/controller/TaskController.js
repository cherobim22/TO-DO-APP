const { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear} = require('date-fns');

const TaskModel = require('../model/TaskModel');

const current = new Date();

class TaskController {
    
    async create(req, resp){

    const task = new TaskModel(req.body);

       await task.save()
        .then(response => {
            return resp.status(200).json(response);
        }).catch(error =>{
            return resp.status(500).json(error);
        });    
    }

    async update(req, resp){
        await TaskModel.findByIdAndUpdate({'_id' : req.params.id}, req.body, { new:true })
        .then(response => {
            return resp.status(200).json(response);
        })
        .catch(error => {
            return resp.status(500).json(error);
        });
    }

    async index(req,resp){
        await TaskModel.find({macaddress : {'$in': req.params.macaddress}})
            .sort('when')//Especifica a ordem na qual a consulta retorna documentos correspondentes
            .then(response => {
                return resp.status(200).json(response);
            })
            .catch(error => {
                return resp.status(500).json(error);
            });
    }

    async show(req,resp){
        await TaskModel.findById(req.params.id)
        .then(response => {
            if(response)
                return resp.status(200).json(response);
            else
                return resp.status(404).json({error: 'tarefa não encontrada'});
        }).catch(error => {
            return resp.status(500).json(error);
        });
    }

    async delete(req, resp){
        await TaskModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return resp.status(200).json(response);
        }).catch(error => {
            return resp.status(500).json(error);
        });
    }

    async done (req,resp){
        await TaskModel.findByIdAndUpdate(
            {'_id': req.params.id},
            {'done': req.params.done},
            {new: true})
            .then(response => {
                return resp.status(200).json(response);
            }).catch(error => {
                return resp.status(500).json(error);
            });
    }

    async late(req, resp){
        await TaskModel.find({
            'when' : {'$lt': current},
            'macaddress': {'$in': req.params.macaddress}
        }).sort('when')
        .then(response => {
            return resp.status(200).json(response);
        }).catch(error => {
            return resp.status(500).json(error);
        });
    }

    async today(req, resp){
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte' : startOfDay(current), '$lt': endOfDay(current)}
        }).sort('when')
        .then(response => {
            return resp.status(200).json(response);
        }).catch(error => {
            return resp.status(500).json(error);
        });
    }

    async week(req, resp){
            await TaskModel.find({
                'macaddress': {'$in': req.params.macaddress},
                'when': {'$gte' : startOfWeek(current), '$lt': endOfWeek(current)}
            }).sort('when')
            .then(response => {
                return resp.status(200).json(response);
            }).catch(error => {
                return resp.status(500).json(error);
            });
    }

    async month(req, resp){
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte' : startOfMonth(current), '$lt': endOfMonth(current)}
        }).sort('when')
        .then(response => {
            return resp.status(200).json(response);
        }).catch(error => {
             return resp.status(500).json(error);
        });
    }

    async year(req, resp){
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte' : startOfYear(current), '$lt': endOfYear(current)}
        }).sort('when')
        .then(response => {
            return resp.status(200).json(response);
        }).catch(error => {
             return resp.status(500).json(error);
        });
    }

}

module.exports = new TaskController();

