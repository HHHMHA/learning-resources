import { createApp } from 'vue';
import BaseCard from '@/UI/BaseCard';
import App from './App'

const app = createApp( App )

app.component('base-card', BaseCard)

app.mount( '#app' );
