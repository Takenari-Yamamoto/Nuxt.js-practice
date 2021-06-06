import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            todos: [
                {content: 'hogehoge', created: '2019-03-31 15:30'}, 
                {content: 'fugafuga', created: '2019-03-31 16:00'},
                {content: 'pokepoke', created: '2019-03-31 16:00'},
                {content: 'taketake', created: '2019-03-31 16:00'}
            ]
        }),
        mutations: {
            insert: function(state, payload) {
                var d = new Date();
                var fmt = d.getFullYear() 
                            + '-' + ('00' + (d.getMonth() + 1)).slice(-2) 
                            + '-' + ('00' + d.getDate()).slice(-2) 
                            + ' ' + ('00' + d.getHours()).slice(-2) 
                            + ':' + ('00' + d.getMinutes()).slice(-2);
                state.todos.unshift({
                    content: payload.content,
                    created: fmt
                })
            },
            remove: function(state, payload) {
                for(let i = 0; i < state.todos.length; i++) {
                    const ob = state.todos[i];
                    if(ob.content == payload.content && ob.created == payload.created) {
                        alert('remove ' + '"' + ob.content + '"');
                        state.todos.splice(i, 1);
                        return;
                    }
                }
            }
        }
    })
}

export default createStore;