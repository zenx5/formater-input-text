const inputClass = ".lexical-rich-text-input"

const observer = new MutationObserver(function(mutations){
    for(const mutation of mutations) {
        mutation.addedNodes.forEach( node => {
            if( node?.id === 'main' ) {
                console.log(mutation.type)
                console.log('opened')
            }
        })
        mutation.removedNodes.forEach( node => {
            if( node?.id === 'main' ) {
                console.log(mutation.type)
                console.log('closed')
            }
        })
    }
})

observer.observe( document.querySelector('body'), {
    subtree:true,
    childList: true
})
