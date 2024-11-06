<template>
   <div class="signup">
    <div class="signup-card">
        <div class="logo">
            <img alt="Vue logo" src="../assets/images/lanex-logo.svg">

            <h5>Lanex Profiling System</h5>
        </div>


        <form @submit.prevent="signUp">
            <div class="register">
                <div class="form">
                    <label class="label">FIRST NAME<span class="required">*</span></label>
                    <input v-model="fname" type="text" placeholder="i.e Daniela" />
                    <span class="error-message" :class="{ visible: errorMessage.fname }">{{ errorMessage.fname }}</span>
                </div>
                <div class="form">
                    <label class="label">MIDDLE NAME</label>
                    <input v-model="mname" type="text" placeholder="i.e. Salvame"/>

                </div>
                <div class="form">
                    <label class="label">LAST NAME<span class="required">*</span></label>
                    <input v-model="lname" type="text" placeholder="i.e. Kareem"/>
                    <span class="error-message" :class="{ visible: errorMessage.lname }">{{ errorMessage.lname }}</span>

                </div>
                <div class="form">
                    <label class="label">EMAIL ADDRESS<span class="required">*</span></label>
                    <input v-model="email" type="text" placeholder="i.e. danielakareem@lanexcorp.com"/>
                    <span class="error-message" :class="{ visible: errorMessage.email }">{{ errorMessage.email }}</span>
                </div>
                <div class="form">
                    <label class="label">PASSWORD<span class="required">*</span></label>
                    <div class="password-container">
                        <input v-model="password" :type="passwordVisible ? 'text' : 'password'" placeholder="*****" class="input-text"/>
                        <img
                            :src="passwordVisible ? require('@/assets/images/show.png') : require('@/assets/images/hide.png')"
                            @click="togglePasswordVisibility"
                            class="toggle-password"
                            alt="toggle password visibility"/>
                    </div>
                    <span class="error-message" :class="{ visible: errorMessage.password }">{{ errorMessage.password }}</span>
                </div>
                
                <div class="form">
                    <label class="label">CONFIRM PASSWORD<span class="required">*</span></label>
                    <div class="password-container">
                        <input v-model="confirmpassword" :type="confirmPasswordVisible ? 'text' : 'password'" placeholder="*****" class="input-text"/>
                        <img
                            :src="confirmPasswordVisible ? require('@/assets/images/show.png') : require('@/assets/images/hide.png')"
                            @click="toggleConfirmPasswordVisibility"
                            class="toggle-password"
                            alt="toggle password visibility"/>
                    </div>
                    <span class="error-message" :class="{ visible: errorMessage.confirmpassword }">{{ errorMessage.confirmpassword }}</span>
                </div>
                <div class="signupBtn">
                    <button type="submit">SIGN UP</button>
                    <label class="or label">OR</label>
                    <a  class="link signinbtn" href="/" @click="goToSignIn">SIGN IN HERE</a>
                </div>
            </div>
        </form>
    </div>
   </div>
    


</template>



