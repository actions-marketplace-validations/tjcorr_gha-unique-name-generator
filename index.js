const core = require('@actions/core')
const { uniqueNamesGenerator, NumberDictionary } = require('unique-names-generator')

// 11 colors
const colors = [
    'red','orange','yellow','blue','green','purple','pink','brown','gray','white','black'
]

// 45 animals
const animals = [
    'ant',
    'bat',
    'bee',
    'bear',
    'beaver',
    'bird',
    'bison',
    'camel',
    'cat',
    'chicken',
    'cow',
    'crab',
    'deer',
    'dog',
    'duck',
    'eagle',
    'elk',
    'emu',
    'falcon',
    'fish',
    'frog',
    'fox',
    'goat',
    'horse',
    'lion',
    'lizard',
    'moth',
    'mouse',
    'mule',
    'owl',
    'panda',
    'pig',
    'snail',
    'snake',
    'sheep',
    'shrimp',
    'spider',
    'tiger',
    'toad',
    'tuna',
    'walrus',
    'wasp',
    'whale',
    'wolf',
    'zebra',
]

try {
    var prefix = core.getInput('prefix')
    var suffix = core.getInput('suffix')
    const separator = core.getInput('separator')

    const numberDictionary = NumberDictionary.generate({ min: 1, max: 99 });

    const config = {
      dictionaries: [colors, animals, numberDictionary],
      separator: '-',
      style: 'lowercase'
    };

    if(prefix) {
        prefix = prefix + separator
    }

    if(suffix) {
        suffix = separator + suffix
    }

    const unique = uniqueNamesGenerator(config); 
    const name = prefix + unique + suffix
    console.log(`Unique name: ${name}`)
    core.setOutput('name', name)
} catch (error) {
    core.setFailed(error.message)
}
