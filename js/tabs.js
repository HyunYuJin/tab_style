(() => {
    'use strict'

    function extend(a, b) {
        for (let key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key]
            }
        }

        return a
    }

    function Tabs(el, options) {
        this.el = el
        this.options = extend({}, this.options)
        extend(this.options, options)
        this._init()
    }

    Tabs.prototype.options = {
		start : 0
	}

    Tabs.prototype._init = function() {
        this.tabs = [].slice.call(this.el.querySelectorAll('nav > ul > li'))
        this.items = [].slice.call(this.el.querySelectorAll('.content-wrap > section'))
        this.current = -1
        this._show()
        this._initEvent()
    }

    Tabs.prototype._initEvent = function() {
        let self = this
        this.tabs.forEach((tab, idx) => {
            tab.addEventListener('click', (event) => {
                event.preventDefault()
                self._show(idx)
            })
        })
    }

    Tabs.prototype._show = function(idx) {
        if (this.current >= 0) {
            this.tabs[this.current].className = this.items[this.current].className = ''
        }
		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
        this.tabs[this.current].className = 'tab-content'
        this.items[this.current].className = 'content-current'
    }

    window.Tabs = Tabs
})()