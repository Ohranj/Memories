import React, { Component } from "react";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

class Collage extends Component {
    state = {
        loginImages: [
            {
                img: "http://localhost:8080/ui/stock-brithday.jpg",
                text: "Celebrating Kelly's birthday...third time this week :)",
                icon: "local_bar",
                expanded: true,
            },
            {
                img: "http://localhost:8080/ui/stock-cat.jpg",
                text: "Picking our cat up. We're calling her Suki....or Noodle",
                icon: "favorite",
                expanded: false,
            },
            {
                img: "http://localhost:8080/ui/stock-busview.jpg",
                text:
                    "We were on this hot bus all day lol. Aaron slept the whole journey!!! That view though",
                icon: "directions_bus",
                expanded: false,
            },
        ],
    };

    renderPopup = () => {
        return this.state.loginImages.map((item, index) => (
            <CollapsibleItem
                key={index}
                expanded={item.expanded}
                header={item.text}
                icon={<Icon>{item.icon}</Icon>}
                node="div"
                style={{
                    backgroundImage: `url(${item.img})`,
                }}
            ></CollapsibleItem>
        ));
    };

    render() {
        return (
            <Collapsible accordion popout>
                {this.renderPopup()}
            </Collapsible>
        );
    }
}

export default Collage;
