<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->

<template >
<body data-theme = "acid">
    <div class="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
            <img src="../assets/clubhouse.png" alt="logo" width="250" height="250" style="display: block; margin: 0 auto"> 
            <!--<h1 class="text-3xl font-semibold text-center text-gray-700">ClubHouse</h1> -->
            <hr>
            <form class="space-y-4" >
                <div>
                    <label class="label">
                        <span class="text-base label-text" style="margin-top: 10px">이메일</span>
                    </label>
                    <input type="text" placeholder="Email Address" class="w-full input input-bordered" />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">패스워드</span>
                    </label>
                    <input type="password" placeholder="Enter Password"
                        class="w-full input input-bordered" />
               <!-- </div>
                <a href="#" class="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                <div> -->
                    <button class="btn btn-block btn-outline" style="margin-top: 30px;">로그인</button>
                    <button class="btn btn-block btn-outline" style="margin-top: 10px;">회원가입</button>
                </div>
            </form>
        </div>
    </div>
</body>


  
</template>