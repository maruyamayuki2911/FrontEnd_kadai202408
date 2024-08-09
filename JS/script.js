document.addEventListener('DOMContentLoaded', function () {

    //▼スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {  //CSS属性セレクター：a[href^="#"] aタグのhref属性で"#"から始まる要素を選択 ※"^=" ⇒ 前方一致
        link.addEventListener('click', function (e) {
            e.preventDefault();  //リンクイベントをキャンセルする  ※preventDefault()；event の Default の動作を prevent する（妨げる）
            const href = link.getAttribute('href');  //クリックされた属性を取得 ※getAttribute()：HTMLの属性を取得 
            const targetSection = document.querySelector(href);  //目的のセクションを取得
            const target = targetSection.getBoundingClientRect().top;  //目的のセクション上端からブラウザ上端までのピクセル数を取得 ※getBoundingClientRect().top：ブラウザの上端から目的の要素の上端までの垂直方向の距離を取得     
            navSP.style.display = 'none';
            window.scrollTo({  //scrollTo()：指定された座標までスクロールする  
                top: target,  //top：Y軸方向のピクセル数を指定
                behavior: 'smooth'  //behavior：スクロールを即座に行うか、滑らかにアニメーションさせるか設定
            });
        });
    });

    //▼お問い合わせフォームの入力チェック
    function inputCheck(){
        //エラーのチェック結果
        let result;

        //エラーメッセージ
        let errorMessage = [].join('\n');

        //エラーメッセージを表示する要素
        const message = document.getElementById('message');

        // 名前チェック
        const name = document.getElementById('name');
        if(name.value == ''){
            errorMessage += 'お名前を入力してください\n';
            result = false;
        }else{
            result = true;
        }

        // メールアドレスチェック
        const email = document.getElementById('email');
        if(email.value == ''){
            errorMessage += 'メールアドレスを入力してください\n'
            result = false;
        }else{
            result = true;
        }
        
        // メッセージ入力チェック
        const contactMessage = document.getElementById('contact-message');
        if(contactMessage.value == ''){
            errorMessage += 'メッセージを入力してください\n'
            result = false;
        }else{
            result = true;
        }

        //チェック結果判定
        if(result){
            message.innerText = 'メッセージを送信しました';    
        }else{
            message.innerText = errorMessage;
        }
    }

    //▼バリデーション
    document.getElementById('submit').addEventListener('click',function(submitBtn){
        submitBtn.preventDefault();
        inputCheck();
    });

    // ▼ハンバーガーメニューOPEN
    const navSP = document.getElementById('nav-sp');
    document.getElementById('hamburger-menu').addEventListener('click',function(){
        navSP.style.display = 'block';
    });

    // ▼ハンバーガーメニューCLOSE
    document.getElementById('nav-close-btn').addEventListener('click',function(){
        navSP.style.display = 'none';
    });
});
