import TechLogos from '@/modules/platform-services-template/components/tech-logos/tech-logos.vue';

export default {
    name: 'Home',
    components: {
        TechLogos,
    },
    data() {
        return {
            title: 'External Integrations Web Template',
        };
    },
    methods: {
        sum(a, b) {
            return a + b;
        },
    },
};

/*
Naeem Smith: no, you don't need a main.js in the module directories
Naeem Smith: however, there should be an entry file
Naeem Smith: the file that communicates with the outside world
Naeem Smith: you can call it index.js so it denotes that it is the entry into that module
Naeem Smith: any props that is passed into that module should go through that index
Naeem Smith: and any event changes, should go out of that index

but one thing about the entry file. It will be tempting to want to have another 
file receive props. Like directly expose one of your module components and pass props into it. 
I would say also think of the module as an interface with public and private components. 
The only component that is public is the index.js, and if you want to pass props to one of the 
module's components, then you have to go through the public index.js file, and then pass it 
freely to its private components.


*/
