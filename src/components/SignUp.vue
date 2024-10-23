<template>
   <div class="signup">
    <div class="signup-card">
        <div class="logo">
            <img alt="Vue logo" src="../assets/images/lanex-logo.svg">

            <h5>Lanex Profiling System</h5>
        </div>


        <div class="register">
            <div class="form">
                <label class="label">FIRST NAME</label>
                <input type="text" placeholder="First Name"/>

            </div>
            <div class="form">
                <label class="label">MIDDLE NAME</label>
                <input type="text" placeholder="Middle Name"/>

            </div>
            <div class="form">
                <label class="label">LAST NAME</label>
                <input type="text" placeholder="Last Name"/>

            </div>
            <div class="form">
                <label class="label">EMAIL ADDRESS</label>
                <input type="text" placeholder="Email Address"/>

            </div>
            <div class="form">
                <label class="label">PASSWORD</label>
                <input type="password" placeholder="*****"/>

            </div>
            <div class="form">
                <label class="label">CONFIRM PASSWORD</label>
                <input type="password" placeholder="*****"/>

            </div>
            <button type="submit">SIGN UP</button>
        </div>
    </div>
   </div>
    


</template>



<script>
export default{
    name: 'SignUp'
}
</script>

<style>
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
  
</style>