interface ExampleState {
    name: string;
    age: number;
}

export default {
    namespaced: true,
    state(): ExampleState {
        return {
            name: '',
            age: 0,
        };
    },
    mutations: {
        setName(state: ExampleState, name: string) {
            state.name = name;
        },
        setAge(state: ExampleState, age: number) {
            state.age = age;
        },
    },
    actions: {
        async setName({ commit }: { commit: any }, name: string) {
            commit('setName', name);
        },
        async setAge({ commit }: { commit: any }, age: number) {
            commit('setAge', age);
        },
    },
};