<script>
import axios from 'axios';
export default{
    name: 'SignUp',
    data() {
        return {
            passwordVisible: false,
            confirmPasswordVisible: false,
            fname: "",
            mname: "",
            lname: "",
            email: "",
            password: "",
            confirmpassword: "",
            errorMessage: {} 
        };
    },
    computed: {
        passwordFieldType() {
            return this.passwordVisible ? "text" : "password";
        },
    },
    methods: {
        togglePasswordVisibility() {
            this.passwordVisible = !this.passwordVisible;
        },
        toggleConfirmPasswordVisibility() {
            this.confirmPasswordVisible = !this.confirmPasswordVisible;
        },
        goToSignIn(){
            this.$router.push({name:'SignIn'})
        },
        async signUp() {
            this.errorMessage = {};

            try {
                const response = await axios.post('/user/sign-up', {
                    fname: this.fname,
                    mname: this.mname,
                    lname: this.lname,
                    email: this.email,
                    password: this.password,
                    confirmpassword: this.confirmpassword
                });
                
                if (response.data.status === "SUCCESS") {   
                    this.$router.push({ name: 'SignIn' });
                } else {
                    const errorMessages = {
                        'First name is required': 'This field is required',
                        'Last name is required': 'This field is required',
                        'Email is required': 'This field is required',
                        'Password is required': 'This field is required',
                        'Confirm password is required': 'This field is required',
                        'Enter a valid email address': 'Enter a valid email address',
                        'Please provide a lanex email address': 'Please provide a lanex email address',
                        'Password mismatch': 'Password mismatch.',
                        'User with the provided email already exists': 'User with the provided email already exists'
                    };

                    // Check if the response message contains any of the known error messages
                    for (const [key, value] of Object.entries(errorMessages)) {
                        if (response.data.message.includes(key)) {
                            
                            if (response.data.message.includes(key)) {
                                
                                if (key === 'First name is required') {
                                    this.errorMessage.fname = value;
                                } 
                                if (key === 'Last name is required') {
                                    this.errorMessage.lname = value;
                                }
                                if (key === 'Email is required' || key === 'Enter a valid email address' || key === 'Please provide a lanex email address') {
                                    this.errorMessage.email = value;
                                }
                                if (key === 'Password is required') {
                                    this.errorMessage.password = value;
                                }
                                if (key === 'Confirm password is required' || key === 'Password mismatch') {
                                    this.errorMessage.confirmpassword = value;
                                }
                                if (key === 'User with the provided email already exists') {
                                    this.errorMessage.email = value; 
                                }
                            }
                        }
                    }
                }
            } catch (error) {
                console.error('Sign-up error', error);
                alert("An error occurred during sign-up. Please try again.");
            }
        },
        validateEmail(email) {
          const lanexDomainRegex = /^[\w.-]+@lanexcorp\.com$/;
          const generalEmailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

          if (!generalEmailRegex.test(email)) {
            return "Enter a valid email address";
          } else if (!lanexDomainRegex.test(email)) {
            return "Please provide a lanex email address";
          }
          return '';
        },
        validatePassword() {
            if (this.password !== this.confirmpassword) {
                return "Password mismatch.";
            } 
            return "";  
        }
    },
    watch: {
        fname(newValue) {
            if (!newValue) {
              this.errorMessage.fname = "This field is required";
            } else {
                
              this.errorMessage.fname = '';
            }
        },
        lname(newValue) {
            if (!newValue) {
              this.errorMessage.lname = "This field is required";
            } else {
                
              this.errorMessage.lname = '';
            }
        },
        email(newValue) {
            if (!newValue) {
              this.errorMessage.email = "This field is required";
            } else {
              const emailError = this.validateEmail(newValue);
              this.errorMessage.email = emailError;
            }
        },
        password(newValue) {
            if (!newValue) {
              this.errorMessage.password = "This field is required";
            } else {
                
              this.errorMessage.password = '';
            }
        },
        confirmpassword(newValue) {
            if (!newValue) {
              this.errorMessage.confirmpassword = "This field is required";
            } else {
                const passwordError = this.validatePassword();
                this.errorMessage.confirmpassword = passwordError;
            }
        }
    }
}
</script>

<style scoped>
.signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
}

.logo {
    margin-bottom: 32px;
    margin-top: 16px;
}

.logo img{
    width: 100px;
}

.signup-card {
    width: 30%;
    box-shadow: 0 5px 100px rgba(0,0,0,.06);
    border-radius: 5px;
    border: 0;
    padding: 25px 30px;
    background-color: transparent;
    height: 100% !important;
    color: #222b45;
    font-family: Poppins, sans-serif;
    font-size: .9375rem;
    font-weight: 400;
    line-height: 1.25rem;
    
}

h5 {
    color: #0a043c;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-top: 8px;
}

.register {
    width: 100%;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    box-sizing: border-box;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 32px 24px;
    box-sizing: border-box;
    position: relative;
}

label {
    margin-bottom: 8px;
    font-size: .75rem;
    color: #8f9bb3;
    font-weight: 700;
    
}



.register .form input{
    font-weight: 400;
    line-height: 1.6rem;
    border-radius: 0.25rem;
    font-size: .9375rem;
    padding: 0.4375rem 1rem;
    background-color: #f7f9fc;
    border-color: #e4e9f2;
    color: #222b45;
    width: 100%;
    
    border-style: solid;
    border-width: 1px;
    font-family: Poppins, sans-serif;
    overflow: visible;
    box-sizing: border-box;
}

input::placeholder{
    color: #8f9bb3;
    
}

input:focus {
    border-color: #3864fc !important;
    outline: none;
}
.register button {
    padding: 11px 18px;
    font-size: 14px;
    font-weight: bold;
    font-family: Poppins, sans-serif;
    color: #ffffff;
    background-color: #3366ff;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    border-color: #36f;
    width: 100%;
    border-style: solid;
  }
  
  .password-container {
    position: relative;
    width: 100%;
    cursor: pointer;
  }

  .password-container .input-text {
    width: calc(100% - 40px);
    padding-right: 40px;
  }

  .toggle-password {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    width: 20px;
    height: 20px;
    opacity: 0.7;
  }

  .toggle-password:hover {
    opacity: 1;
  }

  .link {
    font-size: 12px;
    font-weight: 600;
    color: #36f;
  }

  .or {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 22px 0;
  }

  .required {
    color: #dc3545;
    margin-left: 0.25rem !important;
  }

  .signupBtn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin: 32px ;
    box-sizing: border-box;
  }

  .error-message {
    color: red;
    font-size: 12px;
    position: absolute;
    left: 0;
    top: 100%;
    margin: 4px 0 ;
    display: none;
  }

  .error-message.visible {
      display: block; 
  }
</style>