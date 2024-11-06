<template>
    <div>
        <input v-model="email" type="text" placeholder="Email" />
        <span v-if="errorMessage.email" class="error-message">{{ errorMessage.email }}</span>
        
        <input v-model="password" type="password" placeholder="Password" />
        <span v-if="errorMessage.password" class="error-message">{{ errorMessage.password }}</span>

        <label>
            <input type="checkbox" v-model="rememberMe" /> Remember Me
        </label>

        <button @click="signIn" :disabled="loading">
            <span v-if="loading">Loading...</span>
            <span v-else>Sign In</span>
        </button>
    </div>
</template>

<script>
import { required, email as emailValidator } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: {},
            loading: false,
            rememberMe: false,
        };
    },
    validations() {
        return {
            email: { required, email: emailValidator },
            password: { required }
        };
    },
    created() {
        this.v$ = useVuelidate();
    },
    methods: {
        async signIn() {
            this.v$. $touch(); // Trigger validation
            if (this.v$.$invalid) return; // Prevent submission if invalid
            
            this.loading = true; // Set loading state
            
            try {
                const response = await axios.post('/user', { email: this.email, password: this.password });
                if (response.data.status === "SUCCESS") {
                    if (this.rememberMe) {
                        localStorage.setItem('userToken', response.data.token);
                    }
                    this.$router.push({ name: 'HomePage' });
                } else {
                    this.errorMessage = {}; // Clear previous errors
                    response.data.errors.forEach((msg) => {
                        if (msg.includes('Email is required')) this.errorMessage.email = msg;
                        if (msg.includes('Password is required')) this.errorMessage.password = msg;
                    });
                }
            } catch (error) {
                console.error('Sign-in error', error);
                this.errorMessage.general = "An unexpected error occurred. Please try again.";
            } finally {
                this.loading = false; // Reset loading state
            }
        }
    }
};
</script>

<style scoped>
.error-message {
    color: red;
    font-size: 12px;
}
</style>
