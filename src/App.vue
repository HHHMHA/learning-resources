<template>
    <the-header title="Remember Me!"/>
    <StoredResources :resources='resources' />
</template>

<script>
import StoredResources from '@/StoredResources';
import TheHeader from '@/layouts/TheHeader';

export default {
    components: { TheHeader, StoredResources},
    data() {
        return {
            resources: [
                {
                    id: 1,
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 2,
                    title: 'Google',
                    description: 'Learn to google',
                    link: 'https://google.com'
                }
            ]
        };
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>