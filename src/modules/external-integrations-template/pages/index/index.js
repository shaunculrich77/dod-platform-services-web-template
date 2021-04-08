import TechLogos from '@/modules/external-integrations-template/components/tech-logos/tech-logos.vue';

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
