<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>js timer test</title>
</head>
<body>
<button type="button" id="btn">Timer Start</button>
<div>
  <textarea id="timer" readonly></textarea>
</div>
<script>
document.addEventListener('DOMContentLoaded', () => {
    let stack_timer = []

    document.getElementById('btn').addEventListener('click', (evt) => {
        let tid = setTimeout(() => {
            stack_timer.push(tid)
            if ( stack_timer.length > 1 ) {
                for ( let i = 0; i < stack_timer.length - 1; i++ ) {
                    clearTimeout( stack_timer.shift() )
                }
            }
            document.getElementById('timer').value = stack_timer.join(',')
        }, 300)
    }, false)

}, false)
</script>
</body>
</html>
