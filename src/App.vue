<template>
    <div id="app">
        <div style="height:100%">
            {{input}}===
            <div style="height:100%">
                <!-- <router-view></router-view> -->
                 <!-- <el-input  @update:modelValue = "($event)=> input= $evnent.target.value" v-model="input" modelValue="input"  placeholder="Please input" /> -->
                 <el-input   v-model="input.cv"  placeholder="Please input" />
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

/*
 * import { mapState } from 'vuex';
 * import '@/assets/iconfont/iconfont.css';
 * import XdfLoading from '@/components/xdf-loading';
 */
import { reactive } from 'vue';
export default {
    // compatConfig: {
    //     MODE: 3,
    //     COMPONENT_V_MODEL: false
    // },
    setup() {
        const input = reactive({
            cv: '2'
        });
        // onMounted(() => {
        //     document.body.style.setProperty('--el-color-primary', '#00b388');
        //     document.body.style.setProperty('--el-color-primary-light-3', '#61bfa2');
        //     document.body.style.setProperty('--card-header-bg', '#252b20');
        //     document.body.style.setProperty('--card-header-color', '#fff');
        // });
        const funCV = c => {
            console.log(c, '-------------->>>');
        };
        return {
            input,
            funCV
        };
    }
    // name: 'App',
    // computed: {
    //     // ...mapState(['isReady', 'isLogin'])
    // },
    // methods: {
    //     CVJ(c) {
    //         console.log(c, '-------------->>>');
    //     }
    // },
    // components: {
    //     // XdfLoading
    // }
};
</script>

<style>
html,
body {
    margin: 0;
    height: 100%;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 100%;
}
</style>
