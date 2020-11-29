const chalk = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')

// customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => { notes.removeNote(argv.title) }
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

yargs.parse()


