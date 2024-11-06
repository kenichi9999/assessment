'use strict'
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');
assessmentButton.addEventListener(
    'click',
    //無名関数
  /*  function (){
        console.log('ボタンが押されました。');
    }*/
   //アロー関数
    ()=>{
        console.log('ボタンが押されました。');
        if( userNameInput.length === 0){
            return;
        }
        console.log(userNameInput.value);
        //resultDivision.innerText = '';
        while(resultDivision.firstChild){
            resultDivision.removeChild(resultDivision.firstChild);
        }


        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivision.appendChild(header);


        const paragrah = document.createElement('p');
        const result = assessment(userNameInput.value);
        paragrah.innerText = result;
        resultDivision.appendChild(paragrah);


        while(tweetDivision.firstChild){
            tweetDivision.removeChild(tweetDivision.firstChild);
        }

        tweetDivision.innerText='';
        const anchor = document.createElement('a');
        const hrefValue='https://twitter.com/intent/tweet?button_hashtag='+encodeURIComponent('あなたのいいところ')+'&ref_src=twsrc%5Etfw'
//        const hrefValue='https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw'

        anchor.setAttribute('href',hrefValue);
        anchor.setAttribute('class','twitter-hashtag-button');
        anchor.setAttribute('data-text',result);
        anchor.innerText='Tweet あなたのいいところ';
        tweetDivision.appendChild(anchor);

        const script = document.createElement('script');
        script.setAttribute('src','https://platform.twitter.com/widgets.js');
        tweetDivision.appendChild(script);
    }
);


/**
 * Enterでも起動するようにイベントを登録
 */
userNameInput.addEventListener(
    'keydown',
    (event) =>{
        if(event.code=='Enter'){
            assessmentButton.dispatchEvent(new Event('click'));
        }
    }
)

const answers =[
'###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
'###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
'###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
'###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
'###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
'###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
'###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
'###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
'###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
'###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
'###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
'###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
'###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
'###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
'###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
'###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。'
]


/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {String} userName  ユーザーの名前
 * @returns {String} 診断結果
 */

    
function assessment(userName){
    // Todo 診断結果
    let stringCount=0
    for(let i = 0 ; i < userName.length ; i++){
        stringCount = stringCount + userName.charCodeAt(i);
    }
    let number = stringCount % answers.length;
    let result = answers[number];
    result = result.replaceAll('###userName###',userName);
    return result;

}

function test(){
    console.log('太郎');
    console.assert(assessment('太郎')==='太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。','診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。');
    console.log('次郎');
    console.assert(assessment('次郎')==='次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。','診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。');
    console.log('花子');
    console.assert(assessment('花子')==='花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。','診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。');

    console.log('診断結果の文章のテスト終了');
    console.log('同じ名前なら、同じ結果を出力することのテスト');
    console.log('太郎');
    console.assert(assessment('太郎')===assessment('太郎'),'入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。');
    console.log('次郎');
    console.assert(assessment('次郎')===assessment('次郎'),'入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。');
    console.log('花子');
    console.assert(assessment('花子')===assessment('花子'),'入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。');
    console.log('同じ名前なら、同じ結果を出力することのテスト終了');
    
    
    }

test();
