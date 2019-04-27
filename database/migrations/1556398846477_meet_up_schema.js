'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeetUpSchema extends Schema {
  up () {
    this.create('meet_ups', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('meet_ups')
  }
}

module.exports = MeetUpSchema
