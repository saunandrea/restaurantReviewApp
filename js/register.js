
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(reg =>
        console.log(`Registration worked! Scope: ${reg.scope}`)
    ).catch(error =>
        console.log(`Registration failed. Error: ${error}`)
    )
}
