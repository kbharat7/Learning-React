const root= ReactDOM.createRoot(document.getElementById("root"));

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm a H1 Tag"),
            React.createElement("h2",{},"I'm a H2 Tag")
        ]));
console.log(parent);//Object => Becomes HTML when we render it
root.render(parent);//replace content@root