// const { TestScheduler } = require("jest");
import index from '@/modules/platform-services-template/pages/index/index.vue';
import { mount } from '@vue/test-utils';

test('mount a vue component', () => {
    const wrapper = mount(index);
    expect(wrapper.html()).toMatchSnapshot();
});
