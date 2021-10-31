((window) => {
    'use strict'

    function extend(a, b) {
        for (key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key]
            }
        }

        return a
    }

    // function tabs(el, options) {
    //     this.el = el
    //     this.options = extend({}, options)
    //     extend(this.options, options)
    //     this._init()
    // }

    // tabs.prototype.options = {
    //     start: 0
    // }

    // tabs.prototype._init = function() {
    //     this.tabs = document.querySelectorAll('nav > ul > li')
    //     console.log(this.tabs)
    //     // this.tabs = [].slice.call(this.el.querySelectorAll('nav > ul > li'))
    //     this.items = [].slice.call(this.el.querySelectorAll('.content-wrap > section'))
    //     this.currnet = -1
    //     console.log(tabs)
    //     this._show()
    //     this._initEvent()
    // }

    
        this.tabs = [].slice.call(document.querySelectorAll('nav > ul > li'))
        console.log(this.tabs)
    

    // tabs.prototype._initEvent = function() {
    //     this.tabs.forEach((tab, idx) => {
    //         tab.addEventListener('click', (event) => {
    //             event.preventDefault()
    //             this._show(idx)
    //         }).bind(this)
    //     })
    // }

    // tabs.prototype._show = function(idx) {
    //     if (this.currnet >= 0) {
    //         this.tabs[this.currnet].className = this.items[this.currnet].className = ''
    //     }
    //     this.currnet = idx !== undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0
    //     this.tabs[this.currnet].className = 'tab-current'
    //     this.items[this.currnet].className = 'content-currnet'
    // }

    // window.tabs = tabs
    
})(window)