function parsefunction(objectFromRequest) {
    let filters = objectFromRequest[0].available_filters;
    let items = objectFromRequest[0].results.slice(0, 4);

    return {
        'autor': {
            "name": "Claudio",
            "lastName": "Moreno"
        },
        'categories': [...filters],
        'items': [...items]
    }
}

module.exports = parsefunction;