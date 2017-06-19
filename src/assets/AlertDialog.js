import Noty from 'noty'

var noty = {
  ShowAlert(msg, status) {
    new Noty({
      type: status,
      layout: 'topCenter',
      theme: 'metroui',
      closeWith: ['butto'],
      animation: {
        open: 'noty_effects_open',
        close: 'noty_effects_close'
      },
      timeout: 2000,
      text: `
            <div style="width:350px;">
              <div style="margin:10px;width:300px;"><h4>${msg}</h4></div>
            </div>
        `
    }).show()
  }
}

export { noty }
