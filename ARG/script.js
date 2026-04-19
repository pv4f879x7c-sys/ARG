
<script>
    // 页面加载时，自动检查玩家是否已经看过附件
    window.onload = function() {
        if (localStorage.getItem("hasViewedNote") === "true") {
            triggerHorror();
        }
    };

    function checkTracking() {
        let input = document.getElementById("trackingInput").value;
        let resultDiv = document.getElementById("result");
        
        if (input === "12345") {
            resultDiv.style.display = "block";
        } else {
            alert("系统提示: 单号不存在或已被归档。");
        }
    }

    function showNote() {
        // 当点击链接时，在浏览器留下一个“秘密标记”
        localStorage.setItem("hasViewedNote", "true");
        // 这里会自动打开 note.jpg，但因为我们在上面存了标记，所以页面变了
    }

    // 触发恐怖变化的函数
    function triggerHorror() {
        document.body.style.backgroundColor = "#222"; // 背景变黑
        document.body.style.color = "#ff3333";        // 字体变红
        document.querySelector("h1").innerText = "你看到了它，对吗？";
        document.querySelector(".container").style.borderColor = "red";
    }
</script>
