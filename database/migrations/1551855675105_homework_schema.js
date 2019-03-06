'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HomeworkSchema extends Schema {
  up () {
    this.create('homework', (table) => {
      table.increments()
      table.string('name', 150).notNullable()
      table.text('content', 250).notNullable()
      table.string('description', 250).notNullable()
      table.json('students')
      table.timestamps()
    })
  }

  down () {
    this.drop('homework')
  }
}

module.exports = HomeworkSchema
