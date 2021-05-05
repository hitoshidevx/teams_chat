import {  ChatEngine  } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (

        <ChatEngine 
            height="100vh"
            projectID="0989dc86-514c-4d73-b623-ab434c95fb6e"
            userName="simpleman"
            userSecret="12341234"
            renderChatFeed={(chatAddProps) => <ChatFeed {... chatAddProps} />}
        />

    )

}

export default App;