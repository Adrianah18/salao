/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ServicosController from '#controllers/servicos_controller'
import TipoProdutosController from '#controllers/tipo_produtos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})


router.resource('/tipos', TipoProdutosController).apiOnly()
router.resource('/servicos', ServicosController).apiOnly()
