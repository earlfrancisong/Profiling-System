<template>
    <div class="reset">
        <div class="reset-card">
            <h5>Send Reset Password Link</h5>
            <p>Enter your registered email below to receive password reset instructions.</p>

            <div class="input-form">
                <div class="form">
                    <label class="label">ENTER EMAIL ADDRESS<span class="required">*</span></label>
                    <input type="text" placeholder="i.e. danielakareem@lanexcorp.com" class="input-text"/>

                </div>
                
                
                <button status="primary" type="submit" class="btn" > SEND RESET LINK </button>
                <a class="link" href="/" @click="goToSignIn">BACK</a>
            </div>
        </div>
    </div>

    <div class="logo">
        <div class="logo-content">
            <img alt="Vue logo" src="../assets/images/lanex-logo.svg">

            <h5>Lanex Profiling System</h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ResetPassword',
    methods: {
        goToSignIn(){
            this.$router.push({name:'SignIn'})
        }
    },
    }
</script>

<style scoped>
.reset {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0;
    height: 100%;
    position: relative;
}

.logo {
    position: absolute;
    bottom: 0;
    left: 20px;
    
}

.logo-content {
    display: flex;
    align-items: center;
    justify-items: flex-start;
    
    margin-bottom: 1px;
    margin-top: 8px;
    margin-left: 40px;
}

.logo img{
    width: 32px;
}

.logo h5 {
    color: #0a043c;
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;
    margin-top: 8px;
    margin-left: 8px;
    font-family: Poppins,sans-serif;
}

.reset-card {
    width: 25%;
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
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    margin-top: 8px;
}

p {
    color: #888888;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    margin-top: 8px;
    text-align: left;
}

.input-form {
    width: 100%;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    box-sizing: border-box;
    margin-top: 24px;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 40px;
    box-sizing: border-box;
}

label {
    margin-bottom: 8px;
    font-size: .75rem;
    color: #8f9bb3;
    font-weight: 600;
    
}

.input-form .form input{
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

.input-form button {
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
    margin-bottom: 24px;
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

  .link {
    font-size: 12px;
    font-weight: 600;
    color: #36f;
  }

  .required {
    color: #dc3545;
    margin-left: 0.25rem !important;
  }

</style>