import React from 'react'

const FirstLetterToUppercase = (word: string) => {
    const splitted = word.split("")

    const first = splitted[0].toUpperCase()

    const rest = [...splitted]

    rest.splice(0, 1)

    const result = [first, ...rest].join("")

    return result
}

export default FirstLetterToUppercase