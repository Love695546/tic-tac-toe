<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stone Paper scissors</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Rock Paper Scissors</h1>
    <div class="choices">
        <div class="choice" id="rock">
            <img src="rock.png" alt="">
        </div>
        <div class="choice" id="paper">
            <img src="paper.png" alt="">
        </div>
        <div class="choice" id="scissors">
            <img src="scissors.png" alt="">
        </div>
    </div>

    <div class="score-board">
        <div class="score">
            <p id="user-score">0</p>
            <p>You</p>
            </div>
            <div class="score">
                <p id="comp-score">0</p>
                <p>Comp</p>
        </div>
    </div>

    <div class="msg-container">
        <div class="msg">Play your Move</div>
    </div>
    <script src="app.js"></script>
</body>
</html>