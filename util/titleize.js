import capitalize from 'lodash/capitalize.js'

export default str => {
    return str.replace(/[\-_]/g, ' ')
            .split(' ')
            .map(word=>capitalize(word))
            .join(' ')
}
