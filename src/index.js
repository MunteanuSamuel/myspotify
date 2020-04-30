import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import LabeledInput from "./LabeledInput";
import CardCategory from "./CardCategory";
import ButonSubmit from "./buton";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

ReactDOM.render(
    <React.StrictMode>
        <LabeledInput user={'id'} label={'Input User Id'} placeholder={'Input User Id'}/>
    </React.StrictMode>,
    document.getElementById('User_Id')
);

ReactDOM.render(
    <React.StrictMode>
        <LabeledInput user={'pass'} label={'Input User Password'} placeholder={'Input User Password'}/>
    </React.StrictMode>,
    document.getElementById('User_Password')
);

ReactDOM.render(<ButonSubmit />,
    document.getElementById('Buton_Submit')
);


ReactDOM.render(<CardCategory categorie={"AT HOME"} icon={"At Home"}/>,
    document.getElementById('card_category_1')
);
ReactDOM.render(<CardCategory categorie={"PARTY"} icon={"Party"}/>,
    document.getElementById('card_category_2')
);
ReactDOM.render(<CardCategory categorie={"DECADES"} icon={"Decades"}/>,
    document.getElementById('card_category_3')
);
ReactDOM.render(<CardCategory categorie={"FOCUS"} icon={"focus"}/>,
    document.getElementById('card_category_4')
);
ReactDOM.render(<CardCategory categorie={"MOOD"} icon={"Mood"}/>,
    document.getElementById('card_category_5')
);
ReactDOM.render(<CardCategory categorie={"HIP-HOP"} icon={"Hip-Hop"}/>,
    document.getElementById('card_category_6')
);
ReactDOM.render(<CardCategory categorie={"ELECTRONIC"} icon={"Electronic"}/>,
    document.getElementById('card_category_7')
);
ReactDOM.render(<CardCategory categorie={"CHILL"} icon={"Chill"}/>,
    document.getElementById('card_category_8')
);
ReactDOM.render(<CardCategory categorie={"WELLNESS"} icon={"Wellness"}/>,
    document.getElementById('card_category_9')
);
ReactDOM.render(<CardCategory categorie={"WORKOUT"} icon={"Workout"}/>,
    document.getElementById('card_category_10')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
