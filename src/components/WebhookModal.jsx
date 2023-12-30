import { useState } from "react";
import Modal from 'react-modal';
import useMedia from 'use-media';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '80%',
  },
};

const spStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    height: '80%',
  },
}

Modal.setAppElement('#root');

export const WebhookModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const isSp = useMedia({maxWidth: '1024px'})
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="blue" onClick={openModal}>?</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ isSp ? spStyles :customStyles}
      >
        <div className="text-right"><button onClick={closeModal}>close</button></div>
        <h2>使い方</h2>
        <p>スマホでのWebhookURLの取得方法が分からなかったので、最初だけPCでWebhookを設定・取得することを推奨しています！</p>
        <p>①Mattermostの左上、Channels左のアイコンを押す<img src="howto1.jpg" className="modal" alt="使い方①" /></p>
        <p>②「統合機能」を選択<img src="howto2.jpg" className="modal" alt="使い方②" /></p>
        <p>③「内向きのウェブフック」を選択<img src="howto3.jpg" className="modal" alt="使い方③" /></p>
        <p>④「内向きのウェブフックを追加する」を選択<img src="howto4.jpg" className="modal" alt="使い方④" /></p>
        <p>⑤設定します。チャンネルは自分のtimesを選んでください。<br/>他人のtimesを使わないように！！！<br/>
        また、「このチャンネルに固定する」で他のチャンネルに投稿しないよう設定していてください。<br/>
        ここでの設定は後で編集もできます。
        <img src="howto5.jpg" className="modal" alt="使い方⑤" /></p>
        <p>⑥作成後、表示されるURLをコピーしてください。<img src="howto6.jpg" className="modal" alt="使い方⑥" /></p>
        <p>⑦「Webhookを入力」欄にコピーしたURLを貼ります<img src="howto6.jpg" className="modal" alt="使い方⑦" /></p>
        <div className="text-right"><button onClick={closeModal}>close</button></div>
      </Modal>
    </div>
  );
};