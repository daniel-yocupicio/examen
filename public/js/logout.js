function logout() {
    fetch('/api/logout',{
        method: 'post', 
        headers: {"Content-Type": "application/json"}
    }).then(() => {
        location.href = '/';
    })
}