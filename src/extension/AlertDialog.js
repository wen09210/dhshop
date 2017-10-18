import Noty from 'noty'

var noty = {
  ConfirmDialog(msg, callback) {
    let n = new Noty({
      type: 'info',
      layout: 'topCenter',
      theme: 'relax',
      closeWith: ['butto'],
      text: `
            <div style="width:300px;">
              <div style="margin:20px;width:300px;"><h4>${msg}</h4></div>
            </div>
        `,
      buttons: [
        Noty.button('是', 'btn btn-success col-xs-offset-2 col-xs-4', () => {
          callback()
          n.close()
        }),
        Noty.button('否', 'btn btn-danger col-xs-4', () => {
          n.close()
        })
      ]
    }).show()
  },
  ShowAlert(msg, status) {
    new Noty({
      type: status,
      layout: 'topCenter',
      theme: 'relax',
      closeWith: ['butto'],
      animation: {
        open: 'noty_effects_open',
        close: 'noty_effects_close'
      },
      timeout: 4000,
      text: `
            <div style="width:350px;">
              <div style="margin:10px;width:300px;"><h4>${msg}</h4></div>
            </div>
        `
    }).show()
  }
}
export {
  noty
}
