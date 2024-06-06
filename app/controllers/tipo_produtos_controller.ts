import type { HttpContext } from '@adonisjs/core/http'

import TipoProduto from '../models/tipo_produto.js'

export default class TipoProdutosController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await TipoProduto.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await TipoProduto.query()
                            .where('id', params.id)
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome'])
        console.log(dados) 
        return await TipoProduto.create(dados)
    }

    async update({params, request}: HttpContext){

        const produto = await TipoProduto.findOrFail(params.id)
        const dados = request.only(['nome'])

        produto.merge(dados)
        return await produto.save()
    }

    async destroy({params}: HttpContext){
        const produto = await TipoProduto.findOrFail(params.id)
        
        await produto.delete()
        return {msg: 'Registro deletado com sucesso', produto}
    }
}