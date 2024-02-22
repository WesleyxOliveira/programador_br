module.exports = {
    posts: [
        {
            id: 'ljasdfj',
            title: 'Teste de Mural',
            description: 'Descrição teste'
        }, 
        {
            id: 'ljasdfj',
            title: 'Teste de Mural 2',
            description: 'Descrição teste 2'
        }
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({id: generateId(), title, description});
    }
}

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}