<template>
    <div class="signin">
    <div class="signin-card">
        <div class="logo">
            <img alt="Vue logo" src="../assets/images/lanex-logo.svg">

            <h5>Lanex Profiling System</h5>
        </div>
            <div class="register">
                <div class="form">
                    <label class="label">EMAIL ADDRESS<span class="required">*</span></label>
                    <input type="text" placeholder="i.e. danielakareem@lanexcorp.com" class="input-text"/>

                </div>
                <div class="form password-container">
                    <label class="label">PASSWORD<span class="required">*</span></label>
                    <div class="password-container">
                        <input :type="passwordVisible ? 'text' : 'password'" placeholder="*****" class="input-text"/>
                        <img
                        :src="passwordVisible ? require('@/assets/images/show.png') : require('@/assets/images/hide.png')"
                        @click="togglePasswordVisibility"
                        class="toggle-password"
                        alt="toggle password visibility"
                        />
                    </div>
                </div>
                <div class="form-item action">
                    <div class="checkbox">
                        <label class="RememberMe"><input type="checkbox" name="remember"><span class="label remember-label">Remember Me</span></label>
                        <a class="link" href="/reset-password" @click="goToResetPassword">RESET PASSWORD</a>
                    </div>
                </div>
                <button status="primary" type="submit" class="btn" > SIGN IN </button>
                <div class="sign-up">
                    <label class="or label">OR</label>
                    <a  class="link signupbtn" href="/sign-up" @click="goToSignUp">SIGN UP HERE</a>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: "SignIn",
    data() {
        return {
            passwordVisible: false,
            password: "",
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
        goToSignUp(){
            this.$router.push({name:'SignUp'})
        },
        goToResetPassword(){
            this.$router.push({name:'ResetPassword'})
        }
    },
};
</script>

<style scoped>
.signin {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 100%;
    margin-top: 80px;
}

.logo {
    margin-bottom: 32px;
    margin-top: 8px;
}

.logo img{
    width: 90px;
}

.signin-card {
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
    margin-bottom: 24px;
    box-sizing: border-box;
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
    width: 100%;
    
    border-style: solid;
    border-width: 1px;
    font-family: Poppins, sans-serif;
    overflow: visible;
    box-sizing: border-box;
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


  .input-text {
    width: 100%; 
    padding: 10px;
    border: 1px solid #e4e9f2;
    border-radius: 4px;
    background-color: #f7f9fc;
  }
  
  .input-text:hover {
    background-color: #edf1f7;
  }
  
  .input-text:focus {
    background-color: #fff;
    border-color: #36f;
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


  .form-item {
    margin: 35px 0;
    display: flex;
    flex-direction: column;
    width: 100%; 
  } 

  input[type="checkbox"] {
    transform: scale(1.6); 
    align-items: flex-end;
    
  }

  
  .checkbox {
    position: relative;
    display: inline-flex;
    justify-content: space-between;
    
    border-color: #79869f !important;
    background-color: transparent !important;
    border-radius: 20px;
    
  }
  
  .remember-label {
   
    padding-left: 0.5rem;
    font-size: 12px;
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

  .signupbtn {
    margin-bottom: 22px;
  }

  .required {
    color: #dc3545;
    margin-left: 0.25rem !important;
  }
  
  
</style>