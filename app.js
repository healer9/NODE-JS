const chalk = require('chalk')
const getNotes = require('./notes')
const yargs = require('yargs')

// customise yarg version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    handler: () => { console.log('Adding a new note') }
})

// Create remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    handler: () => { console.log('Removing a note') }
})

// Create read command
yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: () => { console.log('Reading a note') }
})

// Create list command
yargs.command({
    command: 'list',
    description: 'List all notes',
    handler: () => { console.log('Listing all notes') }
})

console.log(yargs.argv)


