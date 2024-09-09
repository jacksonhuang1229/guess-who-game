// 儲存照片資料
const photos = [
    { src: 'peach1.jpg', name: 'peach' }, 
    { src: 'apple1.jpg', name: 'apple' },
    { src: 'peach2.jpg', name: 'peach' },
    { src: 'apple2.jpg', name: 'apple' },
    { src: 'peach3.jpg', name: 'peach' },
    { src: 'apple3.jpg', name: 'apple' },
    { src: 'peach4.jpg', name: 'peach' },
    { src: 'apple4.jpg', name: 'apple' },
    { src: 'peach5.jpg', name: 'peach' },
    { src: 'apple5.jpg', name: 'apple' },
  // 你可以加入更多的照片，或從後端伺服器動態生成
];

let remainingPhotos = [...photos]; // 複製一個剩餘的照片列表
let currentPhoto;
let correctCount = 0; // 記錄答對的次數
let incorrectCount = 0; // 記錄答錯的次數

// 隨機選擇照片
function getRandomPhoto() {
    if (remainingPhotos.length === 0) {
        return null; // 如果沒有剩下的照片，返回null
    }
    const randomIndex = Math.floor(Math.random() * remainingPhotos.length);
    return remainingPhotos.splice(randomIndex, 1)[0]; // 移除並返回隨機選中的照片
}

// 更新照片
function updatePhoto() {
    currentPhoto = getRandomPhoto();
    const imgElement = document.getElementById('baby-photo');
    const feedbackElement = document.getElementById('feedback');
    const resultElement = document.getElementById('result');

    if (currentPhoto) {
        imgElement.src = currentPhoto.src;
        feedbackElement.textContent = ''; // 清空提示訊息
    } else {
        imgElement.src = ''; // 隱藏圖片
        feedbackElement.textContent = '出完了！'; // 顯示"出完了"訊息
        resultElement.textContent = `總共答對了 ${correctCount} 題，答錯了 ${incorrectCount} 題`;
    }
}

// 檢查答案
function checkAnswer(guess) {
    const feedbackElement = document.getElementById('feedback');
    if (!currentPhoto) return; // 如果沒有照片，直接返回
    if (guess === currentPhoto.name) {
        feedbackElement.textContent = 'O 答對了！';
        feedbackElement.style.color = 'green';
        correctCount++;
    } else {
        feedbackElement.textContent = 'X 答錯了！';
        feedbackElement.style.color = 'red';
        incorrectCount++;
    }

    // 更新結果顯示
    const resultElement = document.getElementById('result');
    resultElement.textContent = `答對了 ${correctCount} 題，答錯了 ${incorrectCount} 題`;

    // 1秒後換下一張
    setTimeout(() => {
        updatePhoto(); 
    }, 1000);
}

// 添加按鈕點擊事件
document.getElementById('guess-peach').addEventListener('click', () => checkAnswer('peach'));
document.getElementById('guess-apple').addEventListener('click', () => checkAnswer('apple'));

// 初始載入隨機照片
updatePhoto();
