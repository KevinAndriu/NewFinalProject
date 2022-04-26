addEventListener('DOMContentloaded', () => {
    const btn_menu = document.querySelector('btn_menu')

    if (btn_menu) {

        btn_menu.addEventListener('click', () => {
            const menu_item = document.querySelector('.menu_item')
            menu_item.classlist.toggle('show')
        })
    }

})