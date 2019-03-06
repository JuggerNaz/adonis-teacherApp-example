'use strict'

const Homework = use('App/Models/Homework')
const Database = use('Database')

class HomeworkController {

    async index({response}){
        let homeworks = await Homework.all()
        
        return response.json(homeworks)
    }

    async show({params, response}){
        const homework = await Homework.find(params.id)
        
        return response.json(homework)
    }

    async store({request, response}){
        const{ name, content, description, students } = request.all()

        const homework = new Homework()
        homework.name = name
        homework.content = content
        homework.description = description
        homework.students = students

        await homework.save()

        return response.status(201).json(homework)
    }

    async update({params, request, response}){
        const{ name, content, description, students } = request.all()

        const homework = await Homework.find(params.id)
        
        if(!homework)
            return response.status(404).json({data: 'Resource not found'})
        
        homework.name = name
        homework.content = content
        homework.description = description
        homework.students = students
        
        await homework.save()

        return response.status(201).json(homework)
    }

    async delete ({params, response}){
        const homework = await Homework.find(params.id)

        if(!homework)
            return response.status(404).json({data: 'Resource not found'})
        
        await homework.delete()

        return response.status(204).json(null)
    }

    async list ({params, response}){
        const homeworks = await Database.select('*').from('homework').whereRaw('JSON_SEARCH(students, \'all\', '+ params.id +') is not null')

        return response.json(homeworks)
    }
}

module.exports = HomeworkController
