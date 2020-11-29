const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => { return 'This is My Note' }

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('Note added successfully !!'))
    } else {
        console.log(chalk.red.inverse('Note with title : "' + title + '" already exists'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
}

const removeNote = (title) => {

    const notes = loadNotes()

    const freshNotes = notes.filter((note) => {
        return note.title !== title
    })

    if (notes.length > freshNotes.length) {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(freshNotes)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

// module.exports = getNotes

// export more than one thing
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
