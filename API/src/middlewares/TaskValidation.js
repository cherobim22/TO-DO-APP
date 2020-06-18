const TaskModel = require('../model/TaskModel');
const {isPast} = require('date-fns');
const { is } = require('date-fns/locale');

const TaskValidation = async(req,res,next) => {

    const { macaddress, type, title, description, when } =  req.body;

    if(!macaddress)
    return res.status(400).json({error: 'macaddress é obrigatorio'});
    else if(!type)
    return res.status(400).json({error: 'type é obrigatorio'});
    else if(!description)
    return res.status(400).json({error: 'descritption é obrigatorio'});
    else if(!title)
    return res.status(400).json({error: 'titulo é obrigatorio'});
    else if(!when)
    return res.status(400).json({error: 'Data e Hora são obrigatorios'});
    else if (isPast(new Date(when)))
    return res.status(400).json({error: 'escolha uma data e hora futura'});
    else{
        let exists;

        exists = await TaskModel.findOne({
            'when':{'$eq': new Date(when)},
            'macaddress' : {'$in': macaddress}
        });

    if(exists){
        return res.status(400).json({error: 'ja existe uma tarefa com esse dia e horario'});
        }
      next();  
    }
    
}

module.exports = TaskValidation;