export const BookSchema = {
        name: 'Book',
        properties: {
        _id: 'objectId',
        author: 'string?',
        category: 'int?',
        title: 'string?',
        },
        primaryKey: '_id',
    };