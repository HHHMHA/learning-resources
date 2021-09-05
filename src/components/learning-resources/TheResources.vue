<template>
    <base-card class='tab-menu'>
        <base-button @click="setSelectedTab('stored-resources')"
                     :mode='storedResourcesBtnMode'
                     class='tab-menu__item'
        >
            Stored Resources
        </base-button>
        <base-button @click="setSelectedTab('add-resource')"
                     :mode='addResourceBtnMode'
                     class='tab-menu__item'
        >
            Add Resource
        </base-button>
    </base-card>

    <keep-alive>
        <component :is='selectedTab'></component>
    </keep-alive>
</template>

<script>
import StoredResources from '@/components/learning-resources/StoredResources';
import AddResource from '@/components/learning-resources/AddResource';
import BaseCard from '@/UI/BaseCard';
import BaseButton from '@/UI/BaseButton';

export default {
    name: 'TheResources',
    components: {
        BaseButton,
        BaseCard,
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
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
    },
    computed: {
        storedResourcesBtnMode() {
            return this.selectedTab == 'stored-resources' ? null : 'flat';
        },
        addResourceBtnMode() {
            return this.selectedTab == 'add-resource' ? null : 'flat';
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
        };
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const resource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                url: url
            };

            this.storedResources.unshift(resource);
            this.selectedTab = 'stored-resources';
        }
    }
};
</script>

<style scoped>
.tab-menu {
    display: flex;
}

.tab-menu__item {
    margin: 0 auto;
}
</style>
