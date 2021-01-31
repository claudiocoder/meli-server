function parsedDetailProduct(obj) {

    let [auxDetail, description] = [...obj];

    let responseDetailProduct = {
        'author': {
            'name': 'Claudio',
            'lastname': 'Moreno'
        },
        'item': {
            'id': auxDetail.id,
            'title': auxDetail.title,
            'price': {
                "currency": auxDetail.currency_id,
                "amount": auxDetail.price,
                "decimals": '00',
            },
            'picture': auxDetail.pictures[1].secure_url,
            'condition': auxDetail.condition,
            "free_shipping": auxDetail.shipping.free_shipping,
            "sold_quantity": auxDetail.sold_quantity,
            "description": description.plain_text

        }
    }

    return responseDetailProduct;
}


module.exports = parsedDetailProduct;