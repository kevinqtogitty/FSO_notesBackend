const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

mongoose
    .connect(url)
    .then((result) => {
        console.log('connected')
        if (process.argv.length > 3) {
            const saying = process.argv[3]
            const boolean = process.argv[4]

            const note = new Note ({
                content: saying,
                date: new Date(),
                important: boolean
            })

            return note.save()
        } else {
            Note.find({}).then(result => {
                result.forEach(note => {
                    console.log(note)
                })
                mongoose.connection.close()
            })
        }
    })
    .then(() => {
        console.log('note saved!')
        return mongoose.connection.close()
    })
    .catch((err) => console.log(err))

