import React from "react";

const Card = () => {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F3%2F6%2F1%2F487485.jpg&f=1&nofb=1&ipt=fcc0c00995b5cd0bc122fbf9d6e90ab73aa6496024f829264e10a9591d5a02da&ipo=images" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, temporibus accusamus? Necessitatibus enim voluptas assumenda illum repellendus in hic vero quia? Aliquid corrupti sapiente eligendi nulla reiciendis consequatur sunt temporibus?</p>
                <div className="container d-flex justify-content-center ">
                    <a href="#" class="btn  btn-primary  ">Find out more!</a>
                </div>
            </div>
        </div>
    );
}

export default Card; 