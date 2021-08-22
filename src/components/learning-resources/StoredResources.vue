<template>
    <ul>
        <learning-resource v-for='resource in resources'
                           :key='resource.id'
                           :title='resource.title'
                           :description='resource.description'
                           :link='resource.link'
        />
    </ul>
</template>

<script>
import LearningResource from '@/components/learning-resources/LearningResource';

export default {
    name: 'StoredResources',
    components: { LearningResource },
    props: ['resources']
};
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>