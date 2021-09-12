import { createApp } from 'vue';
import BaseCard from '@/UI/BaseCard';
import BaseButton from '@/UI/BaseButton';
import BaseDialog from '@/UI/BaseDialog';
import App from '@/App';

const app = createApp( App );

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount( '#app' );
