import type { HttpContext } from '@adonisjs/core/http'

import Servico from '../models/servico.js'

export default class ServicosController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Servico.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Servico.query()
                            .where('id', params.id)
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['codigo_servico', 'descricao', 'valor'])
        console.log(dados) 
        return await Servico.create(dados)
    }

    async update({params, request}: HttpContext){

        const produto = await Servico.findOrFail(params.id)
        const dados = request.only(['codigo_servico', 'descricao', 'valor'])

        produto.merge(dados)
        return await produto.save()
    }

    async destroy({params}: HttpContext){
        const produto = await Servico.findOrFail(params.id)
        
        await produto.delete()
        return {msg: 'Registro deletado com sucesso', produto}
    }
}
