import React, { Component } from "react";

class Note extends Component {
    state = {}
    componentWillUnmount() {
        console.log("componentWillUnmount.....")
    }
    render() {
        return (
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ipsam tempore rem repudiandae ea facilis sit. Veritatis aspernatur sed veniam voluptatum distinctio voluptatem, voluptates tempore laborum quis, amet eaque doloribus consequatur totam dolores assumenda velit enim nobis odit ad. Ut quia eius vel cum temporibus maiores sunt veniam pariatur facere esse, odit cupiditate quos iste laborum officiis voluptatibus aperiam? Obcaecati nobis minima placeat fugiat aliquam earum rem iusto ullam doloremque, fugit molestiae nam similique laborum iste sunt. Quis molestiae dolores aliquid quos maxime recusandae laboriosam amet perspiciatis temporibus, modi error tempore eum illum, et voluptatum animi similique. Voluptate, vitae omnis!</p>
            </div>
        );
    }
}

export default Note;