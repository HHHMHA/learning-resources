import { createApp } from 'vue';
import BaseCard from '@/UI/BaseCard';
import BaseButton from '@/UI/BaseButton';
import App from './App';

const app = createApp( App );

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount( '#app' );
