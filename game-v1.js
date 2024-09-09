
// 儲存照片資料
const photos = [
    { src: 'peach1.jpg', name: 'peach' }, // 小桃子
    { src: 'apple1.jpg', name: 'apple' }, // 小蘋果
    // 你可以加入更多的照片
];

let currentPhoto;

// 隨機選擇照片
function getRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * photos.length);
    return photos[randomIndex];
}

// 更新照片
function updatePhoto() {
    currentPhoto = getRandomPhoto();
    const imgElement = document.getElementById('baby-photo');
    imgElement.src = currentPhoto.src;
}

// 檢查答案
function checkAnswer(guess) {
    const feedbackElement = document.getElementById('feedback');
    if (guess === currentPhoto.name) {
        feedbackElement.textContent = 'O 答對了！';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = 'X 答錯了！';
        feedbackElement.style.color = 'red';
    }
    // 隨機換下一張照片
    setTimeout(() => {
        feedbackElement.textContent = '';
        updatePhoto();
    }, 2000); // 2秒後換下一張
}

// 添加按鈕點擊事件
document.getElementById('guess-peach').addEventListener('click', () => checkAnswer('peach'));
document.getElementById('guess-apple').addEventListener('click', () => checkAnswer('apple'));

// 初始載入隨機照片
updatePhoto();
