//Get to Dom element
const gameContainer = document.querySelector(".container"),
// 用户选择的图片
userResult = document.querySelector(".user_result img"),
// 电脑cpu选的图片
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image")
// console.log(gameContainer,userResult,cpuResult,result,optionImages);
optionImages.forEach((image,index) =>{
    //循环遍历元素 索引0 1 2 
    image.addEventListener("click",(e)=>{
        image.classList.add("active");


        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "加载中.."

        // 如果当前索引与点击的索引不一致
        // 移除其他索引的active
        optionImages.forEach((image2,index2)=>{
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add('start');

        // 设置超时以延迟结果计算

        let time = setTimeout(() =>{
            gameContainer.classList.remove('start');
             // 拿到点击图片资源
        let imageSrc = e.target.querySelector("img").src;
        // console.log(imageSrc);
        // 将点击的图片替换成user_result img定义的userResult
        userResult.src = imageSrc;

        // 生成随机数字 0 - 2
        let randomNumber = Math.floor(Math.random() * 3);
        // console.log(randomNumber);
        // 创建一个数组图片的
        let cpuImages = ["images/rock.png","images/parper.png","images/scissors.png"];
        cpuResult.src = cpuImages[randomNumber];
        // 给CPU选项设置一个字母值
        let cpuValue = ['R','P','S'][randomNumber];
        // 给点击事件一个字母值
        let userValue = ['R','P','S'][index];
        // 创建一个具有所有可能结果的对象
        let outcome ={
            RR:"平局",
            RS:"你",
            RP:"电脑",
            PP:"平局",
            PS:"电脑",
            PR:"你",
            SS:"平局",
            SP:"你",
            SR:"电脑",
        }
        // 根据用户和cpu选项查找结果值
        let outComeValue =outcome[userValue + cpuValue]
        // console.log(userValue,cpuValue);

        // 显示结果
        result.textContent = userValue === cpuValue ? "平局" : `${outComeValue} 赢了!!`;
        console.log(outComeValue);
        },2500)
    }); 
});