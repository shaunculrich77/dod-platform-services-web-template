<template>
    <div id="app" class="container-fluid">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/SampleHome">Sample Module Home</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
@import '@/style/vars';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #9db1c4;

        &.router-link-exact-active {
            color: $dod-blue;
        }
    }
}
</style>
