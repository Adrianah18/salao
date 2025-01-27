import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Servico extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare codigo_servico: number

  @column()
  declare descricao: string

  @column()
  declare valor: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}