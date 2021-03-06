const React = require('react')
const MessageInfo = require('../MessageInfo')
const { convertContactProps } = require('../Contact')
const {
  Classes,
  Dialog
} = require('@blueprintjs/core')

class MessageDetail extends React.Component {
  render () {
    var { chat, message, onClose } = this.props
    var isOpen = !!message
    const tx = window.translate

    let body = <div />
    if (isOpen) {
      var msg = message.msg
      msg.disableMenu = true
      msg.onDelete = message.onDelete
      let contacts
      if (message.isMe) {
        contacts = chat.contacts.map(convertContactProps)
      } else {
        contacts = [convertContactProps(message.contact)]
      }
      body = <MessageInfo
        contacts={contacts}
        status={msg.status}
        message={msg}
        sentAt={msg.sentAt}
        receivedAt={msg.receivedAt}
      />
    }

    return (
      <Dialog
        isOpen={isOpen}
        title={tx('menu_message_details')}
        icon='info-sign'
        onClose={onClose}>
        <div className={Classes.DIALOG_BODY}>
          {body}
        </div>
      </Dialog>
    )
  }
}

module.exports = MessageDetail
