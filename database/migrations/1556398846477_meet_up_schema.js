'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeetUpSchema extends Schema {
  up () {
    this.create('meet_ups', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('SET NULL')
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('meet_ups')
  }
}

module.exports = MeetUpSchema
