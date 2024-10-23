<template>
   <div class="signup">
    <div class="signup-card">
        <div class="logo">
            <img alt="Vue logo" src="../assets/images/lanex-logo.svg">

            <h5>Lanex Profiling System</h5>
        </div>


        <div class="register">
            <div class="form">
                <label class="label">FIRST NAME<span class="required">*</span></label>
                <input type="text" placeholder="i.e Daniela" />

            </div>
            <div class="form">
                <label class="label">MIDDLE NAME</label>
                <input type="text" placeholder="i.e. Salvame"/>

            </div>
            <div class="form">
                <label class="label">LAST NAME<span class="required">*</span></label>
                <input type="text" placeholder="i.e. Kareem"/>

            </div>
            <div class="form">
                <label class="label">EMAIL ADDRESS<span class="required">*</span></label>
                <input type="text" placeholder="i.e. danielakareem@lanexcorp.com"/>

            </div>
            <div class="form password-container">
                <label class="label">PASSWORD<span class="required">*</span></label>
                <div class="password-container">
                    <input :type="passwordVisible ? 'text' : 'password'" placeholder="*****" class="input-text"/>
                    <img
                        :src="passwordVisible ? require('@/assets/images/show.png') : require('@/assets/images/hide.png')"
                        @click="togglePasswordVisibility"
                        class="toggle-password"
                        alt="toggle password visibility"/>
                </div>
            </div>
            
            <div class="form password-container">
                <label class="label">CONFIRM PASSWORD<span class="required">*</span></label>
                <div class="password-container">
                    <input :type="passwordVisible ? 'text' : 'password'" placeholder="*****" class="input-text"/>
                    <img
                        :src="passwordVisible ? require('@/assets/images/show.png') : require('@/assets/images/hide.png')"
                        @click="togglePasswordVisibility"
                        class="toggle-password"
                        alt="toggle password visibility"/>
                </div>
            </div>
            <button type="submit">SIGN UP</button>
            <div class="sign-in">
                    <label class="or label">OR</label>
                    <a  class="link signinbtn" href="/" @click="goToSignIn">SIGN IN HERE</a>
                </div>
        </div>
    </div>
   </div>
    


</template>



<script>
export default{
    name: 'SignUp',
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
        goToSignIn(){
            this.$router.push({name:'SignIn'})
        }
    },
}
</script>

<style scoped>
.signup {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    width: 100%;
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
    font-size: 25px;
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

  .signupbtn {
    margin-bottom: 22px;
  }

  .required {
    color: #dc3545;
    margin-left: 0.25rem !important;
  }

</style>