function parsefunction(objectFromRequest) {

    let categories = [];
    let items = [];
    let res = {}

    let [response] = [...objectFromRequest]
    response.available_filters[0].values.forEach(element => {
        categories.push(element.name)
    });

    response.results.slice(0, 4).forEach(element => {
        items.push({
            'id': element.id,
            'title': element.title,
            'price': {
                "currency": element.currency_id,
                "amount": element.price,
                "decimals": '00'
            },
            'picture': element.thumbnail,
            "condition": element.condition,
            "free_shipping": element.shipping.free_shipping

        })
    })

    res = {
        'author': {
            'name': 'Claudio',
            'lastName': 'Moreno'
        },
        categories,
        items
    }
    return res;
}




module.exports = parsefunction;