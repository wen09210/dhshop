import Noty from 'noty'

var noty = {
  ConfirmDialog(msg, callback) {
    let n = new Noty({
      type: 'info',
      layout: 'topCenter',
      theme: 'relax',
      closeWith: ['butto'],
      text: `
            <div style="width:200px;">
              <div style="margin:20px;width:200px;"><h4>${msg}</h4></div>
            </div>
        `,
      buttons: [
        Noty.button('是', 'btn btn-success', () => {
          callback()
          n.close()
        }),
        Noty.button('否', 'btn btn-danger', () => {
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
      timeout: 2000,
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
