<template>
    <base-dialog v-if='inputIsInvalid' title='Invalid Input' @close='confirmError'>
        <template #default>
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please check all inputs and make sure you enter at least a few characters in each field</p>
        </template>
        <template #actions>
            <base-button @click='confirmError'>Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent='submit'>
            <div class='form-control'>
                <label for='title'>Title</label>
                <input type='text' id='title' name='title' v-model='form.title' />
            </div>

            <div class='form-control'>
                <label for='description'>Description</label>
                <textarea id='description' name='description' rows='3' v-model='form.description'></textarea>
            </div>

            <div class='form-control'>
                <label for='link'>Link</label>
                <input type='url' id='link' name='link' v-model='form.link' />
            </div>

            <div>
                <base-button type='submit'>Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    name: 'AddResource',
    data() {
        return {
            inputIsInvalid: false,
            form: {
                title: '',
                description: '',
                link: ''
            }
        };
    },
    inject: ['addResource'],
    methods: {
        submit() {
            for (const value of Object.values(this.form)) {
                if (!value) {
                    this.inputIsInvalid = true;
                    return;
                }
            }
            this.addResource(this.form.title, this.form.description, this.form.link);
        },
        confirmError() {
          this.inputIsInvalid = false;
        },
    }
};
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>
