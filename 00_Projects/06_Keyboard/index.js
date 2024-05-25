
document.addEventListener('keypress', function(e) {

    document.getElementById('magic').innerHTML = `
        <table border="1">
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <th>${(e.key) === " " ? "Space" : e.key}</th>
                <th>${e.keyCode}</th>
                <th>${e.code}</th>
            </tr>
        </table>
    `
}, false)